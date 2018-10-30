function myFunction() {
   var firstName=document.getElementById('first_name').value;
   var lastName=document.getElementById('last_name').value;
    var emailId=document.getElementById('email_id').value;
   var mobileNo=document.getElementById('mobile_no').value;
   if(firstName == ""){
    document.getElementById("first_name_error").innerHTML = "**Please Enter the First Name";
	document.getElementById("first_name_error").style.color = "red";
	return false;
	}
	else if(lastName==""){
	 document.getElementById("last_name_error").innerHTML = "**Please Enter the Last Name";	
	 document.getElementById("last_name_error").style.color = "red";
	 document.getElementById("first_name_error").style.display = "none";
	 return false;
	}
	else if(emailId==""){
	 document.getElementById("email_id_error").innerHTML = "**Please Enter the Last Name";	
	 document.getElementById("email_id_error").style.color = "red";
	 document.getElementById("last_name_error").style.display = "none";
	 return false;
	}
	else if(mobileNo==""){
	 document.getElementById("mobile_no_error").innerHTML = "**Please Enter the Last Name";	
	 document.getElementById("mobile_no_error").style.color = "red";
	 document.getElementById("email_id_error").style.display = "none";
	 return false;
	}
	else{
		return true;
	    }
}
function submit(){
	var value = myFunction();
	if(value == true){
		window.location = 'TA_dashboard.html';
	}
}
function submitAdd(){
	var value = myFunction();
	if(value == true){
		$('#first_name,#last_name,#email_id,#mobile_no').val('');
	}
}