google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBuilderRecent);
google.charts.setOnLoadCallback(drawChartBuilder);
google.charts.setOnLoadCallback(drawChartSubkit);
google.charts.setOnLoadCallback(drawChartMonth);

function drawChartBuilderRecent() {
    var data = google.visualization.arrayToDataTable([
      ['Builder', 'Hours'],
      
        [ "Sasha + Peter", 38.0 ],
      
        [ "Brandon", 6.5 ],
      
        [ "Joost", 4.0 ],
      
        [ "Pamela", 2.0 ],
      
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
      
        [ "Sasha + Peter", 3519.2000000000007 ],
      
        [ "Joost", 168.5 ],
      
        [ "Brandon", 144.9 ],
      
        [ "Katya", 124.65000000000003 ],
      
        [ "Zain", 81.25999999999999 ],
      
        [ "Irina", 74.0 ],
      
        [ "Vihang", 64.53999999999999 ],
      
        [ "Ben", 55.0 ],
      
        [ "Eugene", 53.050000000000004 ],
      
        [ "Josh", 43.5 ],
      
        [ "Chang", 34.0 ],
      
        [ "Vladilen", 25.5 ],
      
        [ "Zina", 23.4 ],
      
        [ "Fred", 22.0 ],
      
        [ "Morgan", 19.5 ],
      
        [ "Alexander", 16.7 ],
      
        [ "Claude", 13.0 ],
      
        [ "Nicholay", 12.75 ],
      
        [ "Jonah", 12.7 ],
      
        [ "Tatiana", 10.95 ],
      
        [ "Anton", 9.45 ],
      
        [ "Stef", 9.0 ],
      
        [ "Melinda", 8.8 ],
      
        [ "Dan", 8.0 ],
      
        [ "Sarah", 8.0 ],
      
        [ "Dennis", 8.0 ],
      
        [ "Nikita", 8.0 ],
      
        [ "Georg", 7.0 ],
      
        [ "Kostya", 6.0 ],
      
        [ "Emil", 6.0 ],
      
        [ "Kata", 6.0 ],
      
        [ "Holly", 5.8 ],
      
        [ "Andrew", 5.5 ],
      
        [ "Jonathan", 5.5 ],
      
        [ "Teja", 5.5 ],
      
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
      
        [ "Yeoul", 4.0 ],
      
        [ "Chad", 4.0 ],
      
        [ "Chris", 4.0 ],
      
        [ "Savanna", 4.0 ],
      
        [ "Gustavo", 3.75 ],
      
        [ "Myria", 3.75 ],
      
        [ "Edward", 3.6 ],
      
        [ "Jerry", 3.5 ],
      
        [ "Andrew T", 3.5 ],
      
        [ "Pasha", 3.5 ],
      
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
      
        [ "Alex", 2.0 ],
      
        [ "Ira", 2.0 ],
      
        [ "Pudja", 2.0 ],
      
        [ "Roshan", 2.0 ],
      
        [ "Pamela", 2.0 ],
      
        [ "Peter B", 1.5 ],
      
        [ "Brian", 1.5 ],
      
        [ "Qianli", 1.5 ],
      
        [ "Stefania", 1.5 ],
      
        [ "Mike", 1.5 ],
      
        [ "Rick", 1.0 ],
      
        [ "Dima", 0.5 ],
      
        [ "Vanya", 0.5 ],
      
        [ "Nick", 0.2 ],
      
        [ "Allison", 0.1 ],
      
    ]);

    var options = {
      title: "Build hours by builder (total 4834)",
      is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartBuilder'));

    chart.draw(data, options);
}

function drawChartSubkit() {
    var data = google.visualization.arrayToDataTable([
      ['Sub-kit', 'Hours'],
      
        [ "empennage", 297.15 ],
      
        [ "wing", 890.6500000000008 ],
      
        [ "fuselage", 1182.3500000000006 ],
      
        [ "undercarriage", 122.85 ],
      
        [ "fwf", 601.1 ],
      
        [ "canopy", 345.1 ],
      
        [ "finishing", 262.6 ],
      
        [ "avionics", 729.61 ],
      
        [ "upholstery", 485.7 ],
      
        [ "wiring", 226.75 ],
      
        [ "ordering", 3.0 ],
      
        [ "avioncs", 325.04 ],
      
        [ "fwf. finishing", 2.5 ],
      
        [ "wings", 50.0 ],
      
        [ "supervision", 16.0 ],
      
        [ "screwing around", 2.0 ],
      
        [ "parachute", 19.0 ],
      
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
      
        [ "12/0203", 5.0, 5.0],
      
        [ "3/0204", 4.5, 4.5],
      
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
      
        [ "1/2023", 95.5, 75.5],
      
        [ "2/2023", 143.5, 114.0],
      
        [ "3/2023", 124.0, 84.5],
      
        [ "4/2023", 121.1, 53.1],
      
        [ "5/2023", 110.0, 71.5],
      
        [ "6/2023", 71.0, 37.0],
      
        [ "7/2023", 219.0, 119.5],
      
        [ "8/2023", 256.76, 97.5],
      
        [ "9/2023", 146.54, 71.5],
      
        [ "10/2023", 117.0, 79.0],
      
        [ "11/2023", 110.5, 81.0],
      
        [ "12/2023", 132.8, 112.30000000000001],
      
        [ "1/2024", 124.0, 66.0],
      
        [ "3/2024", 110.4, 77.4],
      
        [ "4/2024", 153.5, 138.0],
      
        [ "5/2024", 28.0, 28.0],
      
        [ "05/2024", 4.0, 0.0],
      
        [ "06/2024", 4.5, 4.5],
      
        [ "6/2024", 9.5, 9.5],
      
        [ "7/2024", 4.0, 4.0],
      
        [ "8/2024", 27.0, 27.0],
      
        [ "9/2024", 10.0, 10.0],
      
        [ "10/2024", 12.0, 12.0],
      
        [ "11/2024", 13.0, 13.0],
      
        [ "12/2024", 13.0, 13.0],
      
        [ "1/2025", 12.0, 8.0],
      
        [ "2/2025", 18.0, 12.0],
      
        [ "4/2025", 23.0, 22.0],
      
        [ "5/2025", 29.5, 17.0],
      
        [ "6/2025", 15.0, 15.0],
      
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
