

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

const datos = [{
    'id':0,
    'nivel':'Regular',
    'nombre':'Conocimiento del Cliente',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,2,2,1]}],
},
{
    'id':0,
    'nivel':'Experto',
    'nombre':'Conocimiento del Cliente',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,3,3,3]}],
},
{
    'id':0,
    'nivel':'Basico',
    'nombre':'Conocimiento del Cliente',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [1,1,1,1]}],
},
{
    'id':0,
    'nivel':'Experto',
    'nombre':'Conocimiento del Entorno',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,3,3,3]}],
},
{
    'id':0,
    'nivel':'Basico',
    'nombre':'Conocimiento del Entorno',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [1,1,1,1]}],
},
{
    'id':0,
    'nivel':'Regular',
    'nombre':'Conocimiento del Entorno',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,3,2,3]}],
},
{
    'id':0,
    'nivel':'Regular',
    'nombre':'Compliance',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,3,1,4]}],
},
{
    'id':0,
    'nivel':'Basico',
    'nombre':'Compliance',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,3,1,4]}],
},
{
    'id':0,
    'nivel':'Experto',
    'nombre':'Compliance',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [2,3,1,4]}],
},
{
    'id':1,
    'nivel':'Regular',
    'nombre':'Conocimiento del Cliente',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [3,2,3,2]}],
},
{
    'id':2,
    'nivel':'Regular',
    'nombre':'Conocimiento del Cliente',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [3,2,3,2]}],
},
]

const principal= 'Conocimiento'
var secundaria = 'Conocimiento del Cliente'
const id_usuario = 1



function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

async function getData(){
    var principal = await document.getElementById("capacidad").value;
    var id = await document.getElementById("id").value;
    var cargo = await document.getElementById("cargo").value;
    console.log("Capacidad:", secundaria)
    console.log("Id:",id)
    console.log("Cargo:", cargo)
    //obtengo lista de competencias secundarias de la competencia principal
    var capacidades_secundarias = datos.filter(d => d.nombre == principal && d.nivel == 'Basico' && d.id== 0).map(capacidad => capacidad.nombre) //Filtro basico y 0 es para evitar duplicados
    //Para cada competencia secundaria
    var scores_fundamental = []
    var scores_regular = []
    var scores_profesional = []
    var scores_real = []
    //Obtengo comportamientos de la competencia secundaria
    capacidades_secundarias.forEach( capacidad =>{
        //var comportamientos = datos.filter(d => d.nombre == capacidad)[0].comportamientos[0].list
        //-------Data------
        //Obtengo puntaje de cada competencia secundaria a partir de sus compartamientos (suma)
        var fundamental = datos.filter(d => d.nombre == capacidad && d.nivel == 'Basico')[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_fundamental.append(fundamental)
        var regular = datos.filter(d => d.nombre == capacidad && d.nivel == 'Regular')[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_regular.append(regular)
        var profesional = datos.filter(d => d.nombre == capacidad && d.nivel == 'Experto')[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_profesional.append(profesional)
        var real = datos.filter(d => d.nombre == capacidad  && d.id== id )[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_real.append(real)
    })
     //Adapto datos a formato del grafico
    capacidades_secundarias.unshift('Experticia')
    scores_fundamental.unshift('Fundamental')
    scores_regular.unshift('Regular')
    scores_profesional.unshift('Profesional')
    scores_real.append('Real')
    return [capacidades_secundarias, scores_fundamental, scores_regular, scores_profesional, scores_real] 
  
}


async function drawVisualization( ) {
    var cap_name = await document.getElementById("capacidad").value;
   
    //---------Datos falsos--------------
    var capacidades_secundarias = ['Experticia','Conocimiento del Cliente','Conocimiento del Entorno','Compliance']
    var sf=['Fundamental',6,9,10]
    var sr=['Regular',6,12,11]
    var sp=['Profesional',12,12,14]
    var sreal=['Real',8,7,12]

    // [Dato Falso] -> Calcular con cual es más semejante (diferncia de vectores)
    var categoria = 'Regular'

    //var datos_finales = getData()
    var datos_finales = [capacidades_secundarias, sf, sr, sp, sreal]
    var datos_transpuestos = transpose(datos_finales)

    var data = google.visualization.arrayToDataTable(datos_transpuestos)

    var options = {
        title : cap_name,
        vAxis: {title: 'Nivel requerido'},
        hAxis: {title: 'Competencias secundarias'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart.draw(data, options);

}