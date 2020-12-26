// Se obtiene id usuario y datos para filtro especifico
async function getData(){
    var appData = await document.getElementById("data").value;
    let str = JSON.parse('"' + appData + '"');   // decoded string here
    let obj = JSON.parse(str);
    var Data = obj
    console.log(Data)
    var id = await document.getElementById("id").value
    console.log("id usuario:",id)
    var cargo = await document.getElementById("cargo").value
    console.log("cargo:",cargo)
    var lista = Data.filter(d => d.role==cargo && d.id== 0).map(capacidad => capacidad.padre) //Filtro basico y 0 es para evitar duplicados
    var set = [...new Set(lista)];
    console.log(set)
  //----Filtrar data----------
  return set

}

//Datos falsos
function randomScalingFactor() {
	return (Math.random() > 0.5 ? 1.0 : 0.3) * Math.round(Math.random() * 100);
}

getData().then(set=>{
  //Obtener Data y filtrar

//Datos falsos
var capacidades_principales = set
console.log(capacidades_principales)
var puntajes = []
for(var i=0; i< capacidades_principales.length; i++){
  puntajes.push(randomScalingFactor())
}
console.log(puntajes)

var data = {
    labels: capacidades_principales,
    datasets: [
        {
            label: "Competencias principales",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: puntajes
        }
    ]
};
var ctx = document.getElementById("myChart");
var options = {
				tooltips: {
        	mode: 'label'
        },
        scales: {
            
        }
    };
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});
Chart.helpers.bindEvents(myRadarChart, ['mousedown'], function(evt) {
	var lastMousePosition = [evt.x, evt.y];
  console.log('mousedown');
  var lastActive = myRadarChart.lastActive;
	if (Array.isArray(lastActive) && lastActive.length) {
  	lastActive = lastActive[0];
    console.log(lastActive);
  	var moveHandler = function (evt) {
  			var index = lastActive._index;
      	var dataset = lastActive._datasetIndex;
        console.log('mouse move');
      	if (evt.y < lastMousePosition[1]) {
      		myRadarChart.data.datasets[dataset].data[index] = myRadarChart.data.datasets[dataset].data[index] + 1;
      	  myRadarChart.update(1, false);
      	} else if (evt.y > lastMousePosition[1]) {
        	myRadarChart.data.datasets[dataset].data[index] = myRadarChart.data.datasets[dataset].data[index] - 1;
          myRadarChart.update(1, false);
        }
      lastMousePosition = [evt.x, evt.y];
  	};
    var outHandler = function () {
      console.log('unbinding');
      Chart.helpers.unbindEvents(myRadarChart, {'mousemove': moveHandler});
      Chart.helpers.unbindEvents(myRadarChart, {'mouseup': outHandler});
      Chart.helpers.unbindEvents(myRadarChart, {'mouseout': outHandler});
    }
  	Chart.helpers.bindEvents(myRadarChart, ['mousemove'], moveHandler);
    Chart.helpers.bindEvents(myRadarChart, ['mouseup'], outHandler);
    Chart.helpers.bindEvents(myRadarChart, ['mouseout'], outHandler);
  }
});

})
