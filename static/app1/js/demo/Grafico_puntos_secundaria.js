// Se obtiene id usuario y datos para filtro especifico
async function getData(){
    var appData = await document.getElementById("data").value;
    let str = JSON.parse('"' + appData + '"');   // decoded string here
    let obj = JSON.parse(str);
    var datos = obj
    var cargo = await document.getElementById("cargo").value
    console.log("cargo:",cargo)
    var capacidad = await document.getElementById("capacidad").value
    console.log("capacidad:",capacidad)
    //------ Calculo de labels y cada data ------
    //------Labels-----
    var comportamientos = datos.filter(d => d.nombre == capacidad)[0].comportamientos[0].list
    console.log(comportamientos)
    //-------Data------
    var fundamental = datos.filter(d => d.nombre == capacidad && d.nivel == 'Fundamental')[0].comportamientos[0].scores
    console.log(fundamental)
    var regular = datos.filter(d => d.nombre == capacidad && d.nivel == 'Regular')[0].comportamientos[0].scores
    console.log(regular)
    var profesional = datos.filter(d => d.nombre == capacidad && d.nivel == 'Profesional')[0].comportamientos[0].scores
    console.log(profesional)
    var real = datos.filter(d => d.nombre == capacidad  && d.id!= 0 )
    //console.log(real)
    var scores_list = real.map(individuo => individuo.comportamientos[0].scores) // [[1,3,3],[1,2,2],[1,3,4]]
    console.log(scores_list)
    var scores_acum = []
    for (var i = 0; i < comportamientos.length; i++) {
        scores_acum.push(0);
        for (var x=0; x < scores_list.length; x++){
            scores_acum[i]+= scores_list[x][i]
        }
    }
    var scores = scores_acum.map(score => score/ scores_list.length) //Se divide en numero de individuos
    console.log('scores',scores)
    return {'labels':comportamientos, 'data1': fundamental, 'data2': regular, 'data3':profesional, 'data4': scores}
}

getData().then(data => {
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
            labels: data.labels,
            datasets: [{
                label: "Fundamental",
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data:  data.data1
                ,
            }, {
                label: "Profesional",
                fill: false,
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                borderDash: [5, 5],
                data: data.data3,
            }, {
                label: "Regular",
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: data.data2,
                fill: false,
            }, {
                label: "Real",
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: data.data4,
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


})
