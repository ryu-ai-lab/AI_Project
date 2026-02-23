/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-24)
 * Focus: Vertical AI Application (On-Device AI, AIoT) & Infrastructure Optimization
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Entities & Roles
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Human Supervisor", "group": "Entity", "level": 0, "desc": "전략적 의도 설정 및 고위험 의사결정에 대한 최종 승인을 담당하는 인간 관리자." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "Goal-oriented software entity transitioning from passive tools to autonomous outcome ownership." },

        // =====================
        // 2. Infrastructure & Hardware Acceleration
        // =====================
        { "id": "LLM", "label": "Reasoning Engine (LLM)", "group": "Infrastructure", "level": 1, "desc": "심층적인 반복 추론 및 자가 학습을 통해 지능을 확장하는 핵심 인지 엔진." },
        { "id": "LiteRT", "label": "LiteRT Framework", "group": "Infrastructure", "level": 2, "desc": "임베디드 및 모바일 장치에서 GPU/NPU 가속을 통해 고성능 추론을 지원하는 구글의 표준 런타임." },
        { "id": "NPU_Accelerator", "label": "NPU Accelerator", "group": "Infrastructure", "level": 2, "desc": "Hailo-8/10H와 같은 전용 신경망 처리 장치로, 엣지 환경에서 저전력 실시간 연산을 수행함." },
        { "id": "MCP_Server", "label": "MCP Server", "group": "Infrastructure", "level": 2, "desc": "Model Context Protocol을 구현하여 에이전트와 기업 데이터/장치를 연결하는 표준화된 통로." },

        // =====================
        // 3. Frameworks & Multi-Agent Systems
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "복잡한 비즈니스 및 산업 공정을 처리하기 위해 전문화된 에이전트 팀을 조율하는 프레임워크." },
        { "id": "Self_Optimizing_Workflow", "label": "Self-Optimizing Workflow", "group": "Framework", "level": 2, "desc": "실행 결과를 자체 분석하여 작업 경로와 상호작용 전략을 실시간으로 개선하는 자가 진화형 절차." },
        { "id": "MAPE_K", "label": "MAPE-K Framework", "group": "Framework", "level": 2, "desc": "Monitor-Analyze-Plan-Execute-Knowledge 루프를 통한 자율적 시스템 제어 및 유지관리 모델." },

        // =====================
        // 4. Vertical AI Applications (AIoT)
        // =====================
        { "id": "Hazard_Detection", "label": "Proactive Hazard Detection", "group": "Application", "level": 3, "desc": "AIoT 센서 데이터를 엣지에서 분석하여 산업 현장의 위험 요소를 실시간으로 식별하고 대응하는 시스템." },
        { "id": "Edge_Digital_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "물리적 자산의 상태를 엣지 서버에서 실시간 동기화하여 운영 기술(OT) 공정을 최적화하는 가상 모델." },
        { "id": "Autonomous_Logistics", "label": "Autonomous Logistics Agent", "group": "Application", "level": 3, "desc": "물류 창고 내에서 재고 상태를 파악하고 자율적으로 이동 경로 및 작업을 최적화하는 지능형 에이전트." },

        // =====================
        // 5. Governance & Safety
        // =====================
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "에이전트 생태계 내의 유효한 객체와 관계를 규정하는 '시맨틱 방화벽'." },
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "분산된 에이전트 인력을 실시간 모니터링하고 중앙 집중식 거버넌스를 적용하는 제어 평면." },
        { "id": "Policy", "label": "Governance-as-Code", "group": "Governance", "level": 2, "desc": "에이전트의 행동 반경과 권한을 제어하기 위해 프로그래밍된 실행 가능한 정책 집합." }
    ],
    "links": [
        // System & Core Relationships
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Systemic composition" },
        { "source": "User", "target": "Command_Center", "type": "supervises", "desc": "Strategic oversight" },
        { "source": "Agent", "target": "MAO", "type": "scales_via", "desc": "Collaborative task execution" },
        { "source": "MAO", "target": "MAPE_K", "type": "implements", "desc": "Autonomous control logic" },

        // Intelligence & Infrastructure Flows
        { "source": "LLM", "target": "Self_Optimizing_Workflow", "type": "evolves_into", "desc": "Adaptive intelligence expansion" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge deployment optimization" },
        { "source": "LiteRT", "target": "NPU_Accelerator", "type": "utilizes", "desc": "Hardware-level acceleration" },
        { "source": "Agent", "target": "MCP_Server", "type": "connects_via", "desc": "Standardized interoperability" },

        // Vertical Application Links
        { "source": "System", "target": "Hazard_Detection", "type": "executes", "desc": "Real-time safety monitoring" },
        { "source": "NPU_Accelerator", "target": "Hazard_Detection", "type": "powers", "desc": "Low-latency vision processing" },
        { "source": "MAPE_K", "target": "Edge_Digital_Twin", "type": "manages", "desc": "Real-time state synchronization" },
        { "source": "MCP_Server", "target": "Autonomous_Logistics", "type": "enables", "desc": "Warehouse data integration" },

        // Governance & Connectivity
        { "source": "Ontology", "target": "Command_Center", "type": "validates", "desc": "Semantic safety enforcement" },
        { "source": "Policy", "target": "Command_Center", "type": "enforces", "desc": "Operational guardrail application" }
    ]
};
