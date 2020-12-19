window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

window.randomScalingFactor = function() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};

var config = {
    type: 'line',
    data: {
        labels: ["Comportamiento1", "Comportamiento2", "Comportamiento3", "Comportamiento4"],
        datasets: [{
            label: "Fundamental",
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                
            ],
        }, {
            label: "Profesional",
            fill: false,
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            borderDash: [5, 5],
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
               
            ],
        }, {
            label: "Regular",
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                
            ],
            fill: false,
        }, {
            label: "Real",
            backgroundColor: window.chartColors.yellow,
            borderColor: window.chartColors.yellow,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                
            ],
            fill: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            position: 'top'
        },
        title: {
            position: 'bottom',
            display: true,
            text:'Chart.js Resizable Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Comportamientos'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Scores'
                }
            }]
        }
    }
};

//Draw chart
window.onload = function() {
    var ctx = document.getElementById("chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
};

//Update type of chart 
$('#updateChart').click(function(e) {
    var chart = window.myLine;
    var types = ['line', 'bar', 'bubble'];
  
    chart.config.type = types[Math.floor(Math.random()*3)];
    chart.destroy();

    var ctx = document.getElementById("chart").getContext("2d");
    window.myLine = new Chart(ctx, chart.config);
});

//Use JQUeryUI to resize the div with IE 11
$(".isResizable").resizable();

