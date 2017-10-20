var ctx = document.getElementById("timeline_chart");
var scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Minutes to Midnight',

             data: [
              {x: 1947, y: 7},
              {x: 1949, y: 3},
              {x: 1953, y: 2},
              {x: 1960, y: 7},
              {x: 1963, y: 12},
              {x: 1968, y: 7},
              {x: 1969, y: 10},
              {x: 1972, y: 12},
              {x: 1974, y: 9},
              {x: 1980, y: 7},
              {x: 1981, y: 4},
              {x: 1984, y: 3},
              {x: 1988, y: 6},
              {x: 1990, y: 10},
              {x: 1991, y: 17},
              {x: 1995, y: 14},
              {x: 1998, y: 9},
              {x: 2002, y: 7},
              {x: 2007, y: 5},
              {x: 2010, y: 6},
              {x: 2012, y: 5},
              {x: 2015, y: 3},
              {x: 2017, y: 2.5},
             ],

            borderColor: 'rgba(0, 0, 255, 0.8)',
            backgroundColor: 'rgba(0, 0, 255, 0.6)',
            steppedLine: true,
            pointHitRadius: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 3,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                  stepSize: 5,
                  min: 1947,
                  max: 2017,
                }
            }],
            yAxes: [{
              ticks: {
                min: 0,
              }
            }],
            gridLines: [{
              color: 'rgba(255, 255, 255, 0.2)',
            }]
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          position: 'nearest',
        },
        legend: {
          display: false,
        },

    }
});
