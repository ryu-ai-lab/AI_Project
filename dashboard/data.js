const graphData = {
    "nodes": [
        // =====================
        // 1. Core & Governance (Lv 0-1)
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a unit." },
        { "id": "User", "label": "Strategic Supervisor", "group": "Entity", "level": 0, "desc": "AI의 논리를 해체하고 재구성하여 최종 의사결정을 승인하는 인간 관리자." },
        { "id": "Logic_OS", "label": "Logic Deconstruction", "group": "Governance", "level": 1, "desc": "Zero-base 추론과 주장-증거 맵을 통해 문서의 논리적 공백과 편향을 적발하는 시스템." },
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "에이전트 생태계의 유효한 객체와 관계를 규정하는 시맨틱 방화벽." },

        // =====================
        // 2. Infrastructure (Lv 1-2)
        // =====================
        { "id": "LLM", "label": "Reasoning Core", "group": "Infrastructure", "level": 1, "desc": "Primary cognitive engine evolving toward deep iterative reasoning." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "임베디드 장치에서 GPU/NPU 가속을 통해 밀리초 단위 추론을 지원하는 표준 런타임." },
        { "id": "NPU_HA", "label": "NPU Accelerator", "group": "Infrastructure", "level": 2, "desc": "Hailo-8/10H 등 전용 가속기의 성능을 소프트웨어 계층으로 직결하는 물리 레이어." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Model Context Protocol을 통해 에이전트와 기업 데이터 및 장치를 연결하는 관문." },

        // =====================
        // 3. Frameworks (Lv 1-2)
        // =====================
        { "id": "MAO", "label": "Multi-Agent System", "group": "Framework", "level": 1, "desc": "분업화된 에이전트 팀을 조율하여 복잡한 산업 프로세스를 완성하는 아키텍처." },
        { "id": "MAPE_K", "label": "MAPE-K Loop", "group": "Framework", "level": 2, "desc": "자율 제어 루프를 통해 시스템 상태를 감시하고 지식 기반 결정을 내리는 프레임워크." },

        // =====================
        // 4. Vertical AIoT Apps (Lv 3)
        // =====================
        { "id": "Proactive_SOP", "label": "Proactive Response", "group": "Application", "level": 3, "desc": "사고 징후 감지 시 엣지에서 즉각적인 자율 실행 지침을 생성하여 사고를 예방하는 체계." },
        { "id": "Edge_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "OT 데이터를 실시간 동기화하여 물리 장비의 상태를 최적화하는 디지털 복제 모델." },
        { "id": "Safety_Agent", "label": "Safety Agent", "group": "Application", "level": 3, "desc": "현장의 비정형 데이터를 스캔하여 위험 요소를 실시간으로 식별하고 경고하는 에이전트." },

        // =====================
        // 5. Resources (Lv 3)
        // =====================
        { "id": "Database", "label": "Knowledge DB", "group": "Resource", "level": 3, "desc": "Structured and unstructured long-term memory sources." },
        { "id": "AI_Wallet", "label": "Agentic Wallet", "group": "Resource", "level": 3, "desc": "Autonomous payment rails allowing agents to perform economic transactions." }
    ],
    "links": [
        { "source": "User", "target": "Logic_OS", "type": "enforces", "desc": "Independent verification" },
        { "source": "Logic_OS", "target": "Ontology", "type": "validates", "desc": "Refining world rules" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge deployment" },
        { "source": "LiteRT", "target": "NPU_HA", "type": "utilizes", "desc": "Hardware acceleration" },
        { "source": "MAO", "target": "MAPE_K", "type": "implements", "desc": "Control logic" },
        { "source": "MAPE_K", "target": "Proactive_SOP", "type": "triggers", "desc": "Immediate action" },
        { "source": "NPU_HA", "target": "Safety_Agent", "type": "powers", "desc": "Low-latency hazard scan" },
        { "source": "MCP_Server", "target": "Edge_Twin", "type": "enables", "desc": "OT data integration" },
        { "source": "System", "target": "MAO", "type": "contains", "desc": "Composition" },
        { "source": "System", "target": "Database", "type": "queries", "desc": "Memory access" },
        { "source": "MAO", "target": "AI_Wallet", "type": "authorizes", "desc": "Economic agency" }
    ]
};
