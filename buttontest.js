$(function() {
   
    $('tab-panels .tabs li').on('click', function() {

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');
            alert(panelToShow);
        //hide current panel

        //show new panel


    });





/*  buttontest JQuery tutorial   
   var content="My New Awesome Content"
//   
//   $('.panel-button').on('click', function() {
//      var panelId = $(this).attr('data-panelid');
//      $('#'+panelId).toggle(); 
//      $('#'+panelId+' .panel-body').html(content); 
//   });
    
//    $(function() {
//        $('li').on('click', function() {
//          $(this).next().remove();  
//        });
//    });
*/

});