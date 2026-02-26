/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-27)
 * Refined by AI System Architect & Knowledge Engineer
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Reasoning & Governance
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Strategic Supervisor", "group": "Entity", "level": 0, "desc": "AI의 논리를 해체하고 재구성하여 최종 판단 및 실행을 승인하는 인간 관리자." },
        { "id": "Logic_OS", "label": "Logic Deconstruction OS", "group": "Governance", "level": 1, "desc": "Zero-base 추론과 주장-증거 맵을 통해 문서의 논리적 공백과 편향을 적발하는 판단 시스템." },
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "에이전트 생태계의 유효한 객체와 관계를 규정하여 환각을 차단하는 시맨틱 방화벽." },

        // =====================
        // 2. Intelligence & Infrastructure
        // =====================
        { "id": "LLM", "label": "Reasoning Core (LLM)", "group": "Infrastructure", "level": 1, "desc": "심층적인 반복 추론 및 자가 학습을 통해 지능을 확장하는 핵심 인지 엔진." },
        { "id": "Self_Evolving_AI", "label": "Self-Evolving AI", "group": "Infrastructure", "level": 1, "desc": "실행 로그를 분석하여 자신의 아키텍처와 추론 경로를 스스로 최적화하는 진화형 시스템." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "임베디드 장치에서 GPU/NPU 가속을 통해 밀리초 단위 추론을 지원하는 구글의 표준 런타임." },
        { "id": "NPU_HA", "label": "NPU Hardware Abstraction", "group": "Infrastructure", "level": 2, "desc": "Hailo-8/10H 등 전용 가속기의 성능을 소프트웨어 계층으로 직결하는 물리 제어 레이어." },

        // =====================
        // 3. Frameworks & Multi-Agent Systems
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "분업화된 전문 에이전트 팀을 조율하여 복잡한 비즈니스 및 산업 프로세스를 완성하는 아키텍처." },
        { "id": "MAPE_K", "label": "MAPE-K Loop", "group": "Framework", "level": 2, "desc": "Monitor-Analyze-Plan-Execute 루프를 통해 자율적 시스템 제어를 수행하는 표준 프레임워크." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Model Context Protocol을 구현하여 에이전트와 기업 데이터 및 물리 장치를 연결하는 관문." },

        // =====================
        // 4. Vertical AI Applications (AIoT)
        // =====================
        { "id": "Proactive_SOP", "label": "Proactive Response SOP", "group": "Application", "level": 3, "desc": "사고 징후 감지 시 엣지에서 즉각적인 자율 실행 지침을 생성하여 사고를 예방하는 대응 체계." },
        { "id": "Edge_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "OT 데이터를 엣지에서 실시간 동기화하여 물리 장비의 상태를 최적화하는 디지털 복제 모델." },
        { "id": "Safety_Agent", "label": "Predictive Safety Agent", "group": "Application", "level": 3, "desc": "산업 현장의 비정형 데이터를 스캔하여 잠재적 위험 요소를 실시간으로 식별하고 경고하는 에이전트." },

        // =====================
        // 5. Operational Resources
        // =====================
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 모니터링하고 중앙 거버넌스를 적용하는 통합 제어 평면." },
        { "id": "Database", "label": "Knowledge DB", "group": "Resource", "level": 3, "desc": "Structured and unstructured long-term memory sources providing context." }
    ],
    "links": [
        // Governance & Reasoning Flows
        { "source": "User", "target": "Logic_OS", "type": "enforces", "desc": "Independent verification" },
        { "source": "Logic_OS", "target": "Ontology", "type": "validates", "desc": "Refining world rules" },
        { "source": "Ontology", "target": "Command_Center", "type": "informs", "desc": "Semantic safety" },

        // Infrastructure & Acceleration Flows
        { "source": "LLM", "target": "Self_Evolving_AI", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge deployment" },
        { "source": "LiteRT", "target": "NPU_HA", "type": "utilizes", "desc": "Hardware acceleration" },
        { "source": "Agent", "target": "MCP_Server", "type": "connects_via", "desc": "Standardized interoperability" },

        // Vertical Application Links
        { "source": "MAO", "target": "MAPE_K", "type": "implements", "desc": "Control logic" },
        { "source": "MAPE_K", "target": "Proactive_SOP", "type": "triggers", "desc": "Immediate action" },
        { "source": "NPU_HA", "target": "Safety_Agent", "type": "powers", "desc": "Real-time hazard detection" },
        { "source": "MCP_Server", "target": "Edge_Twin", "type": "enables", "desc": "OT data integration" },

        // Final Control & Reporting
        { "source": "System", "target": "Database", "type": "queries", "desc": "Context retrieval" },
        { "source": "Command_Center", "target": "User", "type": "reports_to", "desc": "Final decision approval" }
    ]
};
