$(function(){
  console.log('scripts loaded');
  //THE BASIC HIGHCHART PASTE JOB WITH HARD-CODED ARRAY


  $('#basic-table').DataTable();

   // var myChart = Highcharts.chart('#basic-table', {
   //        chart: {
   //            type: 'bar'
   //        },
   //        title: {
   //            text: 'Fruit Consumption'
   //        },
   //        subtitle:{
   //          text: 'Fucking Love Fruit'
   //        },
   //        xAxis: {
   //            categories: ['Apples', 'Bananas', 'Oranges']//NOTICE THIS IS AN ARRAY
   //        },
   //        yAxis: {
   //            title: {
   //                text: 'Fruit eaten'
   //            }
   //        },
   //        series: [{
   //            name: 'Jane',//DELETE THIS AND SEE HOW THE CHART CHANGES
   //            data: [1, 0, 4]//HOVER OVER THE BARS TO SEE WHAT THESE NUMBERS REPRESENT
   //        }, {
   //            name: 'John',
   //            data: [5, 7, 3]
   //        }]//ADD ANOTHER OBJECT AND SEE HOW IT CHANGES
   //    });
// $('#ajax-table').DataTable({
//     "ajax": {
//       "url": "/txt/grads.txt",
//       "dataSrc": ''
//   },
//     "columns": [
//       {"data": "Year"},
//       {"data":"University Name"},
//       {"data":"Grads Total"}
//     ],
//     "columnDefs":[{
//        "targets":[0, 3],
//        "createdCell": function(td, cellData, rowData, row, col){
//          if(cellData > 5){
//            $(td).css('color', 'red');
//          }//close if statement
//          $(td).on({
//            mouseenter: function(){
//              var txt = $(this).text();
//              $('#' + txt).toggleClass('hidden');
//            },
//            mouseleave: function(){
//              var txt = $(this).text();
//              $('#' + txt).toggleClass('hidden');
//            }
//
//          });//close on method
//
//
//
//        }//close createdCell
//
//     }]//close columnDefs
//
//
//
// });//close dataTable
//



//High Maps JS
$.getJSON('stateunis.json', function (data) {
   // Make codes uppercase to match the map data
      $.each(data, function () {
          this.code = this.code.toUpperCase();
      });
      // Instantiate the map

Highcharts.mapChart('container', {
  //Initialize variables
 chart: {
     map: 'countries/us/us-all',
     borderWidth: 1
 },
 title: {
     text: 'Asian-American Studies by State'
 },

 exporting: {
     sourceWidth: 600,
     sourceHeight: 500
 },

 legend: {
     layout: 'horizontal',
     borderWidth: 0,
     backgroundColor: 'rgba(255,255,255,0.85)',
     floating: true,
     verticalAlign: 'top',
     y: 25
 },

 mapNavigation: {
     enabled: true
 },

 colorAxis: {
     min: 1,
     type: 'logarithmic',
     minColor: '#EEEEFF',
     maxColor: '#000022',
     stops: [
       [0, '#EFEFFF'],
       [0.67, '#4444FF'],
       [1, '#000022']
     ]
 },

 series: [{
     animation: {
         duration: 1000
     },
     data: data,
     joinBy: ['postal-code', 'code'],
     dataLabels: {
         enabled: true,
         color: '#FFFFFF',
         format: '{point.code}'
     },
     name: 'Universities Offering Asian American Majors',
     tooltip: {
         pointFormat: '{point.code}: {point.university}'
     }
 }]

});
});


var url = 'js/demographics-reformatted.json';
var demographics = '';

$.ajax({
type:'GET',
url:url,
data:demographics,
async: true,
dataType:'json',
success:function(demographics){
  console.log(demographics);

  var chart = new Taucharts.Chart({
              guide: {
                x: {label:'Years'},  // custom label for X axis
                y: {label:'Percentage of Population that is Asian or Pacific Islander'},    // custom label for Y axis
                padding: {b:40,l:40,t:10,r:10},   // chart paddings

              },
              data: demographics,
              type: 'scatterplot',
              x: 'Year',
              y: 'Percent Asian and Pacific Islander',

              color: 'Year',
              size:'Percent Asian and Pacific Islander',
              plugins:[
                Taucharts.api.plugins.get('tooltip')({
                fields:[
                  "Year",
                "Two or More Races",
                "White",
                "Black",
                "Percent Asian and Pacific Islander",
                "Hispanic Origin (any race)",
                "Other",
                "Am. Indian, Eskimo, or Aleut"]
              }),
              Taucharts.api.plugins.get('legend')()
            ]

          });
          chart.renderTo('#results');
        }
        });
});

//TauCharts

// var url = 'js/demographics-reformatted.json';
// var race = '';
// var year = '';
// var percent = '';
//
// $.ajax({
// type:'GET',
// url:url,
// data:percent,
// async: true,
// dataType:'json',
// success:function(percent){
//   console.log(percent);
// var chart = new Taucharts.Chart({
//
//     type: 'stacked-bar',
//     y: "year",
//     x: "race",
//     color: 'stage',
//     data:percent,
//
//
//     /*plugins:[Taucharts.api.plugins.get('tooltip')({
//                     fields:['name', 'Infant Mortality Rate', 'Life Expectancy', 'Per Capita GDP', 'Obesity Rate', 'Unemployment Rate']
//                   }),
//                   Taucharts.api.plugins.get('legend')()
//                 ]*/
//
//
//
// });
//
// chart.renderTo('#bar');
// }
// });
