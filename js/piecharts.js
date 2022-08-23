google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);
google.charts.setOnLoadCallback(drawChartMonth);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha + Peter", 101.2 ],
      
        [ "Irina", 11.0 ],
      
        [ "Brandon", 2.5 ],
      
        [ "Dana", 2.5 ],
      
        [ "Greg", 2.5 ],
      
        [ "Nikolai", 2.5 ],
      
        [ "Eugene", 2.0 ],
      
        [ "Sarah", 2.0 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 126)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha + Peter", 1638.6 ],
      
        [ "Katya", 124.65000000000003 ],
      
        [ "Irina", 74.0 ],
      
        [ "Eugene", 24.45 ],
      
        [ "Zina", 20.9 ],
      
        [ "Alexander", 16.7 ],
      
        [ "Jonah", 12.7 ],
      
        [ "Vladilen", 10.0 ],
      
        [ "Brandon", 9.9 ],
      
        [ "Claude", 8.5 ],
      
        [ "Tatiana", 8.45 ],
      
        [ "Anton", 8.45 ],
      
        [ "Melinda", 7.3 ],
      
        [ "Andrew", 5.5 ],
      
        [ "Jonathan", 5.5 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Sarah", 4.5 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Fred", 4.0 ],
      
        [ "Holly", 4.0 ],
      
        [ "Blake", 4.0 ],
      
        [ "Dan", 4.0 ],
      
        [ "Joost", 4.0 ],
      
        [ "Gustavo", 3.75 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Andrew T", 3.5 ],
      
        [ "Teja", 3.0 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Luke", 3.0 ],
      
        [ "Karissa", 3.0 ],
      
        [ "Kostya", 3.0 ],
      
        [ "Saeid", 3.0 ],
      
        [ "Andrew L", 3.0 ],
      
        [ "Sergey", 2.5 ],
      
        [ "Zach", 2.5 ],
      
        [ "Dana", 2.5 ],
      
        [ "Greg", 2.5 ],
      
        [ "Nikolai", 2.5 ],
      
        [ "Alexia", 2.0 ],
      
        [ "Simon", 2.0 ],
      
        [ "Catherine", 2.0 ],
      
        [ "Nat", 2.0 ],
      
        [ "Bergen", 2.0 ],
      
        [ "Peter B", 1.5 ],
      
        [ "Brian", 1.5 ],
      
        [ "Qianli", 1.5 ],
      
        [ "Stefania", 1.5 ],
      
        [ "Rick", 1.0 ],
      
        [ "Nick", 0.2 ],
      
        [ "Allison", 0.1 ],
      
        [ "Edward", 0.1 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 2078)",
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
      
        [ "fuselage", 715.0500000000003 ],
      
        [ "undercarriage", 76.35 ],
      
        [ "fwf", 27.0 ],
      
        [ "canopy", 57.1 ],
      
        [ "finishing", 3.6 ],
      
        [ "avionics", 24.0 ],
      
        [ "upholstery", 209.5 ],
      
    ]);

    var options = {
      title: "Build hours by sub-kit",
      is3D: true,
      sliceVisibilityThreshold: 0.0,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartSubkit'));

    chart.draw(data, options);
}


function drawChartMonth() {
    var data = google.visualization.arrayToDataTable([
      ['Month', 'All', 'Sasha + Peter'],
      
        [ "6/2019", 18.0, 12.0],
      
        [ "10/2019", 27.4, 27.4],
      
        [ "11/2019", 84.0, 79.5],
      
        [ "12/2019", 10.0, 7.0],
      
        [ "1/2020", 9.0, 6.0],
      
        [ "5/2020", 76.5, 49.0],
      
        [ "6/2020", 79.0, 64.0],
      
        [ "7/2020", 63.80000000000001, 47.800000000000004],
      
        [ "8/2020", 124.9, 110.9],
      
        [ "9/2020", 97.10000000000001, 79.7],
      
        [ "10/2020", 93.6, 70.1],
      
        [ "11/2020", 80.70000000000002, 66.2],
      
        [ "12/2020", 22.0, 18.0],
      
        [ "1/2021", 26.6, 24.6],
      
        [ "2/2021", 70.9, 52.10000000000001],
      
        [ "3/2021", 78.2, 63.0],
      
        [ "4/2021", 54.300000000000004, 41.800000000000004],
      
        [ "5/2021", 5.5, 4.0],
      
        [ "6/2021", 1.0, 0.0],
      
        [ "7/2021", 45.0, 45.0],
      
        [ "8/2021", 55.0, 17.0],
      
        [ "9/2021", 27.0, 23.0],
      
        [ "10/2021", 58.0, 53.5],
      
        [ "11/2021", 35.1, 30.6],
      
        [ "12/2021", 48.4, 34.4],
      
        [ "1/2022", 45.0, 37.0],
      
        [ "2/2022", 88.0, 74.0],
      
        [ "3/2022", 110.85000000000001, 84.9],
      
        [ "4/2022", 94.0, 87.0],
      
        [ "5/2022", 89.4, 75.80000000000001],
      
        [ "6/2022", 123.0, 78.7],
      
        [ "7/2022", 150.3, 101.4],
      
        [ "8/2022", 87.2, 73.2],
      
    ]);

    var options = {
        hAxis: {
            title: 'Month'
        },
        vAxis: {
            title: 'Hours'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechartMonth'));

    chart.draw(data, options);
    chart.draw(datasp, options);
}

$(window).resize(function() {
  if ($(this).width() < 1024) {
    $('#piechartBuilderRecent').hide();
    $('#piechartBuilder').hide();
    $('#piechartSubkit').hide();
    $('#linechartMonth').hide();
  } else {
    $('#piechartBuilderRecent').show();
    $('#piechartBuilder').show();
    $('#piechartSubkit').show();
    $('#linechartMonth').hide();
  }
});
