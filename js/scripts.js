$(function(){
  console.log('scripts loaded');
//Data Tables Plugin
//THE BASIC HIGHCHART PASTE JOB WITH HARD-CODED ARRAY
$('#basic-table').DataTable();

//High Maps JS Plugin
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

//Taucharts JS Plugin
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
