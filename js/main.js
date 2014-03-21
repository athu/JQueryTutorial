$(document).ready(function(){
	
	$("#btnFadeIn").click(function(){
    	$("#div1").fadeIn();
    	$("#div2").fadeIn("slow");
    	$("#div3").fadeIn(3000);
 	});

 	$("#btnFadeOut").click(function(){
    	$("#div1").fadeOut();
    	$("#div2").fadeOut("slow");
    	$("#div3").fadeOut(3000);
 	});


	$("#btnToggle").click(function(){
    	$("p").toggle("slow");
 	});

	$("#btnDbclick").hover(function(){
		alert('enter mouse');
	},function(){
		alert('leave mouse');
	}
	);

	$("#btnHideThis").click(function(){
    	$(this).toggle();
 	});

	$("#btnHide").click(function(){
		$("#pHide").hide();
	});

	$("#btnShow").click(function(){
		$("#pHide").show();
	});

	$("#btnHideList1").click(function(){
		$("ul li:first").hide("slow");
	});

	$("tr:even").css("background-color","gray");

});
