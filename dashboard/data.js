/**
 * Knowledge Graph Ontology Data (Updated: 2026-02-22)
 * Focused on Vertical AI, AIoT, and Infrastructure Optimization
 */
const graphData = {
    "nodes": [
        // =====================
        // 1. Core Entities & Humans
        // =====================
        { "id": "System", "label": "AI System", "group": "Entity", "level": 0, "desc": "Integrated ecosystem of models, tools, and agents functioning as a cohesive unit." },
        { "id": "User", "label": "Human Supervisor", "group": "Entity", "level": 0, "desc": "The human operator providing strategic intent and final validation." },
        { "id": "Agent", "label": "Autonomous Agent", "group": "Entity", "level": 1, "desc": "Goal-oriented software entity capable of independent planning and tool use." },

        // =====================
        // 2. Intelligence & Infrastructure
        // =====================
        { "id": "LLM", "label": "Reasoning Core (LLM)", "group": "Infrastructure", "level": 1, "desc": "The primary cognitive engine; shifting from static inference to iterative reasoning." },
        { "id": "Self_Evolving_Model", "label": "Self-Evolving AI", "group": "Infrastructure", "level": 1, "desc": "피드백 루프를 통해 자체적인 가중치 최적화 및 추론 경로를 개선하는 모델." },
        { "id": "LiteRT", "label": "LiteRT Runtime", "group": "Infrastructure", "level": 2, "desc": "On-device AI runtime for 1.4x faster GPU-accelerated inference (v2026)." },
        { "id": "NPU_Accelerator", "label": "NPU Accelerator", "group": "Infrastructure", "level": 2, "desc": "임베디드 환경에서 저전력 고효율 AI 추론을 지원하는 전용 하드웨어 가속기." },
        { "id": "Protocol", "label": "MCP (Model Context Protocol)", "group": "Infrastructure", "level": 1, "desc": "Universal standard for connecting AI agents to local and remote data/tools." },

        // =====================
        // 3. Frameworks & Orchestration
        // =====================
        { "id": "MAO", "label": "Multi-Agent Orchestration", "group": "Framework", "level": 1, "desc": "Architecture for managing collaborative agent teams with distinct roles." },
        { "id": "Orchestrator", "label": "Planner Agent", "group": "Entity", "level": 2, "desc": "Hierarchical coordinator that decomposes tasks and delegates to specialized workers." },
        { "id": "Agentic_Workflows", "label": "Agentic Workflows", "group": "Framework", "level": 1, "desc": "에이전트 간의 자율적 협업 및 오류 수정을 포함한 고도화된 작업 절차." },

        // =====================
        // 4. Vertical AI Applications (AIoT)
        // =====================
        { "id": "Proactive_Safety", "label": "Proactive Safety System", "group": "Application", "level": 3, "desc": "산업 현장의 위험 요소를 실시간 감지하여 사고를 사전에 예방하는 에지 기반 시스템." },
        { "id": "Edge_Digital_Twin", "label": "Edge Digital Twin", "group": "Application", "level": 3, "desc": "운영 기술(OT) 데이터를 엣지에서 실시간 동기화하여 공정 최적화를 수행하는 모델." },
        { "id": "Predictive_Maintenance", "label": "Predictive Maintenance", "group": "Application", "level": 3, "desc": "기기 진동 및 로그 데이터를 분석하여 고장 징후를 사전 포착하는 AIoT 솔루션." },

        // =====================
        // 5. Governance & Control
        // =====================
        { "id": "Ontology", "label": "Ontology Model", "group": "Governance", "level": 1, "desc": "The semantic firewall defining the rules of reality for the agent ecosystem." },
        { "id": "Command_Center", "label": "Agentic Command Center", "group": "Governance", "level": 1, "desc": "Unified dashboard for monitoring, auditing, and controlling federated agents." },
        { "id": "Policy", "label": "Governance-as-Code", "group": "Governance", "level": 2, "desc": "Programmable guardrails that enforce ethical and operational constraints." }
    ],
    "links": [
        // System & Core Relationships
        { "source": "System", "target": "Agent", "type": "contains", "desc": "Composition" },
        { "source": "User", "target": "Command_Center", "type": "monitors", "desc": "Operational oversight" },
        { "source": "Agent", "target": "MAO", "type": "scales_via", "desc": "Collaboration" },
        { "source": "MAO", "target": "Orchestrator", "type": "implements", "desc": "Coordination layer" },

        // Intelligence & Infrastructure Flows
        { "source": "Agent", "target": "LLM", "type": "thinks_with", "desc": "Cognitive processing" },
        { "source": "LLM", "target": "Self_Evolving_Model", "type": "evolves_into", "desc": "Autonomous improvement" },
        { "source": "LLM", "target": "LiteRT", "type": "deploys_on", "desc": "Edge inference" },
        { "source": "LiteRT", "target": "NPU_Accelerator", "type": "utilizes", "desc": "Hardware acceleration" },
        { "source": "MAO", "target": "Agentic_Workflows", "type": "incorporates", "desc": "Iterative logic" },

        // Vertical Application Links
        { "source": "System", "target": "Proactive_Safety", "type": "implements", "desc": "Safety focus" },
        { "source": "System", "target": "Edge_Digital_Twin", "type": "implements", "desc": "Industrial optimization" },
        { "source": "Agent", "target": "Predictive_Maintenance", "type": "executes", "desc": "Maintenance task" },
        { "source": "NPU_Accelerator", "target": "Proactive_Safety", "type": "powers", "desc": "Real-time latency reduction" },

        // Connectivity & Governance
        { "source": "Agent", "target": "Protocol", "type": "speaks", "desc": "Standard communication" },
        { "source": "Ontology", "target": "Command_Center", "type": "validates", "desc": "Semantic safety" },
        { "source": "Policy", "target": "Command_Center", "type": "enforces", "desc": "Guardrail application" }
    ]
};
