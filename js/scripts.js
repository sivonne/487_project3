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

    // Make codes uppercase to match the map data
    /*$.each(data, function () {
        this.code = this.code.toUpperCase();
    });
*/
    // Instantiate the map
    Highcharts.mapChart('container', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 1
        },

        title: {
            text: 'Asian-American Studies Programs by State'
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

            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Asian-American Studies Programs by State',
            tooltip: {
                pointFormat: '{point.code}: {point.uni-name}'
            }
        }]
    });
});

});
