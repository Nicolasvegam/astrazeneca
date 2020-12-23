

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);


function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

async function getData(){
    var appData = await document.getElementById("data").value;
    let str = JSON.parse('"' + appData + '"');   // decoded string here
    let obj = JSON.parse(str);
    var datos = obj
    var principal = await document.getElementById("capacidad").value;
    var id = await document.getElementById("id").value;
    var cargo = await document.getElementById("cargo").value;
    console.log("Capacidad:", principal)
    console.log("Id:",id)
    console.log("Cargo:", cargo)
    //obtengo lista de competencias secundarias de la competencia principal
    var capacidades_secundarias = datos.filter(d => d.padre == principal && d.nivel == 'Fundamental' && d.id== 0).map(capacidad => capacidad.nombre) //Filtro basico y 0 es para evitar duplicados
    console.log(capacidades_secundarias)
    //Para cada competencia secundaria
    var scores_fundamental = []
    var scores_regular = []
    var scores_profesional = []
    var scores_real = []
    //Obtengo comportamientos de la competencia secundaria
    capacidades_secundarias.forEach( capacidad =>{
        //var comportamientos = datos.filter(d => d.nombre == capacidad)[0].comportamientos[0].list
        //-------Data------
        //Obtengo puntaje de cada competencia secundaria a partir de sus compartamientos (suma)
        var fundamental = datos.filter(d => d.nombre == capacidad && d.nivel == 'Fundamental')[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_fundamental.push(fundamental)
        //console.log(datos.filter(d => d.nombre == capacidad && d.nivel == 'Fundamental')[0].comportamientos[0].scores)
        //console.log(fundamental)
        var regular = datos.filter(d => d.nombre == capacidad && d.nivel == 'Regular')[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_regular.push(regular)
        var profesional = datos.filter(d => d.nombre == capacidad && d.nivel == 'Profesional')[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_profesional.push(profesional)
        var real = datos.filter(d => d.nombre == capacidad  && d.id== id )[0].comportamientos[0].scores.reduce((a,b) => a+b, 0)
        scores_real.push(real)
    })
    console.log(scores_fundamental)
     //Adapto datos a formato del grafico
    capacidades_secundarias.unshift('Experticia')
    scores_fundamental.unshift('Fundamental')
    scores_regular.unshift('Regular')
    scores_profesional.unshift('Profesional')
    scores_real.unshift('Real')
    return [capacidades_secundarias, scores_fundamental, scores_regular, scores_profesional, scores_real] 
  
}

var input = getData()

async function drawVisualization( ) {
    var cap_name = await document.getElementById("capacidad").value;

    // [Dato Falso] -> Calcular con cual es más semejante (diferncia de vectores)
    var categoria = 'Regular'

    var datos_finales = await  getData()

    var datos_transpuestos = transpose(datos_finales)

    var data = google.visualization.arrayToDataTable(datos_transpuestos)

    var options = {
        title : cap_name,
        vAxis: {title: 'Nivel requerido'},
        hAxis: {title: 'Competencias secundarias'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart.draw(data, options);

}