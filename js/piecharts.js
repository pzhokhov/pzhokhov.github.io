google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha", 40.550000000000004 ],
      
        [ "Peter", 38.05 ],
      
        [ "Katya", 5.3 ],
      
        [ "Claude", 2.0 ],
      
        [ "Fred", 2.0 ],
      
        [ "Zina", 0.7 ],
      
        [ "Tatiana", 0.7 ],
      
        [ "Anton", 0.7 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 90)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 290.7 ],
      
        [ "Sasha", 234.2 ],
      
        [ "Katya", 46.00000000000001 ],
      
        [ "Zina", 16.9 ],
      
        [ "Jonah", 7.5 ],
      
        [ "Claude", 6.0 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Fred", 4.0 ],
      
        [ "Tatiana", 3.95 ],
      
        [ "Anton", 3.95 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Andrew", 2.5 ],
      
        [ "Jonathan", 2.5 ],
      
        [ "Teja", 1.0 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 642)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 235.9 ],
      
        [ "wing", 478.29999999999995 ],
      
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
