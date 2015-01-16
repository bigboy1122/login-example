jQuery(function(window,$){
    console.log('test outside document ready');

    $().ready(function(){
       console.log('test inside document ready');
    });

}(window,jQuery));