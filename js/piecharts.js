google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 273.15 ],
      
        [ "Sasha", 214.15 ],
      
        [ "Katya", 40.7 ],
      
        [ "Zina", 16.2 ],
      
        [ "Jonah", 7.5 ],
      
        [ "Claude", 5.0 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Tatiana", 3.25 ],
      
        [ "Anton", 3.25 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Andrew", 2.5 ],
      
        [ "Jonathan", 2.5 ],
      
        [ "Fred", 2.0 ],
      
        [ "Teja", 1.0 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 594)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 235.9 ],
      
        [ "wing", 430.29999999999995 ],
      
    ]);

    var options = {
      title: "Build hours by sub-kit",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartSubkit'));

    chart.draw(data, options);
}

$(window).resize(function() {
  if ($(this).width() < 1024) {
    $('#piechartBuilder').hide();
    $('#piechartSubkit').hide();
  } else {
    $('#piechartBuilder').show();
    $('#piechartSubkit').show();
  }
});
