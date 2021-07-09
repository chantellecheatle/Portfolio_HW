$(document).ready(function(){
	$(".primary-button-resume").on({
	  mouseenter: function(){
		$(this).css("background-color", "white");
	  },  
	  mouseleave: function(){
		$(this).css("background-color", "lightblue");
	  }, 
	  click: function(){
		$(this).css("background-color", "#e29578");
	  }  
	});
  });