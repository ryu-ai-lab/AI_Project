const graphData = {
    "nodes": [
        // Core Entities
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "A software entity capable of perceiving its environment and acting upon it." },
        { "id": "Orchestrator", "label": "Orchestrator Agent", "group": "Entity", "level": 2, "desc": "High-level planner that breaks down complex tasks and delegates them." },
        { "id": "Worker", "label": "Worker Agent", "group": "Entity", "level": 2, "desc": "Specialized agent focused on executing specific sub-tasks efficiently." },
        { "id": "User", "label": "Human User", "group": "Entity", "level": 0, "desc": "The human operator who sets high-level goals and approves actions." },
        { "id": "Self_Evolving", "label": "Self-Evolving Agent", "group": "Entity", "level": 1, "desc": "Agents that autonomously modify their own code and prompts." },
        { "id": "Vertical_Agent", "label": "Vertical AI Agent", "group": "Entity", "level": 2, "desc": "Specialized agents for specific industry domains like retail or real estate." },

        // Governance & Ontology
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "The 'Semantic Firewall' defining valid entities and relationships." },
        { "id": "Policy", "label": "Governance Policy", "group": "Governance", "level": 2, "desc": "Rules and constraints that strictly govern agent behavior." },
        { "id": "Constraint", "label": "Context Constraint", "group": "Governance", "level": 2, "desc": "Dynamic limitations based on system state or permissions." },

        // Infrastructure & Reasoning
        { "id": "Protocol", "label": "Model Context Protocol", "group": "Infrastructure", "level": 1, "desc": "Universal standard (v2026) for connecting AI models to external systems." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Server implementing MCP to expose data and tools." },
        { "id": "LLM", "label": "Cognitive Layer (LLM)", "group": "Infrastructure", "level": 1, "desc": "The reasoning engine powering the agent's decision making." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "Universal on-device inference framework (v2026)." },
        { "id": "Deep_Think", "label": "Gemini Deep Think", "group": "Infrastructure", "level": 1, "desc": "Advanced reasoning layer for complex scientific discovery." },
        { "id": "VLA_Model", "label": "VLA (Vision-Action)", "group": "Infrastructure", "level": 1, "desc": "Models connecting vision-language to real-time physical action." },

        // Frameworks & Applications
        { "id": "Agentic Reasoning", "label": "Agentic Reasoning", "group": "Framework", "level": 1, "desc": "Advanced iterative reasoning patterns for LLMs." },
        { "id": "Agentic RAG", "label": "Agentic RAG", "group": "Application", "level": 1, "desc": "Autonomous retrieval-augmented generation." },
        { "id": "Assembly_Line", "label": "Digital Assembly Line", "group": "Framework", "level": 2, "desc": "Collaborative agent workflows for enterprise-grade automation." },
        { "id": "SLM", "label": "SLM (Small Models)", "group": "On-device", "level": 1, "desc": "Efficient models optimized for edge computing." },

        // Resources
        { "id": "Tool", "label": "External Tool / API", "group": "Resource", "level": 3, "desc": "Executable functions or APIs that agents invoke." },
        { "id": "Database", "label": "Knowledge Graph / DB", "group": "Resource", "level": 3, "desc": "Structured data sources providing long-term memory." },
        { "id": "Document", "label": "Unstructured Data", "group": "Resource", "level": 3, "desc": "Documents and files for context retrieval." }
    ],
    "links": [
        // Core Flows
        { "source": "User", "target": "Orchestrator", "type": "commands", "desc": "Initiates tasks" },
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Composed of" },
        { "source": "Orchestrator", "target": "Worker", "type": "delegates", "desc": "Assigns sub-tasks" },
        { "source": "Agent", "target": "LLM", "type": "thinks_with", "desc": "Uses for reasoning" },

        // Governance
        { "source": "Ontology", "target": "Agent", "type": "validates", "desc": "Enforces structure" },
        { "source": "Policy", "target": "Agent", "type": "restricts", "desc": "Limits actions" },
        { "source": "Constraint", "target": "Tool", "type": "guards", "desc": "Protects access" },

        // MCP & Infrastructure
        { "source": "Agent", "target": "Protocol", "type": "speaks", "desc": "Communicates via" },
        { "source": "Protocol", "target": "MCP_Server", "type": "connects_to", "desc": "Standardizes link" },
        { "source": "MCP_Server", "target": "Tool", "type": "exposes", "desc": "Makes available" },
        { "source": "MCP_Server", "target": "Database", "type": "exposes", "desc": "Makes available" },
        { "source": "MCP_Server", "target": "Document", "type": "serves", "desc": "Provides content" },
        { "source": "Protocol", "target": "LiteRT", "type": "standardizes", "desc": "Universal edge deployment" },

        // Advanced Reasoning & Trends
        { "source": "LLM", "target": "Deep_Think", "type": "evolves_into", "desc": "Advanced reasoning layer" },
        { "source": "Orchestrator", "target": "Assembly_Line", "type": "manages", "desc": "Agentic workflow coordination" },
        { "source": "Agent", "target": "Self_Evolving", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "System", "target": "VLA_Model", "type": "implements", "desc": "Visual perception to action" },
        { "source": "Orchestrator", "target": "Vertical_Agent", "type": "coordinates", "desc": "Domain-specific execution" },
        { "source": "System", "target": "Agentic Reasoning", "type": "incorporates", "desc": "Iterative logic" },
        { "source": "System", "target": "Agentic RAG", "type": "implements", "desc": "Smart retrieval" },
        { "source": "System", "target": "SLM", "type": "deploys", "desc": "Edge optimization" },

        // Execution
        { "source": "Worker", "target": "Tool", "type": "executes", "desc": "Performs action" },
        { "source": "Worker", "target": "Database", "type": "queries", "desc": "Retrieves info" }
    ]
};
