google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 26.849999999999998 ],
      
        [ "Sasha", 24.349999999999998 ],
      
        [ "Katya", 12.8 ],
      
        [ "Andrew", 3.0 ],
      
        [ "Karissa", 3.0 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 70)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 384.5499999999999 ],
      
        [ "Sasha", 324.2499999999999 ],
      
        [ "Katya", 73.40000000000002 ],
      
        [ "Zina", 19.4 ],
      
        [ "Claude", 7.5 ],
      
        [ "Jonah", 7.5 ],
      
        [ "Tatiana", 6.45 ],
      
        [ "Anton", 6.45 ],
      
        [ "Andrew", 5.5 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Fred", 4.0 ],
      
        [ "Eugene", 4.0 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Luke ", 3.0 ],
      
        [ "Karissa", 3.0 ],
      
        [ "Jonathan", 2.5 ],
      
        [ "Holly", 2.0 ],
      
        [ "Teja", 1.0 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 877)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 235.9 ],
      
        [ "wing", 713.6000000000004 ],
      
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
    $('#piechartBuilderRecent').hide();
    $('#piechartBuilder').hide();
    $('#piechartSubkit').hide();
  } else {
    $('#piechartBuilderRecent').show();
    $('#piechartBuilder').show();
    $('#piechartSubkit').show();
  }
});
