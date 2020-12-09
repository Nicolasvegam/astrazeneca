google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);
import Data from data

const principal= 'Conocimiento'
const secundaria = 'Conocimiento del Cliente'
const datos = Data
console.log("DENTRO DE JS")
console.log("DENTRO DE JS", capacidad_secundaria)
// Para graficar secundarias
var comportamientos = datos.filter(d => d.nombre == secundaria)[0].comportamientos[0].list
var basico = datos.filter(d => d.nombre == secundaria && d.nivel == 'Basico')[0].comportamientos[0].scores
var regular = datos.filter(d => d.nombre == secundaria && d.nivel == 'Regular')[0].comportamientos[0].scores
var experto = datos.filter(d => d.nombre == secundaria && d.nivel == 'Experto')[0].comportamientos[0].scores

comportamientos.unshift('Experticia')
basico.unshift('Basico')
console.log(datos.filter(d => d.nombre == secundaria && d.nivel == 'Basico'))
regular.unshift('Regular')
experto.unshift('Experto')



function drawVisualization( ) {
 
  // Some raw data (not necessarily accurate)

  // var data = google.visualization.arrayToDataTable([
  //   ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
  //   ['2004/05',  165,      938,         522,             998,           450,      614.6],
  //   ['2005/06',  135,      1120,        599,             1268,          288,      682],
  //   ['2006/07',  157,      1167,        587,             807,           397,      623],

  // ]);
  var data = google.visualization.arrayToDataTable([comportamientos, basico, regular, experto])

  var options = {
    title : secundaria,
    vAxis: {title: 'Nivel requerido'},
    hAxis: {title: 'Experticia'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart.draw(data, options);

}