$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#members").fadeTo(100, 0.1);
		$("#members a").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#members").fadeTo(300, 1);
    }, 300); 
	});
});

$(function() {
		var selectedClass = "";
		$(".fil-cat-alumni").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#alumni").fadeTo(100, 0.1);
		$("#alumni a").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#alumni").fadeTo(300, 1);
    }, 300); 
	});
});