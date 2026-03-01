/**
 * Knowledge Graph Ontology Data (Verified: 2026-03-01)
 * Optimized for Rendering & ArXiv Academic Search
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Governance & Logic (Lv 0-1)
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Strategic Supervisor", "group": "Entity", "level": 0, "desc": "AI의 논리를 해체하고 재구성하여 최종 판단 및 실행을 승인하는 인간 관리자." },
        { "id": "Logic_OS", "label": "Reasoning Chains", "group": "Governance", "level": 1, "desc": "Zero-base 추론과 주장-증거 대조를 통해 지식의 무결성을 검증하는 판단 시스템." },
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "에이전트 생태계의 유효한 객체와 관계를 규정하여 환각을 차단하는 시맨틱 방화벽." },

        // =====================
        // 2. Infrastructure & Hardware (Lv 1-2)
        // =====================
        { "id": "LLM", "label": "Large Language Model", "group": "Infrastructure", "level": 1, "desc": "심층적인 반복 추론 및 자가 학습을 통해 지능을 확장하는 핵심 인지 엔진." },
        { "id": "LiteRT", "label": "Inference Optimization", "group": "Infrastructure", "level": 2, "desc": "임베디드 장치에서 GPU/NPU 가속을 통해 밀리초 단위 추론을 지원하는 구글의 표준 런타임." },
        { "id": "NPU_HA", "label": "NPU Acceleration", "group": "Infrastructure", "level": 2, "desc": "Hailo-8/10H 등 전용 가속기의 성능을 소프트웨어 계층으로 직결하는 물리 제어 레이어." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Model Context Protocol을 구현하여 에이전트와 기업 데이터 및 물리 장치를 연결하는 관문." },

        // =====================
        // 3. Frameworks & Agents (Lv 1-2)
        // =====================
        { "id": "MAO", "label": "Multi-Agent System", "group": "Framework", "level": 1, "desc": "분업화된 전문 에이전트 팀을 조율하여 복잡한 비즈니스 및 산업 프로세스를 완성하는 아키텍처." },
        { "id": "MAPE_K", "label": "MAPE-K Loop", "group": "Framework", "level": 2, "desc": "Monitor-Analyze-Plan-Execute 루프를 통해 자율적 시스템 제어를 수행하는 표준 프레임워크." },

        // =====================
        // 4. Vertical AIoT Apps (Lv 3)
        // =====================
        { "id": "Proactive_SOP", "label": "Autonomous Incident Response", "group": "Application", "level": 3, "desc": "사고 징후 감지 시 엣지에서 즉각적인 자율 실행 지침을 생성하여 사고를 예방하는 대응 체계." },
        { "id": "Edge_Twin", "label": "Industrial Digital Twin", "group": "Application", "level": 3, "desc": "OT 데이터를 엣지에서 실시간 동기화하여 물리 장비의 상태를 최적화하는 디지털 복제 모델." },
        { "id": "Safety_Agent", "label": "Predictive Safety Agent", "group": "Application", "level": 3, "desc": "산업 현장의 비정형 데이터를 스캔하여 잠재적 위험 요소를 실시간으로 식별하고 경고하는 에이전트." },

        // =====================
        // 5. Operational Resources (Lv 3)
        // =====================
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 모니터링하고 중앙 거버넌스를 적용하는 통합 제어 평면." },
        { "id": "Database", "label": "Knowledge Database", "group": "Resource", "level": 3, "desc": "Structured and unstructured long-term memory sources providing context." }
    ],
    "links": [
        { "source": "User", "target": "Logic_OS", "type": "enforces", "desc": "Verification strategy" },
        { "source": "Logic_OS", "target": "Ontology", "type": "validates", "desc": "World rule refinement" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge optimization" },
        { "source": "LiteRT", "target": "NPU_HA", "type": "utilizes", "desc": "Hardware acceleration" },
        { "source": "MAO", "target": "MAPE_K", "type": "implements", "desc": "Control logic" },
        { "source": "MAPE_K", "target": "Proactive_SOP", "type": "triggers", "desc": "Immediate action" },
        { "source": "NPU_HA", "target": "Safety_Agent", "type": "powers", "desc": "Low-latency hazard scan" },
        { "source": "MCP_Server", "target": "Edge_Twin", "type": "enables", "desc": "OT data integration" },
        { "source": "Command_Center", "target": "User", "type": "reports_to", "desc": "Final approval" }
    ]
};
