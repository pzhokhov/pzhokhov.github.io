      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Builder', 'Hours'],
          
            [ "Sasha", 150.45000000000002 ],
          
            [ "Peter", 163.95 ],
          
            [ "Katya", 34.7 ],
          
            [ "Claude", 4.0 ],
          
            [ "Bryan", 4.0 ],
          
            [ "Zina", 12.2 ],
          
            [ "Kane", 4.0 ],
          
            [ "David", 4.0 ],
          
            [ "Kevin", 5.0 ],
          
            [ "Jonah", 7.5 ],
          
            [ "Andrew", 2.5 ],
          
            [ "Jonathan", 2.5 ],
          
            [ "Teja", 1.0 ],
          
            [ "Mama", 3.25 ],
          
            [ "Papa", 3.25 ],
          
            [ "Fred", 2.0 ],
          
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
