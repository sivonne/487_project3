$(function(){
  console.log('scripts loaded');


/*
$('#ajax-table').DataTable({
    "ajax": {
      "url": "/txt/grads.txt",
      "dataSrc": ''
  },
    "columns": [
      {"data": "Year"},
      {"data":"University Name"},
      {"data":"Grads Total"}
    ],
    "columnDefs":[{
       "targets":[0, 3],
       "createdCell": function(td, cellData, rowData, row, col){
         if(cellData > 5){
           $(td).css('color', 'red');
         }//close if statement
         $(td).on({
           mouseenter: function(){
             var txt = $(this).text();
             $('#' + txt).toggleClass('hidden');
           },
           mouseleave: function(){
             var txt = $(this).text();
             $('#' + txt).toggleClass('hidden');
           }

         });//close on method



       }//close createdCell

    }]//close columnDefs



});//close dataTable

*/




//High Maps JS
$.getJSON('js/unisAcrossCountry.json', function (data) {

// Instantiate the map
var myChart = Highcharts.mapChart('container', {
  //Initialize variables

 chart: {
     map: 'countries/us/us-all',
     borderWidth: 1
 },

 title: {
     text: 'AASPs by State'
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
     name: 'University Information',
     tooltip: {
         pointFormat: '{point.uni-name}: {point.awards}'
     }
 }]

});
});
});
