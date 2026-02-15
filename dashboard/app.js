document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Canvas & Context
    const container = document.getElementById('graph-wrapper');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Remove any existing SVG to prevent duplicates
    d3.select('#graph-wrapper svg').remove();

    const svg = d3.select('#graph-wrapper')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [0, 0, width, height])
        .style('background', 'transparent'); // Let CSS handle background

    // Zoom behavior
    const g = svg.append('g');
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });
    svg.call(zoom);

    // 2. Define Arrow Markers for Links
    svg.append('defs').selectAll('marker')
        .data(['end'])
        .enter().append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 22) // Position of arrow relative to node center (r + padding)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#64748b'); // Slate-500

    // 3. Color Scales & Groups
    const groupColors = {
        "Entity": "#60a5fa",       // Blue
        "Governance": "#f87171",   // Red
        "Infrastructure": "#c084fc", // Purple
        "Resource": "#fbbf24"      // Amber
    };

    // 4. Force Simulation Setup
    const simulation = d3.forceSimulation(graphData.nodes)
        .force("link", d3.forceLink(graphData.links).id(d => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(35).iterations(2));


    // 5. Draw Links
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graphData.links)
        .join("line")
        .attr("stroke", "#475569")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .attr("marker-end", "url(#arrow)");

    // 6. Draw Nodes
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(graphData.nodes)
        .join("g")
        .attr("cursor", "pointer")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // Node Circles
    node.append("circle")
        .attr("r", (d) => d.level === 0 ? 18 : 12) // Larger for top-level nodes
        .attr("fill", d => groupColors[d.group] || "#94a3b8")
        .attr("stroke", "#1e293b")
        .attr("stroke-width", 2)
        .style("filter", "drop-shadow(0 0 4px rgba(0,0,0,0.5))");

    // Node Labels
    node.append("text")
        .text(d => d.label)
        .attr("x", 0)
        .attr("y", (d) => d.level === 0 ? 32 : 26)
        .attr("text-anchor", "middle")
        .style("font-size", (d) => d.level === 0 ? "14px" : "11px")
        .style("fill", "#e2e8f0")
        .style("font-weight", (d) => d.level === 0 ? "600" : "400")
        .style("pointer-events", "none")
        .style("text-shadow", "0 2px 4px rgba(0,0,0,0.8)");


    // 7. Simulation Tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });


    // 8. Interaction Logic

    // Highlight functionality & ArXiv Search
    node.on("click", (event, d) => {
        event.stopPropagation(); // Prevent background click from closing

        // Open ArXiv search in new tab
        const query = encodeURIComponent(`${d.label} AI Agent Technology`);
        window.open(`https://arxiv.org/search/?query=${query}&searchtype=all`, '_blank');

        showDetails(d);
        highlightConnections(d);
    });

    // Reset interaction on background click
    svg.on("click", () => {
        resetHighlight();
        hidePanel();
    });

    function highlightConnections(selectedNode) {
        // Reset styles first
        resetHighlight();

        // Dim everything
        node.style("opacity", 0.2);
        link.style("opacity", 0.1);

        // Highlight selected node
        const connectedNodeIds = new Set();
        connectedNodeIds.add(selectedNode.id);

        // Find connected links and nodes
        link.filter(l => l.source.id === selectedNode.id || l.target.id === selectedNode.id)
            .style("opacity", 1)
            .attr("stroke", "#38bdf8") // Highlight color
            .attr("stroke-width", 2.5)
            .each(l => {
                connectedNodeIds.add(l.source.id);
                connectedNodeIds.add(l.target.id);
            });

        // Highlight connected nodes
        node.filter(n => connectedNodeIds.has(n.id))
            .style("opacity", 1);
    }

    function resetHighlight() {
        node.style("opacity", 1);
        link.style("opacity", 0.4)
            .attr("stroke", "#475569")
            .attr("stroke-width", 1.5);
    }


    // Sidebar Details Panel
    const panel = document.getElementById('details-panel');
    const labelEl = document.getElementById('node-label');
    const badgeEl = document.getElementById('node-type-badge');
    const descEl = document.getElementById('node-desc');
    const connectionsEl = document.getElementById('node-connections'); // Ensure this ID exists in HTML
    const closeBtn = document.getElementById('close-panel-btn');

    closeBtn.addEventListener('click', hidePanel);

    function showDetails(d) {
        panel.classList.remove('hidden');
        labelEl.textContent = d.label;

        badgeEl.textContent = d.group;
        badgeEl.style.backgroundColor = `${groupColors[d.group]}20`; // 20% opacity hex
        badgeEl.style.color = groupColors[d.group];
        badgeEl.style.border = `1px solid ${groupColors[d.group]}`;

        descEl.textContent = d.desc;

        // Clear previous papers content if any remains
        connectionsEl.innerHTML = '';
    }

    function hidePanel() {
        panel.classList.add('hidden');
        resetHighlight();
    }


    // Drag Handlers
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Resize Handling
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;

        // Update SVG dimensions (viewBox handles scaling, but simulation center needs updates)
        simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.alpha(0.3).restart();
    });
});
