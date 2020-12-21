google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Cargo', 'Fundamental', 'Regular', 'Profesional'],
    ['AMP', 15, 60, 20],
    ['KAM', 11, 46, 25],
    ['FLSM', 66, 11, 30]
  ]);

  var options = {
    chart: {
      title: 'Nivel General',
      subtitle: ' Personal Cono Sur',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };


  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
