var vpPlayer1Scores = [];
var vpPlayer2Scores = [];
var vpPlayer3Scores = [];
var vpPlayer4Scores = [];
var vpPlayer5Scores = [];
var vpPlayer6Scores = [];
var vpPlayer7Scores = [];
var vpPlayer8Scores = [];


$(function() {
  $('#victory-track-tab').click(function() {
    vpSetup();
  });


  $('#vp-up-1').click(function(){
   addVP(1);
  })
  $('#vp-up-2').click(function(){
   addVP(2);
  })
  $('#vp-up-3').click(function(){
   addVP(3);
  })
  $('#vp-up-4').click(function(){
   addVP(4);
  })
  $('#vp-up-5').click(function(){
   addVP(5);
  })
  $('#vp-up-6').click(function(){
   addVP(6);
  })
  $('#vp-up-7').click(function(){
   addVP(7);
  })
  $('#vp-up-8').click(function(){
   addVP(8);
  })
  $('#vp-down-1').click(function(){
   loseVP(1);
  })
  $('#vp-down-2').click(function(){
   loseVP(2);
  })
  $('#vp-down-3').click(function(){
   loseVP(3);
  })
  $('#vp-down-4').click(function(){
   loseVP(4);
  })
  $('#vp-down-5').click(function(){
   loseVP(5);
  })
  $('#vp-down-6').click(function(){
   loseVP(6);
  })
  $('#vp-down-7').click(function(){
   loseVP(7);
  })
  $('#vp-down-8').click(function(){
   loseVP(8);
  })

});

function addVP(player) {
  var value = parseInt($('#vp-score-'+player).text())+1;
  $('#vp-score-'+player).text(value);
}

function loseVP(player) {
  var value = parseInt($('#vp-score-'+player).text())-1;
  $('#vp-score-'+player).text(value);
}



$(window).load(function(){
  setTimeout(function(){
    buildChartOptions();
    buildChart();
  },1000);

 vpSetup();

});


var buildJSONPlayer1 = {};
var buildJSONPlayer2 = {};
var buildJSONPlayer3 = {};
var buildJSONPlayer4 = {};
var buildJSONPlayer5 = {};
var buildJSONPlayer6 = {};
var buildJSONPlayer7 = {};
var buildJSONPlayer8 = {};

