async function getData(){
  var appData = await document.getElementById("st").value;
  let str = JSON.parse('"' + appData + '"');   // decoded string here
  let obj = JSON.parse(str);
  var datos = obj
  console.log(datos)

  return datos
}
async function drawVisualization() {
  // Create and populate the data table.

  var datos_finales = await  getData()
  var lista_final = [['Competencia', 'Fundamental', 'Regular', 'Experto']]


  datos_finales.forEach(capacidad_principal =>{lista_final.push(capacidad_principal)});

  var data = google.visualization.arrayToDataTable(lista_final);
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('chart')).
      draw(data,
           {title:"Logro de Compentencias Principales",
            width:'100%', height:400,
            vAxis: {title: "Competencias"}, isStacked: 'percent',
            hAxis: {title: "% de logro"}}
      );
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawVisualization);
