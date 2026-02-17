const graphData = {
    "nodes": [
        // =====================
        // 1. 기존 핵심 엔티티
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "A software entity capable of perceiving its environment and acting upon it." },
        { "id": "Orchestrator", "label": "Orchestrator Agent", "group": "Entity", "level": 2, "desc": "High-level planner that breaks down complex tasks and delegates them." },
        { "id": "Worker", "label": "Worker Agent", "group": "Entity", "level": 2, "desc": "Specialized agent focused on executing specific sub-tasks efficiently." },
        { "id": "User", "label": "Human User", "group": "Entity", "level": 0, "desc": "The human operator who sets high-level goals and approves actions." },

        // Governance
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "The 'Semantic Firewall' defining valid entities and relationships." },
        { "id": "Policy", "label": "Governance Policy", "group": "Governance", "level": 2, "desc": "Rules and constraints that strictly govern agent behavior." },
        { "id": "Constraint", "label": "Context Constraint", "group": "Governance", "level": 2, "desc": "Dynamic limitations based on system state or permissions." },

        // Infrastructure
        { "id": "Protocol", "label": "Model Context Protocol", "group": "Infrastructure", "level": 1, "desc": "Universal standard (v2026) for connecting AI models to external systems." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Server implementing MCP to expose data and tools." },
        { "id": "LLM", "label": "Cognitive Layer (LLM)", "group": "Infrastructure", "level": 1, "desc": "The reasoning engine powering the agent's decision making." },

        // Resources
        { "id": "Tool", "label": "External Tool / API", "group": "Resource", "level": 3, "desc": "Executable functions or APIs that agents invoke." },
        { "id": "Database", "label": "Knowledge Graph / DB", "group": "Resource", "level": 3, "desc": "Structured data sources providing long-term memory." },
        { "id": "Document", "label": "Unstructured Data", "group": "Resource", "level": 3, "desc": "Documents and files for context retrieval." },

        // =====================
        // 2. 이전 추가 데이터 (수동 테스트 및 초기 트렌드)
        // =====================
        { "id": "Self_Evolving", "label": "Self-Evolving Agent", "group": "Entity", "level": 1, "desc": "Agents that autonomously modify their own code and prompts." },
        { "id": "Vertical_Agent", "label": "Vertical AI Agent", "group": "Entity", "level": 2, "desc": "Specialized agents for specific industry domains." },
        { "id": "VLA_Model", "label": "VLA (Vision-Action)", "group": "Infrastructure", "level": 1, "desc": "Models connecting vision-language to real-time physical action." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "Universal on-device inference framework (v2026)." },
        { "id": "Deep_Think", "label": "Gemini Deep Think", "group": "Infrastructure", "level": 1, "desc": "Advanced reasoning layer for complex scientific discovery." },
        { "id": "Agentic Reasoning", "label": "Agentic Reasoning", "group": "Framework", "level": 1, "desc": "Advanced iterative reasoning patterns for LLMs." },
        { "id": "Agentic RAG", "label": "Agentic RAG", "group": "Application", "level": 1, "desc": "Autonomous retrieval-augmented generation." },
        { "id": "Assembly_Line", "label": "Digital Assembly Line", "group": "Framework", "level": 2, "desc": "Collaborative agent workflows for enterprise-grade automation." },
        { "id": "SLM", "label": "SLM (Small Models)", "group": "On-device", "level": 1, "desc": "Efficient models optimized for edge computing." },

        // =====================
        // 3. NotebookLM 정제 완료 데이터 (최신 반영)
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "팀 단위 에이전트의 기획 및 검증 레이어를 관리하는 통합 아키텍처." },
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 제어하고 'Governance-as-Code'를 적용하는 중앙 제어 평면." },
        { "id": "AI_Wallet", "label": "Agentic Digital Wallet", "group": "Resource", "level": 3, "desc": "에이전트 간 또는 에이전트-서비스 간 자율 거래를 위한 전용 결제 인터페이스." },
        { "id": "Belief_RL", "label": "ΔBelief-RL", "group": "Infrastructure", "level": 2, "desc": "모델 내부의 신념 변화를 보상으로 활용하는 고효율 능동 감지(Active Sensing) 프레임워크." }
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

        // Infrastructure
        { "source": "Agent", "target": "Protocol", "type": "speaks", "desc": "Communicates via" },
        { "source": "Protocol", "target": "MCP_Server", "type": "connects_to", "desc": "Standardizes link" },
        { "source": "MCP_Server", "target": "Tool", "type": "exposes", "desc": "Makes available" },
        { "source": "MCP_Server", "target": "Database", "type": "exposes", "desc": "Makes available" },
        { "source": "MCP_Server", "target": "Document", "type": "serves", "desc": "Provides content" },

        // Previous Additions Flows
        { "source": "Agent", "target": "Self_Evolving", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "System", "target": "VLA_Model", "type": "implements", "desc": "Visual perception to action" },
        { "source": "Orchestrator", "target": "Vertical_Agent", "type": "coordinates", "desc": "Domain-specific execution" },
        { "source": "Protocol", "target": "LiteRT", "type": "standardizes", "desc": "Universal edge deployment" },
        { "source": "LLM", "target": "Deep_Think", "type": "evolves_into", "desc": "Advanced reasoning layer" },
        { "source": "System", "target": "Agentic Reasoning", "type": "incorporates", "desc": "Iterative logic" },
        { "source": "System", "target": "Agentic RAG", "type": "implements", "desc": "Smart retrieval" },
        { "source": "Orchestrator", "target": "Assembly_Line", "type": "manages", "desc": "Agentic workflow coordination" },
        { "source": "System", "target": "SLM", "type": "deploys", "desc": "Edge optimization" },
        { "source": "Worker", "target": "Tool", "type": "executes", "desc": "Performs action" },
        { "source": "Worker", "target": "Database", "type": "queries", "desc": "Retrieves info" },

        // NotebookLM Refined Flows (최신 반영)
        { "source": "Orchestrator", "target": "MAO", "type": "implements", "desc": "단일 에이전트에서 협업형 팀 구조로 확장" },
        { "source": "Policy", "target": "Command_Center", "type": "governs", "desc": "코드화된 정책을 통한 중앙 집중식 제어" },
        { "source": "Agent", "target": "AI_Wallet", "type": "utilizes", "desc": "자율적 경제 활동 권한 부여" },
        { "source": "LLM", "target": "Belief_RL", "type": "optimizes", "desc": "내부 신념 체계 기반의 효율적 학습" }
    ]
};
