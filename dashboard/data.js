const data = {
    nodes: [
        // --- 기존 노드 (AI Agent Ontology 2026 기반) ---
        { id: "Human User", group: "Entity", level: 1 },
        { id: "Orchestrator Agent", group: "Entity", level: 1 },
        { id: "Knowledge/Graph DB", group: "Resource", level: 2 },
        { id: "Unstructured Data", group: "Resource", level: 3 },
        { id: "Semantic/NER/NLP Utils", group: "Resource", level: 3 },
        { id: "MCP Servers", group: "Infrastructure", level: 2 },
        { id: "Worker Agent", group: "Entity", level: 2 },
        { id: "Ontology Model", group: "Infrastructure", level: 3 },
        { id: "Control Dashboard", group: "Infrastructure", level: 2 },
        { id: "AI System", group: "Entity", level: 1 },
        { id: "Autonomous UI Agent", group: "Entity", level: 3 },
        { id: "Governance Policy", group: "Governance", level: 2 },

        // --- 새롭게 추가된 기술 키워드 (2026-02-16 보고) ---
        { id: "Agentic Reasoning", group: "Framework", level: 1 },
        { id: "Multi-Agent Orchestration", group: "Framework", level: 2 },
        { id: "Agentic RAG", group: "Application", level: 1 },
        { id: "SLM (Small Language Models)", group: "On-device", level: 1 },
        { id: "Hybrid Computing", group: "On-device", level: 2 },
        { id: "Domain-Specific AI", group: "Application", level: 2 }
    ],
    links: [
        // --- 기존 관계 ---
        { source: "Human User", target: "Orchestrator Agent", value: 2 },
        { source: "Orchestrator Agent", target: "Knowledge/Graph DB", value: 1 },
        { source: "Knowledge/Graph DB", target: "Unstructured Data", value: 1 },
        { source: "Knowledge/Graph DB", target: "Semantic/NER/NLP Utils", value: 1 },
        { source: "Orchestrator Agent", target: "MCP Servers", value: 1 },
        { source: "Orchestrator Agent", target: "Worker Agent", value: 1 },
        { source: "Knowledge/Graph DB", target: "Ontology Model", value: 1 },
        { source: "Orchestrator Agent", target: "Control Dashboard", value: 1 },
        { source: "Orchestrator Agent", target: "AI System", value: 2 },
        { source: "Worker Agent", target: "Autonomous UI Agent", value: 1 },
        { source: "AI System", target: "Governance Policy", value: 1 },

        // --- 신규 기술 관계 연결 ---
        { source: "AI System", target: "Agentic Reasoning", value: 2 },
        { source: "Agentic Reasoning", target: "Multi-Agent Orchestration", value: 1 },
        { source: "Agentic Reasoning", target: "Agentic RAG", value: 1 },
        { source: "AI System", target: "SLM (Small Language Models)", value: 2 },
        { source: "SLM (Small Language Models)", target: "Hybrid Computing", value: 1 },
        { source: "Agentic RAG", target: "Domain-Specific AI", value: 1 }
    ]
};
