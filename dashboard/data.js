const data = {
    nodes: [
        // --- 기존 기본 노드 ---
        { id: "AI System", group: "Core", level: 1 },
        { id: "Human User", group: "User", level: 1 },
        { id: "Ontology Model", group: "Core", level: 2 },
        { id: "MCP Server", group: "Infrastructure", level: 2 },
        { id: "Knowledge Center DB", group: "Infrastructure", level: 2 },
        { id: "Inference Agent", group: "Agent", level: 2 },
        { id: "Control Dashboard", group: "Interface", level: 2 },
        { id: "Security/Policy", group: "Governance", level: 2 },
        { id: "Unstructured Data", group: "Resource", level: 2 },

        // --- 신규 트렌드 노드 추가 ---
        { id: "Agentic Reasoning", group: "Framework", level: 1 },
        { id: "Multi-Agent Orchestration", group: "Framework", level: 2 },
        { id: "Agentic RAG", group: "Application", level: 1 },
        { id: "SLM (Small Language Models)", group: "On-device", level: 1 },
        { id: "Hybrid Computing", group: "On-device", level: 2 },
        { id: "Domain-Specific AI", group: "Application", level: 2 }
    ],
    links: [
        // --- 기존 관계 ---
        { source: "Human User", target: "AI System", value: 2 },
        { source: "AI System", target: "Ontology Model", value: 1 },
        { source: "AI System", target: "MCP Server", value: 1 },
        { source: "AI System", target: "Knowledge Center DB", value: 1 },
        { source: "AI System", target: "Inference Agent", value: 1 },
        { source: "AI System", target: "Control Dashboard", value: 1 },
        { source: "AI System", target: "Security/Policy", value: 1 },
        { source: "AI System", target: "Unstructured Data", value: 1 },

        // --- 신규 관계 추가 ---
        { source: "AI System", target: "Agentic Reasoning", value: 2 },
        { source: "Agentic Reasoning", target: "Multi-Agent Orchestration", value: 1 },
        { source: "Agentic Reasoning", target: "Agentic RAG", value: 1 },
        { source: "AI System", target: "SLM (Small Language Models)", value: 2 },
        { source: "SLM (Small Language Models)", target: "Hybrid Computing", value: 1 },
        { source: "Agentic RAG", target: "Domain-Specific AI", value: 1 }
    ]
};
