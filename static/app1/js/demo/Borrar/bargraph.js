google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

const capPrincipal = 'Conocimiento'
const Data = [{
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
]

function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');
      data.addColumn('number', 'Energyx Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1, .25,3],
        [{v: [9, 0, 0], f: '9 am'}, 2, .5,3],
        [{v: [10, 0, 0], f:'10 am'}, 3, 1,3],
        [{v: [11, 0, 0], f: '11 am'}, 4, 2.25,3],
        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25,3],
        [{v: [13, 0, 0], f: '1 pm'}, 6, 3,3],
        [{v: [14, 0, 0], f: '2 pm'}, 7, 4,3],
        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25,3],
        [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5,3],
        [{v: [17, 0, 0], f: '5 pm'}, 10, 10,3],
      ]);

      var options = {
        title: 'Nivel promedio esperado de tipos de Conocimiento según Experticia ',
        hAxis: {
          title: 'Conocimientos',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Nivel Promedio'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }