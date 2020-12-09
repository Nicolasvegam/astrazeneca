am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    
    series.data = [ {
        "tag": "aa implementación estrategias",
        "count": 1
      },
      {
        "tag": "abarca",
        "count": 1
      },
      {
        "tag": "abarca cuidado",
        "count": 1
      },
      {
        "tag": "abarca cuidado salud",
        "count": 1
      },
      {
        "tag": "abbott",
        "count": 1
      },
      {
        "tag": "abbott empresa",
        "count": 1
      },
      {
        "tag": "abbott empresa líder",
        "count": 1
      },
      {
        "tag": "abbvie",
        "count": 1
      },
      {
        "tag": "abbvie abbvie",
        "count": 1
      },
      {
        "tag": "abbvie abbvie mission",
        "count": 1
      },
      {
        "tag": "abbvie mission",
        "count": 1
      },
      {
        "tag": "abbvie mission discover",
        "count": 0
      },
      {
        "tag": "abbvie please",
        "count": 1
      },
      {
        "tag": "abbvie please visit",
        "count": 1
      },
      {
        "tag": "abbvie twitter",
        "count": 0
      },
      {
        "tag": "abbvie twitter facebook",
        "count": 0
      },
      {
        "tag": "abbvie value",
        "count": 0
      },
      {
        "tag": "abbvie value bringing",
        "count": 0
      },
      {
        "tag": "abilities",
        "count": 1
      },
      {
        "tag": "abilities effective",
        "count": 1
      },
      {
        "tag": "abilities effective oral",
        "count": 1
      },
      {
        "tag": "abilities perform",
        "count": 0
      },
      {
        "tag": "abilities perform job",
        "count": 0
      },
      {
        "tag": "ability",
        "count": 7
      },
      {
        "tag": "ability attain",
        "count": 0
      },
      {
        "tag": "ability attain maintain",
        "count": 0
      },
      {
        "tag": "ability communicate",
        "count": 0
      },
      {
        "tag": "ability communicate effectively",
        "count": 0
      },
      {
        "tag": "ability create",
        "count": 0
      },
      {
        "tag": "ability create opportunities",
        "count": 0
      },
      {
        "tag": "ability evaluate",
        "count": 0
      },
      {
        "tag": "ability evaluate publications",
        "count": 0
      },
      {
        "tag": "ability excel",
        "count": 0
      },
      {
        "tag": "ability excel agile",
        "count": 0
      },
      {
        "tag": "ability foster",
        "count": 0
      },
      {
        "tag": "ability foster ongoing",
        "count": 0
      },
      {
        "tag": "ability learn",
        "count": 0
      },
      {
        "tag": "ability learn appropriate",
        "count": 0
      },
      {
        "tag": "ability manage",
        "count": 0
      },
      {
        "tag": "ability manage required",
        "count": 0
      },
      {
        "tag": "ability manage risk",
        "count": 0
      },
      {
        "tag": "ability navigate",
        "count": 0
      },
      {
        "tag": "ability navigate influence",
        "count": 0
      },
      {
        "tag": "ability think",
        "count": 0
      },
      {
        "tag": "ability think strategically",
        "count": 0
      },
      {
        "tag": "ability translate",
        "count": 0
      },
      {
        "tag": "ability translate complex",
        "count": 0
      },
      {
        "tag": "ability work",
        "count": 0
      },
      {
        "tag": "ability work matrix",
        "count": 0
      },
      {
        "tag": "ability work minimal",
        "count": 0
      },
      {
        "tag": "ability work remotely",
        "count": 0
      },
      {
        "tag": "able",
        "count": 7
      },
      {
        "tag": "able consistently",
        "count": 0
      },
      {
        "tag": "able consistently deliver",
        "count": 0
      },
      {
        "tag": "able embrace",
        "count": 0
      },
      {
        "tag": "able embrace new",
        "count": 0
      },
      {
        "tag": "able handle",
        "count": 0
      },
      {
        "tag": "able handle numerous",
        "count": 0
      },
      {
        "tag": "able navigate",
        "count": 0
      },
      {
        "tag": "able navigate access",
        "count": 0
      },
      {
        "tag": "able quickly",
        "count": 0
      },
      {
        "tag": "able quickly adapt",
        "count": 0
      },
      {
        "tag": "able see",
        "count": 0
      },
      {
        "tag": "able see opportunities",
        "count": 0
      },
      {
        "tag": "abm",
        "count": 1
      },
      {
        "tag": "abm act",
        "count": 0
      },
      {
        "tag": "abm act sr",
        "count": 0
      },
      {
        "tag": "abm expert",
        "count": 0
      },
      {
        "tag": "abm expert key",
        "count": 0
      },
      {
        "tag": "abm involved",
        "count": 0
      },
      {
        "tag": "abm involved pilot",
        "count": 0
      },
      {
        "tag": "abms",
        "count": 1
      },
      {
        "tag": "abms ensure",
        "count": 1
      },
      {
        "tag": "abms ensure performance",
        "count": 1
      },
      {
        "tag": "abms overlapping",
        "count": 0
      },
      {
        "tag": "abms overlapping territories",
        "count": 0
      },
      {
        "tag": "abordaje",
        "count": 1
      },
      {
        "tag": "abordaje principales",
        "count": 1
      },
      {
        "tag": "abordaje principales especialistas",
        "count": 1
      },
      {
        "tag": "absence",
        "count": 2
      },
      {
        "tag": "absence written",
        "count": 0
      },
      {
        "tag": "absence written authorization",
        "count": 0
      },
      {
        "tag": "abstraction",
        "count": 1
      },
      {
        "tag": "abstraction activities",
        "count": 1
      },
      {
        "tag": "abstraction activities data",
        "count": 0
      },
      {
        "tag": "académica",
        "count": 1
      },
      {
        "tag": "académica graduado",
        "count": 1
      },
      {
        "tag": "académica graduado carrera",
        "count": 1
      },
      {
        "tag": "acceder",
        "count": 1
      },
      {
        "tag": "acceder información",
        "count": 1
      },
      {
        "tag": "acceder información actualizada",
        "count": 1
      },
      {
        "tag": "accept",
        "count": 2
      },
      {
        "tag": "accept referrals",
        "count": 2
      },
      {
        "tag": "accept referrals employment",
        "count": 0
      },
      {
        "tag": "acceptable",
        "count": 1
      },
      {
        "tag": "acceptable profitability",
        "count": 1
      },
      {
        "tag": "acceptable profitability kpis",
        "count": 1
      },
      {
        "tag": "acceso",
        "count": 1
      },
      {
        "tag": "acceso marketing",
        "count": 1
      },
      {
        "tag": "acceso marketing regulatorio",
        "count": 1
      },
      {
        "tag": "acceso pacientes",
        "count": 1
      },
      {
        "tag": "acceso pacientes terapias",
        "count": 1
      },
      {
        "tag": "access",
        "count": 5
      },
      {
        "tag": "access challenges",
        "count": 1
      },
      {
        "tag": "access challenges today",
        "count": 1
      },
      {
        "tag": "access cutting",
        "count": 0
      },
      {
        "tag": "access cutting edge",
        "count": 0
      },
      {
        "tag": "access eg",
        "count": 1
      },
      {
        "tag": "access eg infusion",
        "count": 1
      },
      {
        "tag": "access health",
        "count": 0
      },
      {
        "tag": "access health system",
        "count": 0
      },
      {
        "tag": "access medicines",
        "count": 0
      },
      {
        "tag": "access medicines activities",
        "count": 0
      },
      {
        "tag": "access quality",
        "count": 0
      },
      {
        "tag": "access quality health",
        "count": 0
      },
      {
        "tag": "access reimbursement",
        "count": 0
      },
      {
        "tag": "access reimbursement programs",
        "count": 0
      },
      {
        "tag": "accesses",
        "count": 1
      },
      {
        "tag": "accesses resources",
        "count": 1
      },
      {
        "tag": "accesses resources tenacity",
        "count": 1
      },
      {
        "tag": "accessing",
        "count": 2
      },
      {
        "tag": "accessing ec",
        "count": 0
      },
      {
        "tag": "accessing ec account",
        "count": 0
      },
      {
        "tag": "accessories",
        "count": 1
      },
      {
        "tag": "accessories responsible",
        "count": 1
      },
      {
        "tag": "accessories responsible people",
        "count": 0
      },
      {
        "tag": "acciones",
        "count": 1
      },
      {
        "tag": "acciones correctivas",
        "count": 1
      },
      {
        "tag": "acciones correctivas caso",
        "count": 1
      },
      {
        "tag": "acción",
        "count": 3
      },
      {
        "tag": "acción generación",
        "count": 1
      },
      {
        "tag": "acción generación prescripciones",
        "count": 1
      },
      {
        "tag": "acción gerencia",
        "count": 1
      },
      {
        "tag": "acción gerencia negocio",
        "count": 1
      },
      {
        "tag": "acción manager",
        "count": 1
      },
      {
        "tag": "acción manager analizar",
        "count": 1
      },
      {
        "tag": "acción visión",
        "count": 1
      },
      {
        "tag": "acción visión negocios",
        "count": 1
      },
      {
        "tag": "accommodate",
        "count": 1
      },
      {
        "tag": "accommodate business",
        "count": 1
      },
      {
        "tag": "accommodate business changes",
        "count": 1
      },
      {
        "tag": "accomplish",
        "count": 1
      },
      {
        "tag": "accomplish tasks",
        "count": 1
      },
      {
        "tag": "accomplish tasks projects",
        "count": 0
      },
      {
        "tag": "accordance",
        "count": 3
      },
      {
        "tag": "accordance feasibility",
        "count": 0
      },
      {
        "tag": "accordance feasibility processes",
        "count": 0
      },
      {
        "tag": "accordance local",
        "count": 0
      },
      {
        "tag": "accordance local guidelines",
        "count": 0
      },
      {
        "tag": "accordance protocol",
        "count": 0
      },
      {
        "tag": "accordance protocol company",
        "count": 0
      },
      {
        "tag": "accordance regulatory",
        "count": 0
      },
      {
        "tag": "accordance regulatory requirements",
        "count": 0
      },
      {
        "tag": "according",
        "count": 4
      },
      {
        "tag": "according law",
        "count": 0
      },
      {
        "tag": "according law requirements",
        "count": 0
      },
      {
        "tag": "according medpace",
        "count": 0
      },
      {
        "tag": "according medpace sponsor",
        "count": 0
      },
      {
        "tag": "according project",
        "count": 0
      },
      {
        "tag": "according project specific",
        "count": 0
      },
      {
        "tag": "according protocol",
        "count": 0
      },
      {
        "tag": "according protocol verifies",
        "count": 0
      },
      {
        "tag": "according regulations",
        "count": 0
      },
      {
        "tag": "according regulations product",
        "count": 0
      },
      {
        "tag": "account",
        "count": 5
      },
      {
        "tag": "account brand",
        "count": 1
      },
      {
        "tag": "account brand net",
        "count": 1
      },
      {
        "tag": "account controllable",
        "count": 1
      },
      {
        "tag": "account controllable sales",
        "count": 1
      },
      {
        "tag": "account credit",
        "count": 1
      },
      {
        "tag": "account credit line",
        "count": 1
      },
      {
        "tag": "account management",
        "count": 1
      },
      {
        "tag": "account management personal",
        "count": 1
      },
      {
        "tag": "account manager",
        "count": 1
      },
      {
        "tag": "account manager responsible",
        "count": 0
      },
      {
        "tag": "account manager vertical",
        "count": 1
      },
      {
        "tag": "account planning",
        "count": 1
      },
      {
        "tag": "account planning clinical",
        "count": 1
      },
      {
        "tag": "account please",
        "count": 2
      },
      {
        "tag": "account please contact",
        "count": 2
      },
      {
        "tag": "account quarterly",
        "count": 0
      },
      {
        "tag": "account quarterly review",
        "count": 0
      },
      {
        "tag": "accountability",
        "count": 3
      },
      {
        "tag": "accountability agility",
        "count": 1
      },
      {
        "tag": "accountability agility develop",
        "count": 1
      },
      {
        "tag": "accountability challenging",
        "count": 1
      },
      {
        "tag": "accountability challenging work",
        "count": 1
      },
      {
        "tag": "accountability descriptions",
        "count": 1
      },
      {
        "tag": "accountability descriptions drive",
        "count": 1
      },
      {
        "tag": "accountable",
        "count": 3
      },
      {
        "tag": "accountable results",
        "count": 0
      },
      {
        "tag": "accountable results expected",
        "count": 0
      },
      {
        "tag": "accountable results large",
        "count": 0
      },
      {
        "tag": "accounts",
        "count": 1
      },
      {
        "tag": "accounts epc",
        "count": 0
      },
      {
        "tag": "accounts epc meet",
        "count": 0
      },
      {
        "tag": "accounts territory",
        "count": 0
      },
      {
        "tag": "accounts territory well",
        "count": 0
      },
      {
        "tag": "accredited",
        "count": 1
      },
      {
        "tag": "accredited institution",
        "count": 1
      },
      {
        "tag": "accredited institution eg",
        "count": 1
      },
      {
        "tag": "accuracy",
        "count": 2
      },
      {
        "tag": "accuracy required",
        "count": 0
      },
      {
        "tag": "accuracy required clinical",
        "count": 0
      },
      {
        "tag": "accuracy timeliness",
        "count": 1
      },
      {
        "tag": "accuracy timeliness completeness",
        "count": 0
      },
      {
        "tag": "accurate",
        "count": 2
      },
      {
        "tag": "accurate complete",
        "count": 0
      },
      {
        "tag": "accurate complete via",
        "count": 0
      },
      {
        "tag": "accurate forecasts",
        "count": 1
      },
      {
        "tag": "accurate forecasts sales",
        "count": 1
      },
      {
        "tag": "acelerando",
        "count": 1
      },
      {
        "tag": "acelerando investigación",
        "count": 1
      },
      {
        "tag": "acelerando investigación ciencias",
        "count": 1
      },
      {
        "tag": "acepta",
        "count": 1
      },
      {
        "tag": "acepta sello",
        "count": 1
      },
      {
        "tag": "acepta sello propio",
        "count": 1
      },
      {
        "tag": "acercamiento",
        "count": 1
      },
      {
        "tag": "acercamiento colación",
        "count": 1
      },
      {
        "tag": "acercamiento colación horas",
        "count": 1
      },
      {
        "tag": "achieve",
        "count": 3
      },
      {
        "tag": "achieve aop",
        "count": 1
      },
      {
        "tag": "achieve aop bookings",
        "count": 1
      },
      {
        "tag": "achieve forecasted",
        "count": 1
      },
      {
        "tag": "achieve forecasted sales",
        "count": 1
      },
      {
        "tag": "achieve goals",
        "count": 1
      },
      {
        "tag": "achieve goals targets",
        "count": 1
      },
      {
        "tag": "achieve revenue",
        "count": 0
      },
      {
        "tag": "achieve revenue ambition",
        "count": 0
      },
      {
        "tag": "achievement",
        "count": 1
      },
      {
        "tag": "achievement annual",
        "count": 0
      },
      {
        "tag": "achievement annual financial",
        "count": 0
      },
      {
        "tag": "achievement leadership",
        "count": 1
      },
      {
        "tag": "achievement leadership contribute",
        "count": 1
      },
      {
        "tag": "achieving",
        "count": 3
      },
      {
        "tag": "achieving cra",
        "count": 1
      },
      {
        "tag": "achieving cra excellence",
        "count": 1
      },
      {
        "tag": "achieving maximum",
        "count": 1
      },
      {
        "tag": "achieving maximum growth",
        "count": 1
      },
      {
        "tag": "achieving sales",
        "count": 1
      },
      {
        "tag": "achieving sales goals",
        "count": 1
      },
      {
        "tag": "aconsejar",
        "count": 1
      },
      {
        "tag": "aconsejar transmitir",
        "count": 1
      },
      {
        "tag": "aconsejar transmitir equipo",
        "count": 1
      },
      {
        "tag": "acorde",
        "count": 2
      },
      {
        "tag": "acorde adquisiciones",
        "count": 1
      },
      {
        "tag": "acorde adquisiciones verificación",
        "count": 1
      },
      {
        "tag": "acorde mercado",
        "count": 1
      },
      {
        "tag": "acquire",
        "count": 1
      },
      {
        "tag": "acquire advance",
        "count": 0
      },
      {
        "tag": "acquire advance knowledge",
        "count": 0
      },
      {
        "tag": "acquired",
        "count": 2
      },
      {
        "tag": "acquired expertise",
        "count": 2
      },
      {
        "tag": "acquired expertise analyze",
        "count": 0
      },
      {
        "tag": "across",
        "count": 6
      },
      {
        "tag": "across allergan",
        "count": 0
      },
      {
        "tag": "across allergan aesthetics",
        "count": 0
      },
      {
        "tag": "across channels",
        "count": 2
      },
      {
        "tag": "across channels leveraging",
        "count": 0
      },
      {
        "tag": "across enterprise",
        "count": 0
      },
      {
        "tag": "across enterprise harmonized",
        "count": 0
      },
      {
        "tag": "across globe",
        "count": 0
      },
      {
        "tag": "across globe continue",
        "count": 0
      },
      {
        "tag": "across several",
        "count": 1
      },
      {
        "tag": "across several key",
        "count": 1
      },
      {
        "tag": "across teams",
        "count": 1
      },
      {
        "tag": "across teams cross",
        "count": 0
      },
      {
        "tag": "across therapeutic",
        "count": 1
      },
      {
        "tag": "across therapeutic areas",
        "count": 1
      },
      {
        "tag": "act",
        "count": 3
      },
      {
        "tag": "act change",
        "count": 0
      },
      {
        "tag": "act change execution",
        "count": 0
      },
      {
        "tag": "act primary",
        "count": 0
      },
      {
        "tag": "act primary liaison",
        "count": 0
      },
      {
        "tag": "act sr",
        "count": 0
      },
      {
        "tag": "act sr manager",
        "count": 0
      },
      {
        "tag": "acting",
        "count": 1
      },
      {
        "tag": "acting lead",
        "count": 0
      },
      {
        "tag": "acting lead cra",
        "count": 0
      },
      {
        "tag": "action",
        "count": 7
      },
      {
        "tag": "action enhance",
        "count": 0
      },
      {
        "tag": "action enhance performance",
        "count": 0
      },
      {
        "tag": "action items",
        "count": 2
      },
      {
        "tag": "action items analysis",
        "count": 1
      },
      {
        "tag": "action items resolution",
        "count": 0
      },
      {
        "tag": "action openness",
        "count": 1
      },
      {
        "tag": "action openness frequent",
        "count": 0
      },
      {
        "tag": "action plan",
        "count": 2
      },
      {
        "tag": "action plan core",
        "count": 2
      },
      {
        "tag": "action plans",
        "count": 2
      },
      {
        "tag": "action plans budget",
        "count": 1
      },
      {
        "tag": "action plans maintains",
        "count": 1
      },
      {
        "tag": "action plans monitoring",
        "count": 1
      },
      {
        "tag": "actionable",
        "count": 2
      },
      {
        "tag": "actionable recommendations",
        "count": 2
      },
      {
        "tag": "actionable recommendations experience",
        "count": 2
      },
      {
        "tag": "actions",
        "count": 6
      },
      {
        "tag": "actions coordinates",
        "count": 2
      },
      {
        "tag": "actions coordinates supervises",
        "count": 0
      },
      {
        "tag": "actions fees",
        "count": 0
      },
      {
        "tag": "actions fees arising",
        "count": 0
      },
      {
        "tag": "actions immediately",
        "count": 1
      },
      {
        "tag": "actions immediately communicates",
        "count": 1
      },
      {
        "tag": "actions key",
        "count": 0
      },
      {
        "tag": "actions key account",
        "count": 0
      },
      {
        "tag": "actions may",
        "count": 1
      },
      {
        "tag": "actions may provide",
        "count": 1
      },
      {
        "tag": "actions undertaken",
        "count": 2
      },
      {
        "tag": "actions undertaken employment",
        "count": 0
      },
      {
        "tag": "active",
        "count": 3
      },
      {
        "tag": "active countries",
        "count": 0
      },
      {
        "tag": "active countries across",
        "count": 0
      },
      {
        "tag": "active learning",
        "count": 1
      },
      {
        "tag": "active learning relishes",
        "count": 1
      },
      {
        "tag": "active member",
        "count": 1
      },
      {
        "tag": "active member chc",
        "count": 0
      },
      {
        "tag": "active promoter",
        "count": 1
      },
      {
        "tag": "active promoter direct",
        "count": 1
      },
      {
        "tag": "active role",
        "count": 1
      },
      {
        "tag": "active role model",
        "count": 1
      },
      {
        "tag": "actively",
        "count": 5
      },
      {
        "tag": "actively contribute",
        "count": 1
      },
      {
        "tag": "actively contribute development",
        "count": 0
      },
      {
        "tag": "actively monthly",
        "count": 0
      },
      {
        "tag": "actively monthly pricing",
        "count": 0
      },
      {
        "tag": "actively participates",
        "count": 1
      },
      {
        "tag": "actively participates special",
        "count": 0
      },
      {
        "tag": "actively training",
        "count": 0
      },
      {
        "tag": "actively training acquire",
        "count": 0
      },
      {
        "tag": "actividad",
        "count": 1
      },
      {
        "tag": "actividad competencia",
        "count": 1
      },
      {
        "tag": "actividad competencia confeccionar",
        "count": 1
      },
      {
        "tag": "actividades",
        "count": 6
      },
      {
        "tag": "actividades asignadas",
        "count": 1
      },
      {
        "tag": "actividades asignadas sistema",
        "count": 1
      },
      {
        "tag": "actividades clave",
        "count": 1
      },
      {
        "tag": "actividades clave progresar",
        "count": 1
      },
      {
        "tag": "actividades cuales",
        "count": 1
      },
      {
        "tag": "actividades cuales requiera",
        "count": 1
      },
      {
        "tag": "actividades proyectos",
        "count": 1
      },
      {
        "tag": "actividades proyectos cargo",
        "count": 1
      },
      {
        "tag": "actividades recepción",
        "count": 1
      },
      {
        "tag": "actividades recepción almacenamiento",
        "count": 1
      },
      {
        "tag": "actividades relacionadas",
        "count": 2
      },
      {
        "tag": "actividades relacionadas analisis",
        "count": 1
      },
      {
        "tag": "actividades relacionadas planificación",
        "count": 1
      },
      {
        "tag": "actividades según",
        "count": 1
      },
      {
        "tag": "actividades según políticas",
        "count": 1
      },
      {
        "tag": "actividadesadministrar",
        "count": 1
      },
      {
        "tag": "actividadesadministrar marcha",
        "count": 1
      },
      {
        "tag": "actividadesadministrar marcha problemas",
        "count": 1
      },
      {
        "tag": "activities",
        "count": 11
      },
      {
        "tag": "activities appropriate",
        "count": 0
      },
      {
        "tag": "activities appropriate evaluate",
        "count": 0
      },
      {
        "tag": "activities assigned",
        "count": 0
      },
      {
        "tag": "activities assigned protocols",
        "count": 0
      },
      {
        "tag": "activities business",
        "count": 0
      },
      {
        "tag": "activities business technical",
        "count": 0
      },
      {
        "tag": "activities chile",
        "count": 0
      },
      {
        "tag": "activities chile commercial",
        "count": 0
      },
      {
        "tag": "activities clinical",
        "count": 0
      },
      {
        "tag": "activities clinical team",
        "count": 0
      },
      {
        "tag": "activities communication",
        "count": 1
      },
      {
        "tag": "activities communication ensure",
        "count": 0
      },
      {
        "tag": "activities data",
        "count": 0
      },
      {
        "tag": "activities data collection",
        "count": 0
      },
      {
        "tag": "activities develop",
        "count": 0
      },
      {
        "tag": "activities develop positive",
        "count": 0
      },
      {
        "tag": "activities drive",
        "count": 0
      },
      {
        "tag": "activities drive market",
        "count": 0
      },
      {
        "tag": "activities growing",
        "count": 0
      },
      {
        "tag": "activities growing rapidly",
        "count": 0
      },
      {
        "tag": "activities lead",
        "count": 0
      },
      {
        "tag": "activities lead cra",
        "count": 0
      },
      {
        "tag": "activities may",
        "count": 1
      },
      {
        "tag": "activities may coach",
        "count": 1
      },
      {
        "tag": "activities minimum",
        "count": 1
      },
      {
        "tag": "activities minimum years",
        "count": 1
      },
      {
        "tag": "activities outcomes",
        "count": 1
      },
      {
        "tag": "activities outcomes lead",
        "count": 1
      },
      {
        "tag": "activities phase",
        "count": 0
      },
      {
        "tag": "activities phase iv",
        "count": 0
      },
      {
        "tag": "activities recommend",
        "count": 1
      },
      {
        "tag": "activities recommend promotional",
        "count": 1
      },
      {
        "tag": "activities supervisors",
        "count": 0
      },
      {
        "tag": "activities supervisors decisions",
        "count": 0
      },
      {
        "tag": "activities via",
        "count": 1
      },
      {
        "tag": "activities via confirmation",
        "count": 1
      },
      {
        "tag": "activities within",
        "count": 1
      },
      {
        "tag": "activities within area",
        "count": 0
      },
      {
        "tag": "activity",
        "count": 2
      },
      {
        "tag": "activity expenses",
        "count": 0
      },
      {
        "tag": "activity expenses optimize",
        "count": 0
      },
      {
        "tag": "activity trends",
        "count": 1
      },
      {
        "tag": "activity trends point",
        "count": 0
      },
      {
        "tag": "actores",
        "count": 1
      },
      {
        "tag": "actores procesos",
        "count": 1
      } ];
    
    series.dataFields.word = "tag";
    series.dataFields.value = "count";
    
    series.heatRules.push({
     "target": series.labels.template,
     "property": "fill",
     "min": am4core.color("#0000CC"),
     "max": am4core.color("#CC00CC"),
     "dataField": "value"
    });
    
    series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
    series.labels.template.urlTarget = "_blank";
    series.labels.template.tooltipText = "{word}: {value}";
    
    var hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#FF0000");
    
    var subtitle = chart.titles.create();
    subtitle.text = "(click to open)";
    
    var title = chart.titles.create();
    title.text = "Palabras mas repetidas en ofertas laborales";
    title.fontSize = 20;
    title.fontWeight = "800";
    
    }); // end am4core.ready()

    