$(document).ready(function(){
	var skillset = {
		skills : [".net","java","UI","UI/UX","SQL"]
	}; 
	for(var i=0;i<(skillset.skills.length);i++){
		$('#browsers').append('<option value="'+skillset.skills[i]+'">');
	}
	$('#add_icon_image').bind('mousedown',function(){
		$('.display_skills_added').append('<div class="selected_skills"><span>'+$('#skill_sets').val()+'</span><span class="skill_close">X</span></div>');
		$('#skill_sets').val('');
	});
	 $('.display_skills_added').on("click",".skill_close", function(e){ 
        e.preventDefault();
		$(this).parent('.selected_skills').remove(); //remove inout field
		x--; //inout field decrement
    })
	 
});
function myFun(){
	var input = document.getElementById( 'file-upload' );
    var infoArea = document.getElementById( 'file-upload-filename' );
    input.addEventListener( 'change', showFileName );
       function showFileName( event ) {
		   var input = event.srcElement;
		  var fileName = input.files[0].name;
	      infoArea.textContent = 'File name: ' + fileName;
                 }
         }
function myFunction() {
   var jdId=document.getElementById('jd_id').value;
   var jdName=document.getElementById('jd_name').value;
   var e = document.getElementById("years_exp");
   var perExp = e.options[e.selectedIndex].value;
   var buName=document.getElementById('bu_name').value;
   var role=document.getElementById('designation').value;
   var p = document.getElementById("no_of_position");
   var noOfPositions = e.options[p.selectedIndex].value;
   var l1PanelistOne=document.getElementById('l1_panelist_one').value;
   var l2PanelistOne=document.getElementById('l2_panelist_one').value;
   var l1PanelistTwo=document.getElementById('l1_panelist_two').value;
   var l2PanelistTwo=document.getElementById('l2_panelist_two').value;
   

   if(jdId == ""){
    document.getElementById("jd_id_error").innerHTML = "**Please Enter the JD ID number";
	document.getElementById("jd_id_error").style.color = "red";
	return false;
	}
	else if(jdName==""){
	 document.getElementById("jd_name_error").innerHTML = "**Please Enter the JD name";	
	 document.getElementById("jd_name_error").style.color = "red";
	 document.getElementById("jd_id_error").style.display = "none";
	 return false;
		
	}
		
	else if(perExp==0)
	{
	document.getElementById("years_exp_error").innerHTML = "**Please select the Exp";
	document.getElementById("years_exp_error").style.color="red"
	document.getElementById("jd_name_error").style.display = "none";
	return false;	
	}
	else if(buName==""){
	 document.getElementById("bu_name_error").innerHTML = "**Please Enter the BU Name";	
	 document.getElementById("bu_name_error").style.color = "red";
	 document.getElementById("years_exp_error").style.display = "none";
	 return false;
		
	}
	else if(role==""){
	 document.getElementById("designation_error").innerHTML = "**Please Enter the Designation/Role";	
	 document.getElementById("designation_error").style.color = "red";
	 document.getElementById("bu_name_error").style.display = "none";
	 return false;
		
	}
	else if(noOfPositions==0)
	{
	document.getElementById("no_of_position_error").innerHTML = "**Please select No. of Positions";
	document.getElementById("no_of_position_error").style.color="red"
	document.getElementById("designation_error").style.display = "none";
	return false;	
	}
	else if(l1PanelistOne==""){
	document.getElementById("l1_panelist_one_error").innerHTML = "**Please Enter the L1 Panelist One Name ";	
	document.getElementById("l1_panelist_one_error").style.color = "red";
	document.getElementById("no_of_position_error").style.display = "none";
	 return false;	
	}
	else if(l2PanelistOne==""){
	document.getElementById("l2_panelist_one_error").innerHTML = "**Please Enter the L2 Panelist One Name";	
	document.getElementById("l2_panelist_one_error").style.color = "red";
	document.getElementById("l1_panelist_one_error").style.display = "none";
	 return false;	
	}
	else if(l1PanelistTwo==""){
	document.getElementById("l1_panelist_two_error").innerHTML = "**Please Enter the L1 Panelist One Name";	
	document.getElementById("l1_panelist_two_error").style.color = "red";
	document.getElementById("l2_panelist_one_error").style.display = "none";
	 return false;	
	}
	else if(l2PanelistTwo==""){
	document.getElementById("l2_panelist_two_error").innerHTML = "**Please Enter the L2 Panelist Two Name";	
	document.getElementById("l2_panelist_two_error").style.color = "red";
	document.getElementById("l1_panelist_two_error").style.display = "none";
	 return false;	
	}
	
	else{
		
			window.location = 'TA_dashboard.html';
	}
	
	
}