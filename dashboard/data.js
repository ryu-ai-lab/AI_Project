/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-18)
 * Refined via NotebookLM Reasoning
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Systems & Governance
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Human-in-the-Loop", "group": "Entity", "level": 0, "desc": "Strategic human supervisor managing exception handling and ethical oversight." },
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "Semantic firewall defining valid entities and relationship logic." },
        { "id": "Policy", "label": "Governance-as-Code", "group": "Governance", "level": 2, "desc": "Automated, programmable rules governing agent autonomy limits." },

        // =====================
        // 2. Agentic Evolution (2026 Mainstream)
        // =====================
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "Goal-oriented entity moving from assistive tools to autonomous decision engines." },
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "Mandatory architecture for coordinating specialized parallel agent teams." },
        { "id": "Orchestrator", "label": "Planner Agent", "group": "Entity", "level": 2, "desc": "Coordinator that plans, sequences, and supervises distributed execution." },
        { "id": "Self_Verification", "label": "Self-Verification", "group": "Framework", "level": 2, "desc": "Internal feedback loops allowing agents to autonomously verify and correct errors." },
        
        // =====================
        // 3. Infrastructure & On-device AI
        // =====================
        { "id": "LLM", "label": "Reasoning Engine (LLM)", "group": "Infrastructure", "level": 1, "desc": "The foundational cognitive layer, evolving towards deep reasoning and self-evolution." },
        { "id": "SLM", "label": "Small Models (SLM)", "group": "Infrastructure", "level": 1, "desc": "Task-specific models optimized for high-efficiency edge environments." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "Google's standard for 1.4x faster on-device GPU inference (v2026)." },
        { "id": "Protocol", "label": "Model Context Protocol", "group": "Infrastructure", "level": 1, "desc": "Standardized 'Agent Internet' protocol for connecting models to tools." },

        // =====================
        // 4. Resources & Applications
        // =====================
        { "id": "Agentic_RAG", "label": "Agentic RAG", "group": "Application", "level": 1, "desc": "Autonomous retrieval-augmented generation with adaptive routing." },
        { "id": "AI_Wallet", "label": "Agentic Digital Wallet", "group": "Resource", "level": 3, "desc": "Autonomous payment rails for agent-to-service transactions." },
        { "id": "Tool", "label": "External Tool / API", "group": "Resource", "level": 3, "desc": "Executable functions or APIs invoked via standardized protocols." },
        { "id": "Database", "label": "Vector/Graph DB", "group": "Resource", "level": 3, "desc": "Structured and unstructured long-term memory sources." }
    ],
    "links": [
        // Governance & Strategic Loops
        { "source": "User", "target": "Orchestrator", "type": "supervises", "desc": "Strategic oversight" },
        { "source": "Policy", "target": "MAO", "type": "governs", "desc": "Boundary definition" },
        { "source": "Ontology", "target": "Agent", "type": "validates", "desc": "Semantic alignment" },

        // Orchestration & Agency
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Composed of" },
        { "source": "Agent", "target": "MAO", "type": "scales_via", "desc": "Team-based execution" },
        { "source": "MAO", "target": "Orchestrator", "type": "implements", "desc": "Coordinator role" },
        { "source": "Agent", "target": "Self_Verification", "type": "implements", "desc": "Error correction" },

        // Infrastructure & Physical Intelligence
        { "source": "LLM", "target": "SLM", "type": "distills_into", "desc": "Edge optimization" },
        { "source": "SLM", "target": "LiteRT", "type": "deploys_on", "desc": "GPU-accelerated inference" },
        { "source": "Agent", "target": "Protocol", "type": "speaks", "desc": "Standardized connection" },
        { "source": "Protocol", "target": "Tool", "type": "accesses", "desc": "Unified tool use" },

        // Economic & Memory Flows
        { "source": "Agent", "target": "AI_Wallet", "type": "authorizes", "desc": "Autonomous commerce" },
        { "source": "Agentic_RAG", "target": "Database", "type": "queries", "desc": "Adaptive retrieval" }
    ]
};
