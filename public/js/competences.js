$(document).ready(function () {

 function maitreLevel (){
    $('span.maitre').each(function(){
    $('span.maitre').addClass('animated fadeInLeft maitreLevel');
  });
 }

 function maitriseLevel (){
   $('span.maitrise').each(function(){
    $('span.maitrise').addClass('animated fadeInLeft maitriseLevel');
  });
 }

 function apprentiLevel (){
   $('span.apprenti').each(function(){
    $('span.apprenti').addClass('animated fadeInLeft apprentiLevel');
  });
 }

 function debutantLevel (){
   $('span.debutant').each(function(){
    $('span.debutant').addClass('animated fadeInLeft debutantLevel');
  });
 }


 var iWindowsSize = $(window).width();

 if (iWindowsSize  > 768){
  $('.competence_item_bl  span').css('width', '0');
  $('.competence_item_bl').on('mouseover', function(){
    maitreLevel();
    maitriseLevel();
    apprentiLevel ();
    debutantLevel();
  });
}

});
