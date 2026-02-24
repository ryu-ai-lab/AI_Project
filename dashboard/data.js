/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-25)
 * Focus: Logic Deconstruction, Vertical AIoT, and On-Device Optimization
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Reasoning & Governance (Phase 0-5)
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Strategic Supervisor", "group": "Entity", "level": 0, "desc": "AI의 논리를 해체하고 재구성하여 최종 의사결정을 승인하는 인간 관리자." },
        { "id": "Zero_Base_Reasoning", "label": "Zero-base Reasoning", "group": "Governance", "level": 1, "desc": "외부 지식 개입을 차단하고 오직 원본 데이터만을 독립적으로 검증하는 억제장치." },
        { "id": "Claim_Evidence_Map", "label": "Claim-Evidence Map", "group": "Governance", "level": 2, "desc": "주장과 원문 근거를 대조하여 논리적 취약점과 증거 밀도를 스캔하는 검증 매트릭스." },

        // =====================
        // 2. Intelligence & Infrastructure
        // =====================
        { "id": "LLM", "label": "Reasoning Core (LLM)", "group": "Infrastructure", "level": 1, "desc": "Primary cognitive engine evolving toward deep iterative reasoning and self-evolution." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "임베디드 장치에서 고성능 추론을 지원하는 구글의 표준 런타임이자 하드웨어 추상화 계층." },
        { "id": "NPU_HA", "label": "NPU Hardware Abstraction", "group": "Infrastructure", "level": 2, "desc": "Hailo-8/10H 등 전용 가속기의 성능을 소프트웨어 스택으로 직접 전달하는 물리 제어 레이어." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Model Context Protocol을 통해 에이전트와 기업 데이터/장치를 연결하는 표준화된 통로." },

        // =====================
        // 3. Frameworks & Multi-Agent Systems
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "분업화된 에이전트 팀을 조율하여 복잡한 비즈니스 및 산업 공정을 처리하는 프레임워크." },
        { "id": "Self_Evolving_AI", "label": "Self-Evolving AI", "group": "Framework", "level": 2, "desc": "사용 패턴 및 실행 로그를 분석하여 자신의 추론 경로를 스스로 최적화하는 시스템." },
        { "id": "MAPE_K", "label": "MAPE-K Framework", "group": "Framework", "level": 2, "desc": "자율 제어 루프를 통해 시스템 상태를 감시하고 지식 기반 결정을 내리는 표준 아키텍처." },

        // =====================
        // 4. Vertical AI Applications (AIoT)
        // =====================
        { "id": "Proactive_Response", "label": "Proactive Response SOP", "group": "Application", "level": 3, "desc": "사고 발생 전 징후를 감지하여 엣지에서 즉각적인 실행 지침을 생성하는 사전 예방형 대응 체계." },
        { "id": "Edge_Digital_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "물리 장비의 실시간 상태를 엣지에서 동기화하여 공정 지연 및 오류를 최소화하는 복제 모델." },
        { "id": "Predictive_Safety", "label": "Predictive Safety Analysis", "group": "Application", "level": 3, "desc": "산업 현장의 비정형 데이터를 실시간 스캔하여 잠재적 위험 요소를 수치화하고 경고하는 시스템." },

        // =====================
        // 5. Semantic Guardrails
        // =====================
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "에이전트 생태계의 유효한 객체와 논리적 관계를 규정하는 시맨틱 방화벽." },
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 실시간 모니터링하고 중앙 거버넌스를 적용하는 제어 평면." }
    ],
    "links": [
        // Governance & Deconstruction Flows
        { "source": "User", "target": "Zero_Base_Reasoning", "type": "enforces", "desc": "Independent verification" },
        { "source": "Zero_Base_Reasoning", "target": "Claim_Evidence_Map", "type": "validates", "desc": "Evidence scanning" },
        { "source": "Claim_Evidence_Map", "target": "Ontology", "type": "updates", "desc": "Refining world rules" },

        // Infrastructure Flows
        { "source": "LLM", "target": "Self_Evolving_AI", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge deployment" },
        { "source": "LiteRT", "target": "NPU_HA", "type": "utilizes", "desc": "Hardware acceleration" },
        { "source": "Agent", "target": "MCP_Server", "type": "connects_via", "desc": "Data interoperability" },

        // Vertical Application Links
        { "source": "System", "target": "Proactive_Response", "type": "executes", "desc": "Action blueprinting" },
        { "source": "MAPE_K", "target": "Edge_Digital_Twin", "type": "manages", "desc": "Real-time sync" },
        { "source": "NPU_HA", "target": "Predictive_Safety", "type": "powers", "desc": "Low-latency hazard scan" },
        { "source": "MCP_Server", "target": "Edge_Digital_Twin", "type": "enables", "desc": "OT data flow" },

        // Final Control
        { "source": "Command_Center", "target": "User", "type": "reports_to", "desc": "Final decision approval" }
    ]
};
