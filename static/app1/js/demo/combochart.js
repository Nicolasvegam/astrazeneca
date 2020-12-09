

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

const principal= 'Conocimiento'
var secundaria = 'Conocimiento del Cliente'

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
]




async function drawVisualization( ) {
    var cap_name = await document.getElementById("capacidad").value;
    secundaria = cap_name
    //console.log(cap_name)
    // Para graficar secundarias
    var comportamientos = await datos.filter(d => d.nombre == secundaria)[0].comportamientos[0].list
    var basico = datos.filter(d => d.nombre == secundaria && d.nivel == 'Basico')[0].comportamientos[0].scores
    var regular = datos.filter(d => d.nombre == secundaria && d.nivel == 'Regular')[0].comportamientos[0].scores
    var experto = datos.filter(d => d.nombre == secundaria && d.nivel == 'Experto')[0].comportamientos[0].scores

    comportamientos.unshift('Experticia')
    basico.unshift('Basico')
    console.log(datos.filter(d => d.nombre == cap_name && d.nivel == 'Basico'))
    regular.unshift('Regular')
    experto.unshift('Experto')

    var data = google.visualization.arrayToDataTable([comportamientos, basico, regular, experto])

    var options = {
        title : cap_name,
        vAxis: {title: 'Nivel requerido'},
        hAxis: {title: 'Experticia'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart.draw(data, options);

}