google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 32.4 ],
      
        [ "Sasha", 29.4 ],
      
        [ "Katya", 6.5 ],
      
        [ "Zina", 2.5 ],
      
        [ "Anton", 2.5 ],
      
        [ "Tatiana", 2.5 ],
      
        [ "Eugene", 2.0 ],
      
        [ "Claude", 0.5 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 78)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 334.49999999999994 ],
      
        [ "Sasha", 276.69999999999993 ],
      
        [ "Katya", 58.60000000000001 ],
      
        [ "Zina", 19.4 ],
      
        [ "Jonah", 7.5 ],
      
        [ "Claude", 6.5 ],
      
        [ "Tatiana", 6.45 ],
      
        [ "Anton", 6.45 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Fred", 4.0 ],
      
        [ "Eugene", 4.0 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Andrew", 2.5 ],
      
        [ "Jonathan", 2.5 ],
      
        [ "Holly", 2.0 ],
      
        [ "Teja", 1.0 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 755)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 235.9 ],
      
        [ "wing", 591.2000000000002 ],
      
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
