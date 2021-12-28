google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha", 18.7 ],
      
        [ "Peter", 17.7 ],
      
        [ "Katya", 4.5 ],
      
        [ "Alexia", 2.0 ],
      
        [ "Simon", 2.0 ],
      
        [ "Teja", 2.0 ],
      
        [ "Irina", 1.5 ],
      
        [ "Stefania", 1.5 ],
      
        [ "Zina", 0.5 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 50)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Peter", 541.1999999999998 ],
      
        [ "Sasha", 485.3999999999998 ],
      
        [ "Katya", 103.00000000000003 ],
      
        [ "Irina", 29.5 ],
      
        [ "Zina", 19.9 ],
      
        [ "Jonah", 12.7 ],
      
        [ "Vladilen", 10.0 ],
      
        [ "Claude", 8.5 ],
      
        [ "Tatiana", 7.45 ],
      
        [ "Anton", 7.45 ],
      
        [ "Andrew", 5.5 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Fred", 4.0 ],
      
        [ "Eugene", 4.0 ],
      
        [ "Blake", 4.0 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Teja", 3.0 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Luke", 3.0 ],
      
        [ "Karissa", 3.0 ],
      
        [ "Jonathan", 2.5 ],
      
        [ "Holly", 2.0 ],
      
        [ "Alexia", 2.0 ],
      
        [ "Simon", 2.0 ],
      
        [ "Peter b", 1.5 ],
      
        [ "Brian", 1.5 ],
      
        [ "Qianli", 1.5 ],
      
        [ "Stefania", 1.5 ],
      
        [ "Kostya", 1.0 ],
      
        [ "Nick", 0.2 ],
      
        [ "Allison", 0.1 ],
      
        [ "Edward", 0.1 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 1290)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 238.4 ],
      
        [ "wing", 868.6500000000008 ],
      
        [ "fuselage", 247.84999999999997 ],
      
        [ "undercarriage", 4.0 ],
      
        [ "fwf", 4.0 ],
      
        [ "canopy", 3.6 ],
      
        [ "finishing", 3.6 ],
      
    ]);

    var options = {
      title: "Build hours by sub-kit",
      is3D: true,
      sliceVisibilityThreshold: 0.0,
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
