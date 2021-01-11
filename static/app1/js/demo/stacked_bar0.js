async function getData0(){
  var appData = await document.getElementById("st0").value;
  let str = JSON.parse('"' + appData + '"');   // decoded string here
  let obj = JSON.parse(str);
  var datos = obj
  console.log(datos)

  return datos
}
async function drawVisualization() {
  // Create and populate the data table.

  var datos_finales = await  getData0()
  var lista_final = [['Competencia', 'Fundamental', 'Regular', 'Experto']]


  datos_finales.forEach(capacidad_principal =>{lista_final.push(capacidad_principal)});

  var data = google.visualization.arrayToDataTable(lista_final);
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('chart0')).
      draw(data,
           {
            series: {
              0: { color: 'rgb(54, 162, 235)' },
              3: { color: 'rgb(75, 192, 192)' },
              1: { color: 'rgb(255, 99, 132)' },
              2: { color: 'rgb(255, 205, 86)' },
              4: { color: '#1c91c0' },
              5: { color: '#43459d' },
            },title:"Logro de Compentencias Principales",
            width:'100%', height:400,
            vAxis: {title: "Competencias"}, isStacked: 'percent',
            hAxis: {title: "% de logro"}}
      );
      
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawVisualization);
