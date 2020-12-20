

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
    var secundaria = await document.getElementById("capacidad").value;
    var id = await document.getElementById("id").value;
    var cargo = await document.getElementById("cargo").value;
    console.log("Capacidad:", secundaria)
    console.log("Id:",id)
    console.log("Cargo:", cargo)
    //obtengo lista de competencias secundarias de la competencia principal
    //Para cada competencia secundaria
    //Obtengo comportamientos de la competencia secundaria
    var comportamientos = datos.filter(d => d.nombre == secundaria)[0].comportamientos[0].list
    var basico = datos.filter(d => d.nombre == secundaria && d.nivel == 'Basico')[0].comportamientos[0].scores
    var regular = datos.filter(d => d.nombre == secundaria && d.nivel == 'Regular')[0].comportamientos[0].scores
    var experto = datos.filter(d => d.nombre == secundaria && d.nivel == 'Experto')[0].comportamientos[0].scores
    var real = datos.filter(d => d.nombre == secundaria  && d.id== id_usuario )[0].comportamientos[0].scores
    //Obtengo puntaje de cada competencia secundaria a partir de sus compartamientos (suma)
    //Adapto datos a formato del grafico

    

}


async function drawVisualization( ) {
    var cap_name = await document.getElementById("capacidad").value;
   
    //---------Datos falsos--------------
    var capacidades_secundarias = ['Experticia','Conocimiento del Cliente','Conocimiento del Entorno','Compliance']
    var sf=['Fundamental',6,9,10]
    var sr=['Regular',6,12,11]
    var sp=['Profesional',12,12,14]
    var sreal=['Real',8,7,12]
    // Calcula con cual es más semejante (diferncia de vectores)
    var categoria = 'Regular'


    datos_finales = [capacidades_secundarias, sf, sr, sp, sreal]
    datos_transpuestos = transpose(datos_finales)

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