function buildChartOptions() {
  /**
 * Sand-Signika theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
   href: 'http://fonts.googleapis.com/css?family=Signika:400,700',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
   proceed.call(this);
   this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
});


var playerColors = [$('#colorselector_player_1').val(), $('#colorselector_player_2').val(), $('#colorselector_player_3').val(), $('#colorselector_player_4').val(), $('#colorselector_player_5').val(), $('#colorselector_player_6').val(), $('#colorselector_player_7').val(), $('#colorselector_player_8').val()]
console.log(playerColors);

//originial colors ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"]
Highcharts.theme = {
   colors: playerColors,
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Signika, serif"
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '16px',
         fontWeight: 'bold'
      }
   },
   subtitle: {
      style: {
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },

   // General
   background2: '#E0E0E8'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
}

function setVPData(data) {

  if (data[0]) {


    vpPlayer1Scores = data[0];
    vpPlayer2Scores = data[1];
    vpPlayer3Scores = data[2];
    vpPlayer4Scores = data[3];
    vpPlayer5Scores = data[4];
    vpPlayer6Scores = data[5];
    vpPlayer7Scores = data[6];
    vpPlayer8Scores = data[7];

    
    $('#vp-score-1').text(vpPlayer1Scores[(vpPlayer1Scores.length)-1]);
    $('#vp-score-2').text(vpPlayer2Scores[(vpPlayer2Scores.length)-1]);
    $('#vp-score-3').text(vpPlayer3Scores[(vpPlayer3Scores.length)-1]);
    $('#vp-score-4').text(vpPlayer4Scores[(vpPlayer4Scores.length)-1]);
    $('#vp-score-5').text(vpPlayer5Scores[(vpPlayer5Scores.length)-1]);
    $('#vp-score-6').text(vpPlayer6Scores[(vpPlayer6Scores.length)-1]);
    $('#vp-score-7').text(vpPlayer7Scores[(vpPlayer7Scores.length)-1]);
    $('#vp-score-8').text(vpPlayer8Scores[(vpPlayer8Scores.length)-1]);
  }

}



function buildChart(){
  var p1dataArray =[]; //[0,0],[1,1],[2,2],[3,3],[4,4],[5,5]
  var p2dataArray =[];
  var p3dataArray =[];
  var p4dataArray =[];
  var p5dataArray =[];
  var p6dataArray =[];
  var p7dataArray =[];
  var p8dataArray =[];


  for (i=0; i<vpPlayer1Scores.length; i++) {
    p1dataArray.push([i,parseInt(vpPlayer1Scores[i])]);
  }

  for (i=0; i<vpPlayer2Scores.length; i++) {
    p2dataArray.push([i,parseInt(vpPlayer2Scores[i])]);
  }

  for (i=0; i<vpPlayer3Scores.length; i++) {
    p3dataArray.push([i,parseInt(vpPlayer3Scores[i])]);
  }

  for (i=0; i<vpPlayer4Scores.length; i++) {
    p4dataArray.push([i,parseInt(vpPlayer4Scores[i])]);
  }

  for (i=0; i<vpPlayer5Scores.length; i++) {
    p5dataArray.push([i,parseInt(vpPlayer5Scores[i])]);
  }

  for (i=0; i<vpPlayer6Scores.length; i++) {
    p6dataArray.push([i,parseInt(vpPlayer6Scores[i])]);
  }

  for (i=0; i<vpPlayer7Scores.length; i++) {
    p7dataArray.push([i,parseInt(vpPlayer7Scores[i])]);
  }

  for (i=0; i<vpPlayer8Scores.length; i++) {
    p8dataArray.push([i,parseInt(vpPlayer8Scores[i])]);
  }


  buildJSONPlayer1 = {
            name: $('#player_name_1').val(),
            data: p1dataArray,
            type: 'line',
            step: true,
            lineWidth: 8
        }

  buildJSONPlayer2 = {
            name: $('#player_name_2').val(),
            data: p2dataArray,
            type: 'line',
            step: true,
            lineWidth: 7
        }

  buildJSONPlayer3 = {
            name: $('#player_name_3').val(),
            data: p3dataArray,
            type: 'line',
            step: true,
            lineWidth: 6
        }

if (counter <= 4) {
  buildJSONPlayer4 = {
            name: $('#player_name_4').val(),
            data: p4dataArray,
            type: 'line',
            step: true,
            lineWidth: 5
        }
}
if (counter <= 5) {
  buildJSONPlayer5 = {
            name: $('#player_name_5').val(),
            data: p5dataArray,
            type: 'line',
            step: true,
            lineWidth: 4
        }
}

if (counter <= 6) {
  buildJSONPlayer6 = {
            name: $('#player_name_6').val(),
            data: p6dataArray,
            type: 'line',
            step: true,
            lineWidth: 4
        }
}

if (counter <= 7) {
  buildJSONPlayer7 = {
            name: $('#player_name_7').val(),
            data: p7dataArray,
            type: 'line',
            step: true,
            lineWidth: 4
        }
}

if (counter <= 8) {
  buildJSONPlayer8 = {
            name: $('#player_name_8').val(),
            data: p8dataArray,
            type: 'line',
            step: true,
            lineWidth: 4
        }
}

if (counter == 3) {
  var assembledJSON = [buildJSONPlayer1, buildJSONPlayer2, buildJSONPlayer3];
} else if (counter == 4) {
  var assembledJSON = [buildJSONPlayer1, buildJSONPlayer2, buildJSONPlayer3, buildJSONPlayer4];
} else if (counter == 5) {
  var assembledJSON = [buildJSONPlayer1, buildJSONPlayer2, buildJSONPlayer3, buildJSONPlayer4, buildJSONPlayer5];
} else if (counter == 6) {
  var assembledJSON = [buildJSONPlayer1, buildJSONPlayer2, buildJSONPlayer3, buildJSONPlayer4, buildJSONPlayer5, buildJSONPlayer6];
} else if (counter == 7) {
  var assembledJSON = [buildJSONPlayer1, buildJSONPlayer2, buildJSONPlayer3, buildJSONPlayer4, buildJSONPlayer5, buildJSONPlayer6, buildJSONPlayer7];
} else if (counter == 8) {
  var assembledJSON = [buildJSONPlayer1, buildJSONPlayer2, buildJSONPlayer3, buildJSONPlayer4, buildJSONPlayer5, buildJSONPlayer6, buildJSONPlayer7, buildJSONPlayer8];
}

  options = {
     chart: {
          renderTo: 'container',
          zoomType: 'x'
      },
      title: {
          text: 'Victory Points per Player',
          x: -20 //center
      },
      subtitle: {
            text: 'Click and drag to zoom',
            x: -20
        },
      xAxis: {
          min: 0,
          max: 14,
          allowDecimals: false,
          title: {
            text: 'Rounds',
            style: {
              fontSize: '20px'
            }
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
          
          type: 'linear'
      },
      yAxis: {
          min: 0,
          max: 10,
          showLastLabel: true,
          title: {
            text: 'Victory Points',
            style: {
              fontSize: '20px'
            }
          },
      },
      credits: {
          enabled: false
      },
      tooltip: {
          headerFormat: 'Round: {point.key}<br>',
          valueSuffix: ' VP'
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: assembledJSON
    };

  highchart();

  $('#chart-toggle').click(function(){
    if ($('#chart-toggle').text() == 'Go to: Spline') {
      for (i=0; i<counter; i++) {
        chart.series[i].update({
                type: 'spline'
            });
      }
      $('#chart-toggle').text('Go to: Column');
    } else if($('#chart-toggle').text() == 'Go to: Step') {
      for (i=0; i<counter; i++) {
        chart.series[i].update({
                type: 'line'
            });
      }
      $('#chart-toggle').text('Go to: Spline');
    } else {
      for (i=0; i<counter; i++) {
        chart.series[i].update({
                type: 'column'
            });
      }
      $('#chart-toggle').text('Go to: Step');
    }

  });

}


function vpSetup(){
  for (i=1; i<=8; i++) {
    if ($('#player_name_'+i).val()) {
      $('#vp-tracker-player-'+i).show();
      $('#vp-name-'+i).text($('#player_name_'+i).val());
      $('#vp-race-'+i).text($('#player_race_'+i).val());
        if ($('#player_race_'+i).val() == "The Sardakk Norr") {
           $('#vp-race-'+i).text("The Sardakk N'orr");
        }
    }
  }
}

var options = {}

function highchart() {
   chart = new Highcharts.Chart(options);
}