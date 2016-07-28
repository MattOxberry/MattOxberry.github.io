$(document).ready(function () {

    $(".git-rotate").hover
    (
      //function () { $(this).css({'color': 'red'}).css({'transition': '0s'});},
      function () {
        $(this).css({'color': 'red'});
         $(this).css({'transform': 'rotate(90deg)'}).css({'transition': '1s'});
       },

      function () {  $(this).css({'color': 'black'}).css({'transform': 'none'}).css({'transition': '1s'});}
    )

});
