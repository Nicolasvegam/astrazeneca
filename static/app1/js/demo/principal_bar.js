google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

async function getData3(){
  var appData = await document.getElementById("data_g2").value;
  let str = JSON.parse('"' + appData + '"');   // decoded string here
  let obj = JSON.parse(str);
  var datos = obj
  console.log(datos)
  return datos
}

async function drawChart() {

  var datos_finales = await  getData3()
  var lista_final = [['Cargo', 'Fundamental', 'Regular', 'Profesional']]
  datos_finales.forEach(capacidad_principal =>{lista_final.push(capacidad_principal)});
  var data = google.visualization.arrayToDataTable(lista_final);

  var options = {
    chart: {
      title: 'Nivel General',
      subtitle: ' Personal',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };


  var chart = new google.charts.Bar(document.getElementById('bar_principal'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
