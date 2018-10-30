$(document).ready(function(){
	$("#divProgress").circularloader({
		backgroundColor: "#ffffff",//background colour of inner circle
		radius: 30,//radius of circle
        progressBarBackground: "rgb(157,160,200)",//background colour of circular progress Bar
        progressBarColor: "#484d91",//colour of circular progress bar
        progressBarWidth: 7,//progress bar width
        showText: false,//show progress text or not
    });
	$("#divProgress").circularloader({
		progressPercent: 70
	});
	$('.now').css("width", function(){
	return $(this).attr("data")
	})	
});
$( function() { 
	var textinput = $( "#assesmentScore" ).val(); 
	var myslider = $( "#slider" ).slider({ 
	min: 1, 
	max: 10, 
	range: "min", 
	value: $("#assesmentScore").val(), 
	slide: function( event, ui ) { 
	$("#assesmentScore").val(ui.value); 
	} 
	}); 
	$( "#assesmentScore" ).on( "keyup", function() { 
	myslider.slider( "value", this.value ); 
	}); 
	
	}); 
