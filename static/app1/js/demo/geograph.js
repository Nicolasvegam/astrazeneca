google.charts.load('current', {
'packages':['geochart'],
// Note: you will need to get a mapsApiKey for your project.
// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
var data = google.visualization.arrayToDataTable([
  ['Country',   'Indicador1'],
  ['Chile', 36], ['Argentina', -8], ['Uruguay', 6], ['Brazil', -24]
]);

var options = {
  region: '005', // Africa
  colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
  backgroundColor: '#81d4fa',
  datalessRegionColor: '#f8bbd0',
  defaultColor: '#f5f5f5',
};

var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
chart.draw(data, options);
};
