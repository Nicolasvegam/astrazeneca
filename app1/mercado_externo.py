import json
frecuencias = [
  {
    "tag": "company",
    "count": 44
  },
  {
    "tag": "team",
    "count": 44
  },
  {
    "tag": "experience",
    "count": 43
  },
  {
    "tag": "global",
    "count": 42
  },
  {
    "tag": "local",
    "count": 41
  },
  {
    "tag": "we",
    "count": 40
  },
  {
    "tag": "experiencia",
    "count": 39
  },
  {
    "tag": "work",
    "count": 39
  },
  {
    "tag": "time",
    "count": 38
  },
  {
    "tag": "support",
    "count": 37
  },
  {
    "tag": "english",
    "count": 36
  },
  {
    "tag": "management",
    "count": 36
  },
  {
    "tag": "required",
    "count": 36
  },
  {
    "tag": "working",
    "count": 35
  },
  {
    "tag": "related",
    "count": 34
  },
  {
    "tag": "skills",
    "count": 34
  },
  {
    "tag": "years",
    "count": 34
  },
  {
    "tag": "you",
    "count": 34
  },
  {
    "tag": "business",
    "count": 33
  },
  {
    "tag": "including",
    "count": 33
  },
  {
    "tag": "medical",
    "count": 33
  },
  {
    "tag": "trabajo",
    "count": 33
  },
  {
    "tag": "clinical",
    "count": 32
  },
  {
    "tag": "degree",
    "count": 32
  },
  {
    "tag": "knowledge",
    "count": 32
  },
  {
    "tag": "communication",
    "count": 31
  },
  {
    "tag": "development",
    "count": 31
  },
  {
    "tag": "activities",
    "count": 30
  },
  {
    "tag": "description",
    "count": 30
  },
  {
    "tag": "health",
    "count": 30
  },
  {
    "tag": "strong",
    "count": 30
  },
  {
    "tag": "empresa",
    "count": 28
  },
  {
    "tag": "process",
    "count": 28
  },
  {
    "tag": "qualifications",
    "count": 28
  },
  {
    "tag": "requisitos",
    "count": 28
  },
  {
    "tag": "written",
    "count": 28
  },
  {
    "tag": "área",
    "count": 28
  },
  {
    "tag": "control",
    "count": 27
  },
  {
    "tag": "equipo",
    "count": 27
  },
  {
    "tag": "opportunities",
    "count": 27
  },
  {
    "tag": "provide",
    "count": 27
  },
  {
    "tag": "requirements",
    "count": 27
  },
  {
    "tag": "research",
    "count": 27
  },
  {
    "tag": "training",
    "count": 27
  },
  {
    "tag": "within",
    "count": 27
  },
  {
    "tag": "años",
    "count": 26
  },
  {
    "tag": "data",
    "count": 26
  },
  {
    "tag": "information",
    "count": 26
  },
  {
    "tag": "job description",
    "count": 26
  },
  {
    "tag": "office",
    "count": 26
  },
  {
    "tag": "ability",
    "count": 25
  },
  {
    "tag": "avanzado",
    "count": 25
  },
  {
    "tag": "opportunity",
    "count": 25
  },
  {
    "tag": "position",
    "count": 25
  },
  {
    "tag": "ensure",
    "count": 24
  },
  {
    "tag": "responsibilities",
    "count": 24
  },
  {
    "tag": "role",
    "count": 24
  },
  {
    "tag": "site",
    "count": 24
  },
  {
    "tag": "career",
    "count": 23
  },
  {
    "tag": "etc",
    "count": 23
  },
  {
    "tag": "join",
    "count": 23
  },
  {
    "tag": "new",
    "count": 23
  },
  {
    "tag": "personal",
    "count": 23
  },
  {
    "tag": "projects",
    "count": 23
  },
  {
    "tag": "quality",
    "count": 23
  },
  {
    "tag": "status",
    "count": 23
  },
  {
    "tag": "applicable",
    "count": 22
  },
  {
    "tag": "develop",
    "count": 22
  },
  {
    "tag": "environment",
    "count": 22
  },
  {
    "tag": "internal",
    "count": 22
  },
  {
    "tag": "patients",
    "count": 22
  },
  {
    "tag": "pharmaceutical",
    "count": 22
  },
  {
    "tag": "processes",
    "count": 22
  },
  {
    "tag": "productos",
    "count": 22
  },
  {
    "tag": "regulatory",
    "count": 22
  },
  {
    "tag": "responsible",
    "count": 22
  },
  {
    "tag": "employment",
    "count": 21
  },
  {
    "tag": "full",
    "count": 21
  },
  {
    "tag": "life",
    "count": 21
  },
  {
    "tag": "orientation",
    "count": 21
  },
  {
    "tag": "performance",
    "count": 21
  },
  {
    "tag": "products",
    "count": 21
  },
  {
    "tag": "review",
    "count": 21
  },
  {
    "tag": "salud",
    "count": 21
  },
  {
    "tag": "services",
    "count": 21
  },
  {
    "tag": "travel",
    "count": 21
  },
  {
    "tag": "across",
    "count": 20
  },
  {
    "tag": "based",
    "count": 20
  },
  {
    "tag": "compliance",
    "count": 20
  },
  {
    "tag": "education",
    "count": 20
  },
  {
    "tag": "equal",
    "count": 20
  },
  {
    "tag": "marketing",
    "count": 20
  },
  {
    "tag": "operations",
    "count": 20
  },
  {
    "tag": "organization",
    "count": 20
  },
  {
    "tag": "planning",
    "count": 20
  },
  {
    "tag": "procedures",
    "count": 20
  },
  {
    "tag": "sexual",
    "count": 20
  },
  {
    "tag": "us",
    "count": 20
  },
  {
    "tag": "apply",
    "count": 19
  },
  {
    "tag": "chile",
    "count": 19
  },
  {
    "tag": "contact",
    "count": 19
  },
  {
    "tag": "healthcare",
    "count": 19
  },
  {
    "tag": "include",
    "count": 19
  },
  {
    "tag": "industry",
    "count": 19
  },
  {
    "tag": "maintain",
    "count": 19
  },
  {
    "tag": "manager",
    "count": 19
  },
  {
    "tag": "may",
    "count": 19
  },
  {
    "tag": "monitoring",
    "count": 19
  },
  {
    "tag": "must",
    "count": 19
  },
  {
    "tag": "people",
    "count": 19
  },
  {
    "tag": "principales",
    "count": 19
  },
  {
    "tag": "procesos",
    "count": 19
  },
  {
    "tag": "race",
    "count": 19
  },
  {
    "tag": "sexual orientation",
    "count": 19
  },
  {
    "tag": "si",
    "count": 19
  },
  {
    "tag": "solutions",
    "count": 19
  },
  {
    "tag": "trabajar",
    "count": 19
  },
  {
    "tag": "use",
    "count": 19
  },
  {
    "tag": "world",
    "count": 19
  },
  {
    "tag": "assigned",
    "count": 18
  },
  {
    "tag": "employees",
    "count": 18
  },
  {
    "tag": "inglés",
    "count": 18
  },
  {
    "tag": "lead",
    "count": 18
  },
  {
    "tag": "leadership",
    "count": 18
  },
  {
    "tag": "level",
    "count": 18
  },
  {
    "tag": "needs",
    "count": 18
  },
  {
    "tag": "nivel",
    "count": 18
  },
  {
    "tag": "one",
    "count": 18
  },
  {
    "tag": "plan",
    "count": 18
  },
  {
    "tag": "religion",
    "count": 18
  },
  {
    "tag": "sites",
    "count": 18
  },
  {
    "tag": "specific",
    "count": 18
  },
  {
    "tag": "study",
    "count": 18
  },
  {
    "tag": "teams",
    "count": 18
  },
  {
    "tag": "therapeutic",
    "count": 18
  },
  {
    "tag": "well",
    "count": 18
  },
  {
    "tag": "ambiente",
    "count": 17
  },
  {
    "tag": "areas",
    "count": 17
  },
  {
    "tag": "clinical research",
    "count": 17
  },
  {
    "tag": "conocimientos",
    "count": 17
  },
  {
    "tag": "day",
    "count": 17
  },
  {
    "tag": "excel",
    "count": 17
  },
  {
    "tag": "field",
    "count": 17
  },
  {
    "tag": "functional",
    "count": 17
  },
  {
    "tag": "good",
    "count": 17
  },
  {
    "tag": "impact",
    "count": 17
  },
  {
    "tag": "lives",
    "count": 17
  },
  {
    "tag": "patient",
    "count": 17
  },
  {
    "tag": "profesional",
    "count": 17
  },
  {
    "tag": "regulations",
    "count": 17
  },
  {
    "tag": "responsabilidades",
    "count": 17
  },
  {
    "tag": "also",
    "count": 16
  },
  {
    "tag": "calidad",
    "count": 16
  },
  {
    "tag": "comunicación",
    "count": 16
  },
  {
    "tag": "countries",
    "count": 16
  },
  {
    "tag": "desarrollo",
    "count": 16
  },
  {
    "tag": "disability",
    "count": 16
  },
  {
    "tag": "equivalent",
    "count": 16
  },
  {
    "tag": "every",
    "count": 16
  },
  {
    "tag": "farmacia",
    "count": 16
  },
  {
    "tag": "general",
    "count": 16
  },
  {
    "tag": "high",
    "count": 16
  },
  {
    "tag": "innovative",
    "count": 16
  },
  {
    "tag": "language",
    "count": 16
  },
  {
    "tag": "leading",
    "count": 16
  },
  {
    "tag": "market",
    "count": 16
  },
  {
    "tag": "mercado",
    "count": 16
  },
  {
    "tag": "part",
    "count": 16
  },
  {
    "tag": "product",
    "count": 16
  },
  {
    "tag": "project",
    "count": 16
  },
  {
    "tag": "relevant",
    "count": 16
  },
  {
    "tag": "systems",
    "count": 16
  },
  {
    "tag": "accordance",
    "count": 15
  },
  {
    "tag": "appropriate",
    "count": 15
  },
  {
    "tag": "area",
    "count": 15
  },
  {
    "tag": "búsqueda",
    "count": 15
  },
  {
    "tag": "care",
    "count": 15
  },
  {
    "tag": "cargo",
    "count": 15
  },
  {
    "tag": "carrera",
    "count": 15
  },
  {
    "tag": "compañía",
    "count": 15
  },
  {
    "tag": "computer",
    "count": 15
  },
  {
    "tag": "conduct",
    "count": 15
  },
  {
    "tag": "conocimiento",
    "count": 15
  },
  {
    "tag": "customer",
    "count": 15
  },
  {
    "tag": "customers",
    "count": 15
  },
  {
    "tag": "documentation",
    "count": 15
  },
  {
    "tag": "excellent",
    "count": 15
  },
  {
    "tag": "external",
    "count": 15
  },
  {
    "tag": "gcp",
    "count": 15
  },
  {
    "tag": "gender",
    "count": 15
  },
  {
    "tag": "help",
    "count": 15
  },
  {
    "tag": "issues",
    "count": 15
  },
  {
    "tag": "key",
    "count": 15
  },
  {
    "tag": "make",
    "count": 15
  },
  {
    "tag": "minimum",
    "count": 15
  },
  {
    "tag": "offer",
    "count": 15
  },
  {
    "tag": "origin",
    "count": 15
  },
  {
    "tag": "protocol",
    "count": 15
  },
  {
    "tag": "provides",
    "count": 15
  },
  {
    "tag": "realizar",
    "count": 15
  },
  {
    "tag": "reports",
    "count": 15
  },
  {
    "tag": "sales",
    "count": 15
  },
  {
    "tag": "science",
    "count": 15
  },
  {
    "tag": "sops",
    "count": 15
  },
  {
    "tag": "trial",
    "count": 15
  },
  {
    "tag": "trials",
    "count": 15
  },
  {
    "tag": "understanding",
    "count": 15
  },
  {
    "tag": "vida",
    "count": 15
  },
  {
    "tag": "what",
    "count": 15
  },
  {
    "tag": "actions",
    "count": 14
  },
  {
    "tag": "age",
    "count": 14
  },
  {
    "tag": "analysis",
    "count": 14
  },
  {
    "tag": "argentina",
    "count": 14
  },
  {
    "tag": "años experiencia",
    "count": 14
  },
  {
    "tag": "color",
    "count": 14
  },
  {
    "tag": "diverse",
    "count": 14
  },
  {
    "tag": "effective",
    "count": 14
  },
  {
    "tag": "eg",
    "count": 14
  },
  {
    "tag": "employer",
    "count": 14
  },
  {
    "tag": "equal opportunity",
    "count": 14
  },
  {
    "tag": "follow",
    "count": 14
  },
  {
    "tag": "habilidades",
    "count": 14
  },
  {
    "tag": "importante",
    "count": 14
  },
  {
    "tag": "national",
    "count": 14
  },
  {
    "tag": "ofrecemos",
    "count": 14
  },
  {
    "tag": "preferred",
    "count": 14
  },
  {
    "tag": "regional",
    "count": 14
  },
  {
    "tag": "tareas",
    "count": 14
  },
  {
    "tag": "verbal",
    "count": 14
  },
  {
    "tag": "áreas",
    "count": 14
  },
  {
    "tag": "able",
    "count": 13
  },
  {
    "tag": "actividades",
    "count": 13
  },
  {
    "tag": "aires",
    "count": 13
  },
  {
    "tag": "análisis",
    "count": 13
  },
  {
    "tag": "both",
    "count": 13
  },
  {
    "tag": "buenos",
    "count": 13
  },
  {
    "tag": "buenos aires",
    "count": 13
  },
  {
    "tag": "capacidad",
    "count": 13
  },
  {
    "tag": "clientes",
    "count": 13
  },
  {
    "tag": "clinical trials",
    "count": 13
  },
  {
    "tag": "communication skills",
    "count": 13
  },
  {
    "tag": "core",
    "count": 13
  },
  {
    "tag": "duties",
    "count": 13
  },
  {
    "tag": "essential",
    "count": 13
  },
  {
    "tag": "farmacéutica",
    "count": 13
  },
  {
    "tag": "flexible",
    "count": 13
  },
  {
    "tag": "full time",
    "count": 13
  },
  {
    "tag": "gestión",
    "count": 13
  },
  {
    "tag": "grow",
    "count": 13
  },
  {
    "tag": "growth",
    "count": 13
  },
  {
    "tag": "información",
    "count": 13
  },
  {
    "tag": "location",
    "count": 13
  },
  {
    "tag": "manejo",
    "count": 13
  },
  {
    "tag": "medicamentos",
    "count": 13
  },
  {
    "tag": "necesidades",
    "count": 13
  },
  {
    "tag": "necessary",
    "count": 13
  },
  {
    "tag": "participate",
    "count": 13
  },
  {
    "tag": "plans",
    "count": 13
  },
  {
    "tag": "potential",
    "count": 13
  },
  {
    "tag": "proceso",
    "count": 13
  },
  {
    "tag": "providing",
    "count": 13
  },
  {
    "tag": "relationships",
    "count": 13
  },
  {
    "tag": "report",
    "count": 13
  },
  {
    "tag": "service",
    "count": 13
  },
  {
    "tag": "solving",
    "count": 13
  },
  {
    "tag": "specialist",
    "count": 13
  },
  {
    "tag": "staff",
    "count": 13
  },
  {
    "tag": "supporting",
    "count": 13
  },
  {
    "tag": "tasks",
    "count": 13
  },
  {
    "tag": "technical",
    "count": 13
  },
  {
    "tag": "together",
    "count": 13
  },
  {
    "tag": "track",
    "count": 13
  },
  {
    "tag": "través",
    "count": 13
  },
  {
    "tag": "without",
    "count": 13
  },
  {
    "tag": "access",
    "count": 12
  },
  {
    "tag": "administración",
    "count": 12
  },
  {
    "tag": "advanced",
    "count": 12
  },
  {
    "tag": "around",
    "count": 12
  },
  {
    "tag": "building",
    "count": 12
  },
  {
    "tag": "buscamos",
    "count": 12
  },
  {
    "tag": "cross",
    "count": 12
  },
  {
    "tag": "documentación",
    "count": 12
  },
  {
    "tag": "documents",
    "count": 12
  },
  {
    "tag": "ensuring",
    "count": 12
  },
  {
    "tag": "excellence",
    "count": 12
  },
  {
    "tag": "experienced",
    "count": 12
  },
  {
    "tag": "industria",
    "count": 12
  },
  {
    "tag": "líder",
    "count": 12
  },
  {
    "tag": "manage",
    "count": 12
  },
  {
    "tag": "mantener",
    "count": 12
  },
  {
    "tag": "marital",
    "count": 12
  },
  {
    "tag": "members",
    "count": 12
  },
  {
    "tag": "negocio",
    "count": 12
  },
  {
    "tag": "participar",
    "count": 12
  },
  {
    "tag": "point",
    "count": 12
  },
  {
    "tag": "policies",
    "count": 12
  },
  {
    "tag": "posición",
    "count": 12
  },
  {
    "tag": "profesionales",
    "count": 12
  },
  {
    "tag": "reviews",
    "count": 12
  },
  {
    "tag": "santiago",
    "count": 12
  },
  {
    "tag": "sap",
    "count": 12
  },
  {
    "tag": "scientific",
    "count": 12
  },
  {
    "tag": "ser",
    "count": 12
  },
  {
    "tag": "soporte",
    "count": 12
  },
  {
    "tag": "stakeholders",
    "count": 12
  },
  {
    "tag": "standard",
    "count": 12
  },
  {
    "tag": "standards",
    "count": 12
  },
  {
    "tag": "success",
    "count": 12
  },
  {
    "tag": "technology",
    "count": 12
  },
  {
    "tag": "timely",
    "count": 12
  },
  {
    "tag": "veteran",
    "count": 12
  },
  {
    "tag": "approval",
    "count": 11
  },
  {
    "tag": "best",
    "count": 11
  },
  {
    "tag": "build",
    "count": 11
  },
  {
    "tag": "cada",
    "count": 11
  },
  {
    "tag": "carreras",
    "count": 11
  },
  {
    "tag": "cliente",
    "count": 11
  },
  {
    "tag": "commercial",
    "count": 11
  },
  {
    "tag": "companies",
    "count": 11
  },
  {
    "tag": "completion",
    "count": 11
  },
  {
    "tag": "completo",
    "count": 11
  },
  {
    "tag": "condition",
    "count": 11
  },
  {
    "tag": "contacto",
    "count": 11
  },
  {
    "tag": "contract",
    "count": 11
  },
  {
    "tag": "coordinar",
    "count": 11
  },
  {
    "tag": "coordination",
    "count": 11
  },
  {
    "tag": "current",
    "count": 11
  },
  {
    "tag": "dentro",
    "count": 11
  },
  {
    "tag": "develops",
    "count": 11
  },
  {
    "tag": "diferentes",
    "count": 11
  },
  {
    "tag": "diversity",
    "count": 11
  },
  {
    "tag": "effectively",
    "count": 11
  },
  {
    "tag": "employee",
    "count": 11
  },
  {
    "tag": "equipos",
    "count": 11
  },
  {
    "tag": "farmacéutico",
    "count": 11
  },
  {
    "tag": "fluent",
    "count": 11
  },
  {
    "tag": "gender identity",
    "count": 11
  },
  {
    "tag": "guidelines",
    "count": 11
  },
  {
    "tag": "identity",
    "count": 11
  },
  {
    "tag": "implementation",
    "count": 11
  },
  {
    "tag": "important",
    "count": 11
  },
  {
    "tag": "improve",
    "count": 11
  },
  {
    "tag": "improvement",
    "count": 11
  },
  {
    "tag": "individuals",
    "count": 11
  },
  {
    "tag": "innovation",
    "count": 11
  },
  {
    "tag": "interpersonal",
    "count": 11
  },
  {
    "tag": "laboratorio",
    "count": 11
  },
  {
    "tag": "marital status",
    "count": 11
  },
  {
    "tag": "medicines",
    "count": 11
  },
  {
    "tag": "menos",
    "count": 11
  },
  {
    "tag": "next",
    "count": 11
  },
  {
    "tag": "oportunidades",
    "count": 11
  },
  {
    "tag": "oral",
    "count": 11
  },
  {
    "tag": "organización",
    "count": 11
  },
  {
    "tag": "please",
    "count": 11
  },
  {
    "tag": "portfolio",
    "count": 11
  },
  {
    "tag": "practices",
    "count": 11
  },
  {
    "tag": "problem",
    "count": 11
  },
  {
    "tag": "problem solving",
    "count": 11
  },
  {
    "tag": "software",
    "count": 11
  },
  {
    "tag": "strategy",
    "count": 11
  },
  {
    "tag": "team members",
    "count": 11
  },
  {
    "tag": "todas",
    "count": 11
  },
  {
    "tag": "trabajo equipo",
    "count": 11
  },
  {
    "tag": "written communication",
    "count": 11
  },
  {
    "tag": "action",
    "count": 10
  },
  {
    "tag": "afines",
    "count": 10
  },
  {
    "tag": "application",
    "count": 10
  },
  {
    "tag": "available",
    "count": 10
  },
  {
    "tag": "bachelor",
    "count": 10
  },
  {
    "tag": "case",
    "count": 10
  },
  {
    "tag": "client",
    "count": 10
  },
  {
    "tag": "collaboration",
    "count": 10
  },
  {
    "tag": "colleagues",
    "count": 10
  },
  {
    "tag": "color religion",
    "count": 10
  },
  {
    "tag": "comercial",
    "count": 10
  },
  {
    "tag": "company description",
    "count": 10
  },
  {
    "tag": "complex",
    "count": 10
  },
  {
    "tag": "critical",
    "count": 10
  },
  {
    "tag": "cro",
    "count": 10
  },
  {
    "tag": "cross functional",
    "count": 10
  },
  {
    "tag": "equal employment",
    "count": 10
  },
  {
    "tag": "excluyente",
    "count": 10
  },
  {
    "tag": "execution",
    "count": 10
  },
  {
    "tag": "expertise",
    "count": 10
  },
  {
    "tag": "funciones",
    "count": 10
  },
  {
    "tag": "goals",
    "count": 10
  },
  {
    "tag": "ich",
    "count": 10
  },
  {
    "tag": "laboratorios",
    "count": 10
  },
  {
    "tag": "liderar",
    "count": 10
  },
  {
    "tag": "maintaining",
    "count": 10
  },
  {
    "tag": "mantenimiento",
    "count": 10
  },
  {
    "tag": "meet",
    "count": 10
  },
  {
    "tag": "meetings",
    "count": 10
  },
  {
    "tag": "microsoft",
    "count": 10
  },
  {
    "tag": "mission",
    "count": 10
  },
  {
    "tag": "multiple",
    "count": 10
  },
  {
    "tag": "mundo",
    "count": 10
  },
  {
    "tag": "médicos",
    "count": 10
  },
  {
    "tag": "need",
    "count": 10
  },
  {
    "tag": "needed",
    "count": 10
  },
  {
    "tag": "objectives",
    "count": 10
  },
  {
    "tag": "ongoing",
    "count": 10
  },
  {
    "tag": "open",
    "count": 10
  },
  {
    "tag": "operating",
    "count": 10
  },
  {
    "tag": "operating procedures",
    "count": 10
  },
  {
    "tag": "organizational",
    "count": 10
  },
  {
    "tag": "orientación",
    "count": 10
  },
  {
    "tag": "pacientes",
    "count": 10
  },
  {
    "tag": "perfil",
    "count": 10
  },
  {
    "tag": "persona",
    "count": 10
  },
  {
    "tag": "personas",
    "count": 10
  },
  {
    "tag": "policy",
    "count": 10
  },
  {
    "tag": "positions",
    "count": 10
  },
  {
    "tag": "primary",
    "count": 10
  },
  {
    "tag": "prior",
    "count": 10
  },
  {
    "tag": "professional",
    "count": 10
  },
  {
    "tag": "recruitment",
    "count": 10
  },
  {
    "tag": "regarding",
    "count": 10
  },
  {
    "tag": "regular",
    "count": 10
  },
  {
    "tag": "relaciones",
    "count": 10
  },
  {
    "tag": "resolution",
    "count": 10
  },
  {
    "tag": "resources",
    "count": 10
  },
  {
    "tag": "sciences",
    "count": 10
  },
  {
    "tag": "seguimiento",
    "count": 10
  },
  {
    "tag": "servicios",
    "count": 10
  },
  {
    "tag": "sex",
    "count": 10
  },
  {
    "tag": "strategic",
    "count": 10
  },
  {
    "tag": "successful",
    "count": 10
  },
  {
    "tag": "superior",
    "count": 10
  },
  {
    "tag": "tiempo",
    "count": 10
  },
  {
    "tag": "tools",
    "count": 10
  },
  {
    "tag": "tracking",
    "count": 10
  },
  {
    "tag": "university",
    "count": 10
  },
  {
    "tag": "visit",
    "count": 10
  },
  {
    "tag": "written communication skills",
    "count": 10
  },
  {
    "tag": "according",
    "count": 9
  },
  {
    "tag": "accuracy",
    "count": 9
  },
  {
    "tag": "administration",
    "count": 9
  },
  {
    "tag": "agency",
    "count": 9
  },
  {
    "tag": "assist",
    "count": 9
  },
  {
    "tag": "bachelor degree",
    "count": 9
  },
  {
    "tag": "bajo",
    "count": 9
  },
  {
    "tag": "basic",
    "count": 9
  },
  {
    "tag": "basis",
    "count": 9
  },
  {
    "tag": "bring",
    "count": 9
  },
  {
    "tag": "candidates",
    "count": 9
  },
  {
    "tag": "clinical trial",
    "count": 9
  },
  {
    "tag": "collection",
    "count": 9
  },
  {
    "tag": "come",
    "count": 9
  },
  {
    "tag": "country",
    "count": 9
  },
  {
    "tag": "cra",
    "count": 9
  },
  {
    "tag": "cultura",
    "count": 9
  },
  {
    "tag": "da",
    "count": 9
  },
  {
    "tag": "dedicated",
    "count": 9
  },
  {
    "tag": "delivery",
    "count": 9
  },
  {
    "tag": "demonstrated",
    "count": 9
  },
  {
    "tag": "department",
    "count": 9
  },
  {
    "tag": "diseases",
    "count": 9
  },
  {
    "tag": "disponibilidad",
    "count": 9
  },
  {
    "tag": "employment opportunity",
    "count": 9
  },
  {
    "tag": "empresas",
    "count": 9
  },
  {
    "tag": "ensures",
    "count": 9
  },
  {
    "tag": "equal employment opportunity",
    "count": 9
  },
  {
    "tag": "estrategias",
    "count": 9
  },
  {
    "tag": "every day",
    "count": 9
  },
  {
    "tag": "following",
    "count": 9
  },
  {
    "tag": "health care",
    "count": 9
  },
  {
    "tag": "herramientas",
    "count": 9
  },
  {
    "tag": "international",
    "count": 9
  },
  {
    "tag": "internos",
    "count": 9
  },
  {
    "tag": "investigator",
    "count": 9
  },
  {
    "tag": "laboral",
    "count": 9
  },
  {
    "tag": "leader",
    "count": 9
  },
  {
    "tag": "least",
    "count": 9
  },
  {
    "tag": "maintains",
    "count": 9
  },
  {
    "tag": "master",
    "count": 9
  },
  {
    "tag": "ms",
    "count": 9
  },
  {
    "tag": "oncology",
    "count": 9
  },
  {
    "tag": "oportunidad",
    "count": 9
  },
  {
    "tag": "order",
    "count": 9
  },
  {
    "tag": "others",
    "count": 9
  },
  {
    "tag": "parte",
    "count": 9
  },
  {
    "tag": "partner",
    "count": 9
  },
  {
    "tag": "prepare",
    "count": 9
  },
  {
    "tag": "presentation",
    "count": 9
  },
  {
    "tag": "protected",
    "count": 9
  },
  {
    "tag": "race color",
    "count": 9
  },
  {
    "tag": "range",
    "count": 9
  },
  {
    "tag": "related field",
    "count": 9
  },
  {
    "tag": "schedule",
    "count": 9
  },
  {
    "tag": "senior",
    "count": 9
  },
  {
    "tag": "set",
    "count": 9
  },
  {
    "tag": "spanish",
    "count": 9
  },
  {
    "tag": "sponsor",
    "count": 9
  },
  {
    "tag": "standard operating",
    "count": 9
  },
  {
    "tag": "standard operating procedures",
    "count": 9
  }
]

data_mercado = json.dumps(frecuencias ,ensure_ascii=False)
     