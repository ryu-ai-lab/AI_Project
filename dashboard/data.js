        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "A software entity capable of perceiving its environment and acting upon it to achieve goals." },
        { "id": "Orchestrator", "label": "Orchestrator Agent", "group": "Entity", "level": 2, "desc": "High-level planner that breaks down complex tasks and delegates them to worker agents." },
// nodes 배열에 추가
{ id: "Agentic Reasoning", group: "Framework", level: 1 },
{ id: "Multi-Agent Orchestration", group: "Framework", level: 2 },
{ id: "Agentic RAG", group: "Application", level: 1 },
{ id: "SLM (Small Language Models)", group: "On-device", level: 1 },
{ id: "Hybrid Computing", group: "On-device", level: 2 },
{ id: "Domain-Specific AI", group: "Application", level: 2 },

// links 배열에 추가
{ source: "AI System", target: "Agentic Reasoning", value: 2 },
{ source: "Agentic Reasoning", target: "Multi-Agent Orchestration", value: 1 },
{ source: "Agentic Reasoning", target: "Agentic RAG", value: 1 },
{ source: "AI System", target: "SLM (Small Language Models)", value: 2 },
{ source: "SLM (Small Language Models)", target: "Hybrid Computing", value: 1 },
{ source: "Agentic RAG", target: "Domain-Specific AI", value: 1 }
const graphData = {
    "nodes": [
        // Entities
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "A software entity capable of perceiving its environment and acting upon it to achieve goals." },
        { "id": "Orchestrator", "label": "Orchestrator Agent", "group": "Entity", "level": 2, "desc": "High-level planner that breaks down complex tasks and delegates them to worker agents." },
        { "id": "Worker", "label": "Worker Agent", "group": "Entity", "level": 2, "desc": "Specialized agent focused on executing specific sub-tasks efficiently." },
        { "id": "User", "label": "Human User", "group": "Entity", "level": 0, "desc": "The human operator who sets high-level goals and approves critical actions." },

        // Governance
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "The 'Semantic Firewall' defining valid entities, relationships, and permitted actions." },
        { "id": "Policy", "label": "Governance Policy", "group": "Governance", "level": 2, "desc": "Rules and constraints that strictly govern agent behavior and resource access." },
        { "id": "Constraint", "label": "Context Constraint", "group": "Governance", "level": 2, "desc": "Dynamic limitations based on current system state or user permission levels." },

        // Infrastructure
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "A server implementing the Model Context Protocol to expose data and tools." },
        { "id": "Protocol", "label": "Model Context Protocol", "group": "Infrastructure", "level": 1, "desc": "The universal open standard (v2026) for connecting AI models to external systems." },
        { "id": "LLM", "label": "Cognitive Layer (LLM)", "group": "Infrastructure", "level": 1, "desc": "The reasoning engine (Large Language Model) powering the agent's decision making." },

        // Resources
        { "id": "Tool", "label": "External Tool / API", "group": "Resource", "level": 3, "desc": "Executable functions or external APIs that agents can invoke to perform actions." },
        { "id": "Database", "label": "Knowledge Graph / DB", "group": "Resource", "level": 3, "desc": "Structured data sources providing long-term memory and context to the system." },
        { "id": "Document", "label": "Unstructured Data", "group": "Resource", "level": 3, "desc": "Documents and files that agents can read for context retrieval." }
    ],
    "links": [
        // Entity Relationships
        { "source": "User", "target": "Orchestrator", "type": "commands", "desc": "Initiates tasks" },
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Composed of" },
        { "source": "Orchestrator", "target": "Worker", "type": "delegates", "desc": "Assigns sub-tasks" },
        { "source": "Agent", "target": "LLM", "type": "thinks_with", "desc": "Uses for reasoning" },

        // Governance Flows
        { "source": "Ontology", "target": "Agent", "type": "validates", "desc": "Enforces structure" },
        { "source": "Policy", "target": "Agent", "type": "restricts", "desc": "Limits actions" },
        { "source": "Constraint", "target": "Tool", "type": "guards", "desc": "Protects access" },

        // Infrastructure & Protocol
        { "source": "Agent", "target": "Protocol", "type": "speaks", "desc": "Communicates via" },
        { "source": "Protocol", "target": "MCP_Server", "type": "connects_to", "desc": "Standardizes link" },
        { "source": "MCP_Server", "target": "Tool", "type": "exposes", "desc": "Makes available" },
        { "source": "MCP_Server", "target": "Database", "type": "exposes", "desc": "Makes available" },
        { "source": "MCP_Server", "target": "Document", "type": "serves", "desc": "Provides content" },

        // Execution
        { "source": "Worker", "target": "Tool", "type": "executes", "desc": "Performs action" },
        { "source": "Worker", "target": "Database", "type": "queries", "desc": "Retrieves info" }
    ]
};
