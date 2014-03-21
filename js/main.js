$(document).ready(function(){
	
	$("button").click(function(){
    	$("p").hide("slow",function(){
      alert("The paragraph is now hidden");
    	});
  	});

	$("tr:even").css("background-color","gray");

});
