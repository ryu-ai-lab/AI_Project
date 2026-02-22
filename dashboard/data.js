/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-23)
 * Focused on Agentic Workflows, Vertical AIoT, and Hardware-level Optimization
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Entities & Humans
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Human Supervisor", "group": "Entity", "level": 0, "desc": "Strategic oversight focusing on exceptions and high-stakes decision points." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "Goal-oriented software entity transitioning from prompts to autonomous outcome ownership." },

        // =====================
        // 2. Intelligence & Infrastructure
        // =====================
        { "id": "LLM", "label": "Reasoning Engine (LLM)", "group": "Infrastructure", "level": 1, "desc": "Primary cognitive engine evolving toward deep iterative reasoning and self-evolution." },
        { "id": "LiteRT", "label": "LiteRT Production Stack", "group": "Infrastructure", "level": 2, "desc": "Google's universal on-device AI framework with unified GPU/NPU acceleration (v2026)." },
        { "id": "CompiledModel_API", "label": "CompiledModel API", "group": "Infrastructure", "level": 2, "desc": "NPU 가속을 직접 타겟팅하여 성능을 최대 100배 향상시키는 최신 추론 인터페이스." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "상호 운용성을 위해 에이전트와 기업용 앱/데이터를 연결하는 표준 서버 아키텍처." },

        // =====================
        // 3. Frameworks & Orchestration
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "분업화된 전문 에이전트 팀을 조율하여 복잡한 비즈니스 프로세스를 자율적으로 완료하는 아키텍처." },
        { "id": "Planner_Agent", "label": "Coordinator Agent", "group": "Entity", "level": 2, "desc": "작업의 순서를 기획하고 실행을 감독하며 실패를 격리하는 상위 조율 에이전트." },
        { "id": "Self_Evolving_AI", "label": "Self-Evolving AI", "group": "Framework", "level": 2, "desc": "사용 패턴에 기반하여 자체 아키텍처와 추론 경로를 지속적으로 개선하는 지능형 시스템." },

        // =====================
        // 4. Vertical AI Applications (AIoT)
        // =====================
        { "id": "Proactive_Control", "label": "Proactive Process Control", "group": "Application", "level": 3, "desc": "엣지에서 실시간 위치 및 공정 데이터를 분석하여 사전에 공정 오류를 바로잡는 제어 시스템." },
        { "id": "Autonomous_Safety", "label": "Autonomous Safety Response", "group": "Application", "level": 3, "desc": "현장 사고 시 보고를 넘어 자율적으로 작업 지시를 내리고 관련 자원을 조율하는 대응 시스템." },
        { "id": "Edge_Digital_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "운영 기술(OT)과 결합하여 물리적 장비의 상태를 엣지에서 실시간 동기화하고 최적화하는 모델." },

        // =====================
        // 5. Governance & Control
        // =====================
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "The semantic firewall defining the boundaries and validity of agent actions." },
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 모니터링하고 중앙 집중식 거버넌스를 적용하는 제어 평면." },
        { "id": "Policy", "label": "Governance-as-Code", "group": "Governance", "level": 2, "desc": "에이전트의 자율성을 제어하기 위해 코드 형태로 프로그래밍된 규제 및 제약 조건." }
    ],
    "links": [
        // System & Core Relationships
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Composition" },
        { "source": "User", "target": "Command_Center", "type": "supervises", "desc": "Strategic oversight" },
        { "source": "Agent", "target": "MAO", "type": "scales_via", "desc": "Collaborative scaling" },
        { "source": "MAO", "target": "Planner_Agent", "type": "implements", "desc": "Coordination logic" },

        // Intelligence & Infrastructure Flows
        { "source": "LLM", "target": "Self_Evolving_AI", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "On-device optimization" },
        { "source": "LiteRT", "target": "CompiledModel_API", "type": "optimizes_via", "desc": "Direct NPU access" },
        { "source": "Agent", "target": "MCP_Server", "type": "connects_via", "desc": "Interoperability standard" },

        // Vertical Application Links
        { "source": "System", "target": "Proactive_Control", "type": "executes", "desc": "Process protection" },
        { "source": "System", "target": "Autonomous_Safety", "type": "executes", "desc": "Incident response" },
        { "source": "LiteRT", "target": "Edge_Digital_Twin", "type": "powers", "desc": "Low-latency synchronization" },
        { "source": "MCP_Server", "target": "Proactive_Control", "type": "enables", "desc": "OT data integration" },

        // Connectivity & Governance
        { "source": "Ontology", "target": "Command_Center", "type": "validates", "desc": "Semantic safety" },
        { "source": "Policy", "target": "Command_Center", "type": "enforces", "desc": "Constraint application" }
    ]
};
