
//DEBERIAN SER INPUTS?
//const Principal= 'Conocimiento'
const Secundaria = 'Conocimiento del Cliente'
const id = 1


const Datos = [{
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
        'scores': [3,2,1,2]}],
},
]

const substract = (first, second) =>
    first.reduce((acc, curr, i) => {
        const sub = curr - second[i];
        acc.push(sub);
        return acc;
    }, []);

//Puntajes Reales Usuario
var usuario = Datos.filter(d => d.nombre == Secundaria  && d.id== id)[0]
var puntajes_ideal = Datos.filter(d => d.nombre == Secundaria && d.nivel == usuario.nivel && d.id== 0 )[0].comportamientos[0].scores
var puntajes_reales = usuario.comportamientos[0].scores
var diferencia = substract(puntajes_reales, puntajes_ideal)
var bajo= 0;
var igual= 0;
var mayor= 0;
diferencia.map(dif => dif>0?(mayor++):(dif==0?(igual++):(bajo++)))
//console.log("TOTALES",bajo, igual, mayor)


var birdsCanvas = document.getElementById("birdsChart");

var birdsData = {
  labels: ["Inferior al esparado","En lo esperado","Superior al esperado"],
  datasets: [{
    data: [bajo, igual, mayor],
    backgroundColor: [
      "rgba(255, 0, 0, 0.5)",
      "rgba(100, 255, 0, 0.5)",
      "rgba(200, 50, 255, 0.5)",
      "rgba(0, 100, 255, 0.5)"
    ]
  }]
};

var polarAreaChart = new Chart(birdsCanvas, {
  type: 'polarArea',
  data: birdsData
});