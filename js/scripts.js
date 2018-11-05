$(function(){
  console.log('scripts loaded');


$('#hard-coded-table').DataTable();

$('#ajax-table').DataTable({
    "ajax": "/js/nations.txt",
    "columns": [
      {"data": "name"},
      {"data":"Area"},
      {"data":"Population"},
      {"data":"Airports"}
    ],
    "columnDefs":[{
       "targets":[0, 3],
       "createdCell": function(td, cellData, rowData, row, col){
         if(cellData > 400){
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


});
