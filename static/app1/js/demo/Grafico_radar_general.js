// Se obtiene id usuario y datos para filtro especifico
async function getData(){
  var random = await document.getElementById("principales").value;
  let str2 = JSON.parse('"' + random + '"');
  let data_random = JSON.parse(str2);
  return data_random[0]
}

getData().then(data =>{

var data = {
    labels: data.competencias,
    datasets: [
        {
            label: "Real",
            backgroundColor: "rgba(255, 205, 86,0.2)",
            borderColor: "rgba(255, 205, 86,1)",
            pointBackgroundColor: "rgba(255, 205, 86,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 205, 86,1)",
            data: data.real
        },
        {
          label: "Fundamental",
          backgroundColor: "rgba(54, 162, 235,0.2)",
          borderColor: "rgba(54, 162, 235,1)",
          pointBackgroundColor: "rgba(54, 162, 235,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(54, 162, 235,1)",
          data: data.fundamental
      },
      {
        label: "Regular",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: data.regular
    },
    {
      label: "Profesional",
      backgroundColor: "rgba(75, 192, 192,0.2)",
      borderColor: "rgba(75, 192, 192,1)",
      pointBackgroundColor: "rgba(75, 192, 192,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(75, 192, 192,1)",
      data: data.profesional
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
