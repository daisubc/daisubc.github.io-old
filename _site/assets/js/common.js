$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});

function collapseNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
    var selectedClass = "";
    $(".fil-cat-pub").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
    $("#pub").fadeTo(100, 0.1);
    $("#pub > div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#pub").fadeTo(300, 1);
    }, 300);
    });
});