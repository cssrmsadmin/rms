$(document).ready(function(){
			$(".progress-circleBar").loading();
			$('input').on('click', function () {
				 $(".progress-circleBar").loading();
			});
var progressCompMsg = $(".progress-circleBar").attr('data-percent');
			if(progressCompMsg < 50){
		     $(".warning-msg").show();
	   	};
		  if(progressCompMsg > 49){
		     $(".success-msg").css("display", "block");
	   	};

		}); //End document.ready