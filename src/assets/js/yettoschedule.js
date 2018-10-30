$(document).ready(function(){
	
	var count = 1, count1=1;
	var total_perpage = 4;
	var lev =1;
	var feedback_val;
	
	var candidate_details = {
		name : ["John smith","Rahul Sharma","John smith","Rahul Sharma","John smith","Rahul Sharma","John smith","Rahul Sharma","John smith","Rahul Sharma","John smith","Rahul Sharma",
		"John smith","Rahul Sharma","John smith","Rahul Sharma","John smith","Rahul Sharma","John smith","Rahul Sharma"],
		email : ["johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com",
		"johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com","johnsmith.kv@gmail.com","rahulsharma@gmail.com",
		"johnsmith.kv@gmail.com","rahulsharma@gmail.com"],
		phone : [9876543210,9764318521,9876543210,9764318521,9876543210,9764318521,9876543210,9764318521,9876543210,9764318521,9876543210,9764318521,9876543210,9764318521,
		9876543210,9764318521,9876543210,9764318521,9876543210,9764318521],
		experience : ['5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6','5-8','2-6'],
		level : ["L0","L1","L2","L0","L1","L2","L0","L1","L2","L0","L1","L2","L0","L1","L2","L0","L1","L2","L2","L0"],
		feedback : ["Schedule Online Test","In Progress","Rejected","Selected","Schedule Technical Interview","In Progress","Rejected","Selected","Schedule Online Test","In Progress","Rejected","Selected",
		"Schedule Online Test","In Progress","Rejected","Selected","Schedule Online Test","In Progress","Rejected","Selected"]
	}; 
	var total = candidate_details.name.length;
	for(i=0;i<total;i++){
		
		if(candidate_details.feedback[i].split(' ')[0] == 'Schedule'){
			feedback_val = candidate_details.feedback[i].split(' ')[0];
		}else if(candidate_details.feedback[i].split(' ')[1] == 'Progress'){
			feedback_val = candidate_details.feedback[i].split(' ')[1];
		}else{
			feedback_val = candidate_details.feedback[i];
		}
		
		
		$('#yts_mytable').append('<tr class="page yts_page_'+count+'"><td><div class="yts_Candidate_name">'+candidate_details.name[i]+
		'</div><div class="yts_email_id"><img src="../images/yettoschedule/email_icon.png">'+candidate_details.email[i]+
		'</div></td><td><img src="../images/yettoschedule/mob_icon.png"><div class="yts_call_number">'+candidate_details.phone[i]+
		'</div></td><td><img src="../images/yettoschedule/pro_icon.png"></td><td><div>'+candidate_details.experience[i]+
		'</div></td><td><span class="yts_'+candidate_details.level[i]+
		' yts_level_display yts_total_level">'+candidate_details.level[i]+
		'</span><div class="yts_stage_'+feedback_val+'_btn">'+candidate_details.feedback[i]+
		'</div></td><td class="yts_feedback"><img src="../images/yettoschedule/feed_icon.png"><div class="yts_feedback_text">View feedback</div></td></tr>');
		if(count == 1){ 
			$('.yts_page_1').addClass('page-active');
		}
		if(lev%total_perpage == 0){
			++count;
		}
		lev++;
	}
						
	for(var i=0;i<total;i++){
		
		if(candidate_details.feedback[i].split(' ')[0] == 'Schedule'){
			feedback_val = candidate_details.feedback[i].split(' ')[0];
		}else if(candidate_details.feedback[i].split(' ')[1] == 'Progress'){
			feedback_val = candidate_details.feedback[i].split(' ')[1];
		}else{
			feedback_val = candidate_details.feedback[i];
		}
		
		$('#yts_name_details').append('<div class="page yts_page_'+count1+' col-sm-6 col-xs-6">'+candidate_details.name[i]+
		'<div class="yts_email_id"><span class="yts_mail_img"></span>'+candidate_details.email[i]+
		'</div><div class="yts_phone_id"><span class="yts_call_img"></span>'+candidate_details.phone[i]+
		'</div></div>');		
		$('#yts_profile').append('<div class="page yts_page_'+count1+' col-sm-6 col-xs-6 yts_profile_img"></div>');		
		$('#yts_experience').append('<div class="page yts_page_'+count1+' col-sm-6 col-xs-6">'+candidate_details.experience[i]+'</div>');		
		$('#yts_interview_stage').append('<div class="page yts_page_'+count1+' col-sm-6 col-xs-6"><span class="yts_'+candidate_details.level[i]+
		' yts_level_display yts_total_level">'+candidate_details.level[i]+
		'</span><div class="yts_stage_'+feedback_val+'_btn">'+candidate_details.feedback[i]+
		'</div></div>');		
		
		if(count1 == 1){ 
			$('.yts_page_1').addClass('page-active');
		}	
		++count1;		
	}
	 
	$('.yts_next').bind('mousedown',function(){
		$('.yts_prev,.yts_first').removeClass('disabled');
		$('.yts_prev,.yts_first').addClass('active');
		var class_cal = $('.page-active').attr('class').split(' ')[1];
		var id_cal = class_cal.split('_')[2]; 
		$('.page-active').removeClass('page-active');
		$('.yts_page_'+(++id_cal)).addClass('page-active');  
		if($('.yts_mobile_view').is(':visible')){
			if(id_cal >= total){
				$('.yts_next,.yts_last').addClass('disabled');
			}
		}
		else{
			if($('.yts_page_'+Math.round(total/total_perpage)).hasClass('page-active')){
				$('.yts_next,.yts_last').addClass('disabled');
			} 
		}
	});

	$('.yts_prev').bind('mousedown',function(){
		$('.yts_next,.yts_last').removeClass('disabled');
		$('.yts_next,.yts_last').addClass('active');
		var class_cal = $('.page-active').attr('class').split(' ')[1];
		var id_cal = class_cal.split('_')[2];
		$('.page-active').removeClass('page-active');
		$('.yts_page_'+(--id_cal)).addClass('page-active'); 
		if(id_cal == 1){
			$('.yts_prev,.yts_first').addClass('disabled');
		}
	});
	
	$('.yts_first').bind('mousedown',function(){
		$('.page-active').removeClass('page-active');
		$('.yts_page_1').addClass('page-active'); 
		$('.yts_prev,.yts_first').addClass('disabled');
		$('.yts_last,.yts_next').removeClass('disabled');
		$('.yts_last,.yts_next').addClass('active');
	});
	
	$('.yts_last').bind('mousedown',function(){
		$('.page-active').removeClass('page-active');
		if($('.yts_mobile_view').is(':visible')){
			$('.yts_page_'+total).addClass('page-active'); 	
		}else{
			$('.yts_page_'+Math.round(total/total_perpage)).addClass('page-active'); 	
		}
		$('.yts_next,.yts_last').addClass('disabled');
		$('.yts_first,.yts_prev').removeClass('disabled');
		$('.yts_first,.yts_prev').addClass('active');
	});
	
	
	$('.yts_add_new_hiring').bind('mousedown',function(){
		window.location = 'TA_Addnew_hiring.html';
	});
	
	$('.yts_feedback').bind('mousedown',function(){
		window.location = 'TA_view_feedback.html';
	});
	
});