/**
 * Knowledge Graph Ontology Data (Updated: 2026-03-12)
 * Refined by AI System Architect & Knowledge Engineer
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Governance & Strategic Logic (Lv 0-1)
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Strategic Supervisor", "group": "Entity", "level": 0, "desc": "에이전트 팀에 목표를 부여하고 실행 결과의 품질과 논리적 타당성을 최종 검증하는 인간 관리자." },
        { "id": "Logic_Deconstruction", "label": "Logic Deconstruction", "group": "Governance", "level": 1, "desc": "Zero-base 추론과 주장-증거 대조를 통해 지식의 무결성을 검증하고 논리적 공백을 적발하는 시스템." },
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "에이전트 생태계의 유효한 객체와 관계를 규정하여 환각을 차단하는 시맨틱 방화벽." },

        // =====================
        // 2. Intelligence & Infrastructure (Lv 1-2)
        // =====================
        { "id": "LLM", "label": "Reasoning Core", "group": "Infrastructure", "level": 1, "desc": "심층적인 반복 추론 및 자가 학습을 통해 지능을 확장하는 핵심 인지 엔진." },
        { "id": "Self_Evolving_Engine", "label": "Self-Evolving Engine", "group": "Infrastructure", "level": 1, "desc": "실행 로그를 분석하여 자신의 아키텍처와 추론 경로를 스스로 최적화하는 자율 진화형 시스템." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "임베디드 장치에서 GPU/NPU 가속을 통해 밀리초 단위 추론을 지원하는 구글의 표준 런타임." },
        { "id": "NPU_HA", "label": "NPU Hardware Abstraction", "group": "Infrastructure", "level": 2, "desc": "Hailo-8/10H 등 전용 가속기의 성능을 소프트웨어 계층으로 직결하는 물리 제어 레이어." },

        // =====================
        // 3. Frameworks & Multi-Agent Systems (Lv 1-2)
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "분업화된 전문 에이전트 팀을 조율하여 복잡한 비즈니스 및 산업 프로세스를 완성하는 아키텍처." },
        { "id": "MAPE_K", "label": "MAPE-K Loop", "group": "Framework", "level": 2, "desc": "Monitor-Analyze-Plan-Execute 루프를 통해 자율적 시스템 제어를 수행하는 표준 프레임워크." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Model Context Protocol을 통해 에이전트와 데이터/장치를 표준화된 방식으로 연결하는 관문." },

        // =====================
        // 4. Vertical AI Applications (AIoT) (Lv 3)
        // =====================
        { "id": "Proactive_OT_Control", "label": "Proactive OT Control", "group": "Application", "level": 3, "desc": "운영 기술(OT)과 결합하여 사고 징후를 사전에 감지하고 엣지에서 즉각적인 제어 명령을 실행하는 체계." },
        { "id": "Edge_Safety_Agent", "label": "Edge Safety Agent", "group": "Application", "level": 3, "desc": "산업 현장의 실시간 센서 데이터를 스캔하여 위험 요소를 식별하고 자율적으로 안전 조치를 취하는 에이전트." },
        { "id": "Industrial_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "물리적 장비의 상태를 엣지 서버에서 실시간 동기화하여 공정 최적화 및 유지보수를 수행하는 모델." },

        // =====================
        // 5. Shared Resources & Control (Lv 1-3)
        // =====================
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 실시간 모니터링하고 중앙 거버넌스를 적용하는 통합 제어 평면." },
        { "id": "Database", "label": "Knowledge Database", "group": "Resource", "level": 3, "desc": "에이전트가 장기 기억 및 문맥 파악을 위해 활용하는 정형/비정형 데이터 저장소." }
    ],
    "links": [
        { "source": "User", "target": "Logic_Deconstruction", "type": "enforces", "desc": "Verification strategy" },
        { "source": "Logic_Deconstruction", "target": "Ontology", "type": "validates", "desc": "World rule refinement" },
        { "source": "LLM", "target": "Self_Evolving_Engine", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge optimization" },
        { "source": "LiteRT", "target": "NPU_HA", "type": "utilizes", "desc": "Hardware acceleration" },
        { "source": "MAO", "target": "MAPE_K", "type": "implements", "desc": "Control logic" },
        { "source": "MAPE_K", "target": "Proactive_OT_Control", "type": "triggers", "desc": "Immediate action" },
        { "source": "NPU_HA", "target": "Edge_Safety_Agent", "type": "powers", "desc": "Low-latency hazard scan" },
        { "source": "MCP_Server", "target": "Industrial_Twin", "type": "enables", "desc": "OT data integration" },
        { "source": "System", "target": "Database", "type": "queries", "desc": "Context retrieval" },
        { "source": "Command_Center", "target": "User", "type": "reports_to", "desc": "Outcome approval" }
    ]
};
