/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-20)
 * Refined via NotebookLM Contextual Reasoning
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Entities & Humans
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Human Supervisor", "group": "Entity", "level": 0, "desc": "The human operator providing strategic intent and final validation." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "Goal-oriented software entity capable of independent planning and tool use." },

        // =====================
        // 2. Intelligence & Reasoning (Infra)
        // =====================
        { "id": "LLM", "label": "Reasoning Core (LLM)", "group": "Infrastructure", "level": 1, "desc": "The primary cognitive engine; shifting from static inference to iterative reasoning." },
        { "id": "Deep_Think", "label": "Gemini Deep Think", "group": "Infrastructure", "level": 1, "desc": "Advanced reasoning model specialized in complex scientific and mathematical discovery." },
        { "id": "LiteRT", "label": "LiteRT Runtime", "group": "Infrastructure", "level": 2, "desc": "On-device AI runtime for 1.4x faster GPU-accelerated inference (v2026)." },
        { "id": "Protocol", "label": "MCP (Model Context Protocol)", "group": "Infrastructure", "level": 1, "desc": "Universal standard for connecting AI agents to local and remote data/tools." },

        // =====================
        // 3. Frameworks & Orchestration
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "Architecture for managing collaborative agent teams with distinct roles." },
        { "id": "Orchestrator", "label": "Planner Agent", "group": "Entity", "level": 2, "desc": "Hierarchical coordinator that decomposes tasks and delegates to specialized workers." },
        { "id": "Agentic_Reasoning", "label": "Agentic Reasoning", "group": "Framework", "level": 1, "desc": "Advanced iterative logic patterns including reflection and self-correction." },

        // =====================
        // 4. Governance & Semantic Security
        // =====================
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "The semantic firewall defining the rules of reality for the agent ecosystem." },
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "Unified dashboard for monitoring, auditing, and controlling federated agents." },
        { "id": "Policy", "label": "Governance-as-Code", "group": "Governance", "level": 2, "desc": "Programmable guardrails that enforce ethical and operational constraints." },

        // =====================
        // 5. Resources & Knowledge
        // =====================
        { "id": "Database", "label": "Vector/Graph DB", "group": "Resource", "level": 3, "desc": "Memory layer providing long-term context and structured knowledge." },
        { "id": "Tool", "label": "MCP-Enabled Tool", "group": "Resource", "level": 3, "desc": "Dynamic executable functions exposed via the Model Context Protocol." },
        { "id": "AI_Wallet", "label": "Agentic Digital Wallet", "group": "Resource", "level": 3, "desc": "Autonomous payment rails allowing agents to perform economic transactions." }
    ],
    "links": [
        // System & Agent Relationships
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Composition" },
        { "source": "User", "target": "Command_Center", "type": "monitors", "desc": "Operational oversight" },
        { "source": "Agent", "target": "MAO", "type": "scales_via", "desc": "Collaboration" },
        { "source": "MAO", "target": "Orchestrator", "type": "implements", "desc": "Coordination layer" },

        // Reasoning & Inference Flows
        { "source": "Agent", "target": "LLM", "type": "thinks_with", "desc": "Cognitive processing" },
        { "source": "LLM", "target": "Deep_Think", "type": "evolves_into", "desc": "Deep reasoning" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge inference" },
        { "source": "Agent", "target": "Agentic_Reasoning", "type": "incorporates", "desc": "Advanced logic" },

        // Connectivity & Governance
        { "source": "Agent", "target": "Protocol", "type": "speaks", "desc": "Standard communication" },
        { "source": "Protocol", "target": "Tool", "type": "accesses", "desc": "Dynamic tool use" },
        { "source": "Ontology", "target": "Command_Center", "type": "validates", "desc": "Semantic safety" },
        { "source": "Policy", "target": "Command_Center", "type": "enforces", "desc": "Guardrail application" },

        // Resources & Agency
        { "source": "Agent", "target": "AI_Wallet", "type": "authorizes", "desc": "Economic agency" },
        { "source": "Agent", "target": "Database", "type": "queries", "desc": "Memory retrieval" }
    ]
};
