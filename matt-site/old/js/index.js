$(document).ready(function () {

    $(".git-rotate").hover
    (
      //function () { $(this).css({'color': 'red'}).css({'transition': '0s'});},
      function () {
        $(this).css({'color': '#4078c0'});
         $(this).css({'transform': 'rotate(45deg)'}).css({'transition': '1s'});
       },

      function () {  $(this).css({'color': 'black'}).css({'transform': 'none'}).css({'transition': '1s'});}
    )

    $(".linkin-rotate").hover
    (
      function(){
        $(this).css({'color': '#0077B5'});
        $(this).css({'transform': 'rotate(45deg)'}).css({'transition': '1s'});
      },
      function(){$(this).css({'color': 'black'}).css({'transform': 'none'}).css({'transition': '1s'});}
    )
});
