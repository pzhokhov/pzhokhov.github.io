google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha", 31.599999999999998 ],
      
        [ "Peter", 29.299999999999997 ],
      
        [ "Katya", 7.300000000000001 ],
      
        [ "Andrew", 3.0 ],
      
        [ "Karissa", 3.0 ],
      
        [ "Jonah", 2.2 ],
      
        [ "Peter ", 2.0 ],
      
        [ "Tatiana", 1.0 ],
      
        [ "Anton ", 1.0 ],
      
        [ "Nick", 0.2 ],
      
        [ "Allison", 0.1 ],
      
        [ "Edward", 0.1 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 80)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 403.89999999999986 ],
      
        [ "Sasha", 345.89999999999986 ],
      
        [ "Katya", 76.50000000000003 ],
      
        [ "Zina", 19.4 ],
      
        [ "Jonah", 9.7 ],
      
        [ "Claude", 7.5 ],
      
        [ "Tatiana", 7.45 ],
      
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
      
        [ "Peter ", 2.0 ],
      
        [ "Teja", 1.0 ],
      
        [ "Anton ", 1.0 ],
      
        [ "Nick", 0.2 ],
      
        [ "Allison", 0.1 ],
      
        [ "Edward", 0.1 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 928)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 235.9 ],
      
        [ "wing", 764.3000000000006 ],
      
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
