$(document).ready(function(){
	/* $("#includedContent").load("pages/sigin.html"); */
		
	$('.signin_btn').bind('mousedown',function(){
		var username = $('#username').val();
		var password = $('#password').val();
		var regex = new RegExp("^[a-zA-Z]+$");
		if(username === '' && password === ''){
			$('.username_error').text('* Username cannot be empty');
			$('.password_error').text('* Password cannot be empty');
		}else if(!regex.test(username) && password === ''){
			$('.username_error').text('* Username should contain only characters');
			$('.password_error').text('* Password cannot be empty');
			$('#username').val("");
		}else if(password === ''){
			$('.password_error').text('* Password cannot be empty');
		}else if(username === ''){
			$('.username_error').text('* Username cannot be empty');
		}else if(!regex.test(username)){
			$('.username_error').text('* Username should contain only characters');
			$('#username').val("");
		}else{
			
			window.location = 'TA_pages/TA_dashboard.html';
		}
		$('#password').val("");
		
		
	});
	$( "#username,#password" ).focus(function() {
		$('.username_error').text('');
		$('.password_error').text('');
	});

	
	
	
});