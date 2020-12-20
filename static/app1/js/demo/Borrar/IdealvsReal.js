google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

//DEBERIAN SER INPUTS
const principal= 'Conocimiento'
const secundaria = 'Conocimiento del Cliente'
const id_usuario = 1


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
        'scores': [1,1,2,1]}],
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
    'id':1,
    'nivel':'Regular',
    'nombre':'Conocimiento del Cliente',
    'padre':'Conocimiento' ,
    'comportamientos':[{
        'list': ['comportamiento 1','comportamiento 2','comportamiento 3','comportamiento 4'],
        'scores': [3,2,3,2]}],
},
]

// // Para graficar principales
// const data_filter = Data.filter(d => d.padre == principal);
// console.log(data_filter)
// var nombres_capacidades = []
// var nivel_medio_capacidades = []
// var capacidades = Data.filter(d => d.padre == principal).map(capacidad => nombres_capacidades.push(capacidad.nombre))
// const dataArr = new Set(nombres_capacidades);    
// let nombres_sin_duplicados = [...dataArr];
// console.log(nombres_sin_duplicados)

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

// Para graficar secundarias
var comportamientos = datos.filter(d => d.nombre == secundaria)[0].comportamientos[0].list
var basico = datos.filter(d => d.nombre == secundaria && d.nivel == 'Basico' && d.id== 0 )[0].comportamientos[0].scores
var regular = datos.filter(d => d.nombre == secundaria && d.nivel == 'Regular' && d.id== 0 )[0].comportamientos[0].scores
var experto = datos.filter(d => d.nombre == secundaria && d.nivel == 'Experto'&& d.id== 0)[0].comportamientos[0].scores
// Agrego leyendas por nivel
comportamientos.unshift('Experticia')
basico.unshift('Basico')
regular.unshift('Regular')
experto.unshift('Experto')
// Puntajes Reales
var real = datos.filter(d => d.nombre == secundaria  && d.id== id_usuario )[0].comportamientos[0].scores
real.unshift('Real')

datos_finales = [comportamientos, basico, regular, experto, real]
datos_transpuestos = transpose(datos_finales)
console.log(datos_finales)
console.log(datos_transpuestos)

function drawVisualization( ) {
  
  // Some raw data (not necessarily accurate)

  // var data = google.visualization.arrayToDataTable([
  //   ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
  //   ['2004/05',  165,      938,         522,             998,           450,      614.6],
  //   ['2005/06',  135,      1120,        599,             1268,          288,      682],
  //   ['2006/07',  157,      1167,        587,             807,           397,      623],

  // ]);
  var data = google.visualization.arrayToDataTable(datos_transpuestos)

  var options = {
    title : secundaria,
    vAxis: {title: 'Nivel requerido'},
    hAxis: {title: 'Comportamientos'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('Cap2_Comparacion'));
  chart.draw(data, options);

}