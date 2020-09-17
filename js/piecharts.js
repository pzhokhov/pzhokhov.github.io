      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Builder', 'Hours'],
          
            [ "Peter", 163.95 ],
          
            [ "Sasha", 150.45000000000002 ],
          
            [ "Katya", 34.7 ],
          
            [ "Zina", 12.2 ],
          
            [ "Jonah", 7.5 ],
          
            [ "Kevin", 5.0 ],
          
            [ "Claude", 4.0 ],
          
            [ "Bryan", 4.0 ],
          
            [ "Kane", 4.0 ],
          
            [ "David", 4.0 ],
          
            [ "Mama", 3.25 ],
          
            [ "Papa", 3.25 ],
          
            [ "Andrew", 2.5 ],
          
            [ "Jonathan", 2.5 ],
          
            [ "Fred", 2.0 ],
          
            [ "Teja", 1.0 ],
          
        ]);

        var options = {
          title: "Build hours by builder",
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
