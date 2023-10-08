google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);
google.charts.setOnLoadCallback(drawChartMonth);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha + Peter", 81.0 ],
      
        [ "Zain", 13.0 ],
      
        [ "Ben", 11.0 ],
      
        [ "Vihang", 10.54 ],
      
        [ "Josh", 10.5 ],
      
        [ "Chang", 5.0 ],
      
        [ "Denis", 5.0 ],
      
        [ "Alexei", 3.0 ],
      
        [ "Joe", 3.0 ],
      
        [ "Brandon", 3.0 ],
      
        [ "Joost", 2.5 ],
      
        [ "Johan", 2.5 ],
      
        [ "Ivonna", 2.5 ],
      
        [ "Fred", 2.5 ],
      
        [ "Kostya", 1.0 ],
      
    ]);

    var options = {
      title: "Build hours  in last 30 days by builder (total 156)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilderRecent'));

    chart.draw(data, options);
}

function drawChartBuilder() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha + Peter", 2767.0 ],
      
        [ "Katya", 124.65000000000003 ],
      
        [ "Joost", 116.5 ],
      
        [ "Brandon", 113.4 ],
      
        [ "Irina", 74.0 ],
      
        [ "Zain", 67.75999999999999 ],
      
        [ "Eugene", 53.050000000000004 ],
      
        [ "Vihang", 44.04 ],
      
        [ "Josh", 29.5 ],
      
        [ "Ben", 27.0 ],
      
        [ "Vladilen", 25.5 ],
      
        [ "Chang", 25.5 ],
      
        [ "Zina", 22.9 ],
      
        [ "Fred", 22.0 ],
      
        [ "Morgan", 17.5 ],
      
        [ "Alexander", 16.7 ],
      
        [ "Nicholay", 12.75 ],
      
        [ "Jonah", 12.7 ],
      
        [ "Claude", 10.5 ],
      
        [ "Tatiana", 10.45 ],
      
        [ "Anton", 9.45 ],
      
        [ "Melinda", 8.8 ],
      
        [ "Dan", 8.0 ],
      
        [ "Sarah", 8.0 ],
      
        [ "Dennis", 8.0 ],
      
        [ "Georg", 7.0 ],
      
        [ "Kostya", 6.0 ],
      
        [ "Emil", 6.0 ],
      
        [ "Kata", 6.0 ],
      
        [ "Holly", 5.8 ],
      
        [ "Andrew", 5.5 ],
      
        [ "Jonathan", 5.5 ],
      
        [ "Joe", 5.5 ],
      
        [ "Kevin", 5.0 ],
      
        [ "Hailey", 5.0 ],
      
        [ "Denis", 5.0 ],
      
        [ "Michelle", 4.5 ],
      
        [ "Rou", 4.5 ],
      
        [ "Bryan", 4.0 ],
      
        [ "Kane", 4.0 ],
      
        [ "David", 4.0 ],
      
        [ "Blake", 4.0 ],
      
        [ "Emily", 4.0 ],
      
        [ "Melissa", 4.0 ],
      
        [ "Sheriden", 4.0 ],
      
        [ "Lil Phil K", 4.0 ],
      
        [ "Big Phil K", 4.0 ],
      
        [ "Gustavo", 3.75 ],
      
        [ "Myria", 3.75 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Andrew T", 3.5 ],
      
        [ "Pasha", 3.5 ],
      
        [ "Teja", 3.0 ],
      
        [ "Matthias", 3.0 ],
      
        [ "Luke", 3.0 ],
      
        [ "Karissa", 3.0 ],
      
        [ "Saeid", 3.0 ],
      
        [ "Andrew L", 3.0 ],
      
        [ "Sergei", 3.0 ],
      
        [ "Hiyan", 3.0 ],
      
        [ "John", 3.0 ],
      
        [ "Sanam", 3.0 ],
      
        [ "Hanna", 3.0 ],
      
        [ "Verse", 3.0 ],
      
        [ "Carl", 3.0 ],
      
        [ "Jon", 3.0 ],
      
        [ "Alexei", 3.0 ],
      
        [ "Sergey", 2.5 ],
      
        [ "Zach", 2.5 ],
      
        [ "Dana", 2.5 ],
      
        [ "Greg", 2.5 ],
      
        [ "Hannah", 2.5 ],
      
        [ "Robert Tang", 2.5 ],
      
        [ "Johan", 2.5 ],
      
        [ "Ivonna", 2.5 ],
      
        [ "Alexia", 2.0 ],
      
        [ "Simon", 2.0 ],
      
        [ "Catherine", 2.0 ],
      
        [ "Nat", 2.0 ],
      
        [ "Bergen", 2.0 ],
      
        [ "Liz", 2.0 ],
      
        [ "Adrian", 2.0 ],
      
        [ "Noah", 2.0 ],
      
        [ "Tamera", 2.0 ],
      
        [ "Akash", 2.0 ],
      
        [ "Pranav", 2.0 ],
      
        [ "Acya", 2.0 ],
      
        [ "Peter B", 1.5 ],
      
        [ "Brian", 1.5 ],
      
        [ "Qianli", 1.5 ],
      
        [ "Stefania", 1.5 ],
      
        [ "Mike", 1.5 ],
      
        [ "Rick", 1.0 ],
      
        [ "Edward", 0.6 ],
      
        [ "Dima", 0.5 ],
      
        [ "Vanya", 0.5 ],
      
        [ "Nick", 0.2 ],
      
        [ "Allison", 0.1 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 3860)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 269.4 ],
      
        [ "wing", 868.6500000000008 ],
      
        [ "fuselage", 1146.1500000000005 ],
      
        [ "undercarriage", 89.85 ],
      
        [ "fwf", 480.8 ],
      
        [ "canopy", 307.1 ],
      
        [ "finishing", 22.6 ],
      
        [ "avionics", 545.26 ],
      
        [ "upholstery", 237.0 ],
      
        [ "wiring", 224.25 ],
      
        [ "ordering", 3.0 ],
      
        [ "avioncs", 172.54000000000002 ],
      
        [ "fwf. finishing", 2.5 ],
      
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
      
        [ "2/2020", 0.0, 0.0],
      
        [ "3/2020", 0.0, 0.0],
      
        [ "4/2020", 0.0, 0.0],
      
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
      
        [ "1/2022", 50.0, 42.0],
      
        [ "2/2022", 88.0, 74.0],
      
        [ "3/2022", 113.35000000000001, 87.4],
      
        [ "4/2022", 96.5, 89.5],
      
        [ "5/2022", 89.4, 75.80000000000001],
      
        [ "6/2022", 123.0, 78.7],
      
        [ "7/2022", 150.3, 101.4],
      
        [ "8/2022", 117.7, 82.2],
      
        [ "9/2022", 135.09999999999997, 123.0],
      
        [ "10/2022", 164.7, 143.7],
      
        [ "11/2022", 134.8, 103.2],
      
        [ "12/2022", 16.6, 12.9],
      
        [ "1/2023", 88.5, 68.5],
      
        [ "2/2023", 143.5, 114.0],
      
        [ "3/2023", 124.0, 84.5],
      
        [ "4/2023", 121.1, 53.1],
      
        [ "5/2023", 110.0, 71.5],
      
        [ "6/2023", 71.0, 37.0],
      
        [ "7/2023", 219.0, 119.5],
      
        [ "8/2023", 256.76, 97.5],
      
        [ "9/2023", 146.54, 71.5],
      
        [ "10/2023", 23.25, 23.25],
      
        [ "8/2026", 3.5, 3.5],
      
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

/*
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
*/
