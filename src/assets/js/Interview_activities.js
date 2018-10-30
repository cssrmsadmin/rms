$(document).ready(function(){
	
	$('#total_schedule').text(18);
	$('#total_completed').text(15);
	var activity_count = 1, activity_count1=1;
	var total_perpage = 4;
	var lev =1;
	var candidate_details = {
		name : ["Rahul Sharma","John smith KV","Rahul Sharma","John smith KV","Rahul Sharma","Rahul Sharma","John smith KV","Rahul Sharma","John smith KV","Rahul Sharma","Rahul Sharma","John smith KV","Rahul Sharma","John smith KV","Rahul Sharma"],
		email : ["rahulsharma@gmail.com","Johnsmith.kv@gmail.com","rahulsharma@gmail.com","Johnsmith.kv@gmail.com","rahulsharma@gmail.com",
		"Johnsmith.kv@gmail.com","rahulsharma@gmail.com","Johnsmith.kv@gmail.com","rahulsharma@gmail.com","Johnsmith.kv@gmail.com",
		"rahulsharma@gmail.com","Johnsmith.kv@gmail.com","rahulsharma@gmail.com","Johnsmith.kv@gmail.com","rahulsharma@gmail.com"],
		experience : ["5-8","0-2","1-6","2-10","5-8","5-8","0-2","1-6","2-10","5-8","5-8","0-2","1-6","2-10","5-8"],
		jd : ["Data Engineers","UX Designer","Business Analyst","Tester","UI Deeveloper","Data Engineers","UX Designer","Business Analyst","Tester","UI Deeveloper","Data Engineers","UX Designer","Business Analyst","Tester","UI Deeveloper"],
		time : "9am to 10am",
		level : ["L1","L2","L0","L2","L1","L1","L2","L0","L2","L1","L1","L2","L0","L2","L1"]
		
	}; 
	var total = candidate_details.name.length;
	 for(var i=0;i<total;i++){
		$('#mytable').append('<tr class="page activity_page_'+activity_count+'"><td><div class="Candidate_name">'+candidate_details.name[i]+
		'<span>Today</span></div><div class="email_id hidden-xs "><img src="../images/yettoschedule/email_icon.png">'+candidate_details.email[i]+
		'</div></td><td class="hidden-sm hidden-xs"><img src="../images/yettoschedule/pro_icon.png"></td><td><div class="experience">'+candidate_details.experience[i]+
		'</div></td><td><div class="jd_details">'+candidate_details.jd[i]+
		'</div></td><td class="hidden-sm hidden-xs"><div class="schedule_time">'+candidate_details.time+
		'</div></td><td><span class="'+candidate_details.level[i]+' level_display">'+candidate_details.level[i]+
		'</span></td><td><button class="view_add_feedback">View & Add feedback</button></td></tr>');
		if(activity_count == 1){ 
			$('.activity_page_1').addClass('page-active');
		}
		if(lev%total_perpage == 0){
			++activity_count;
		}
		lev++;

	}
	 
	for(var i=0;i<total;i++){
		
		$('#activity_name_details').append('<div class="page activity_page_'+activity_count1+' col-sm-6 col-xs-6"><div class="Candidate_name">'+candidate_details.name[i]+
		'<span>Today</span></div><div class="email_id"><img src="../images/yettoschedule/email_icon.png">'+candidate_details.email[i]+
		'</div></div>');
		$('#activity_profile').append('<div class="page activity_page_'+activity_count1+' col-sm-6 col-xs-6"><img src="../images/yettoschedule/pro_icon.png"></div>');
		$('#activity_experience').append('<div class="page activity_page_'+activity_count1+' experience col-sm-6 col-xs-6">'+candidate_details.experience[i]+'</div>');
		$('#activity_JD_name').append('<div class="page activity_page_'+activity_count1+' col-sm-6 col-xs-6">'+candidate_details.jd[i]+'</div>');
		$('#activity_time_slot').append('<div class="page activity_page_'+activity_count1+' col-sm-6 col-xs-6">'+candidate_details.time+'</div>');
		$('#activity_interview_stage').append('<div class="page activity_page_'+activity_count1+' col-sm-6 col-xs-6"><span class="'+candidate_details.level[i]+
		' level_display">'+candidate_details.level[i]+'</span></div>');
		if(activity_count1 == 1){ 
			$('.activity_page_1').addClass('page-active');
		}	
		++activity_count1;		
	} 
	 
	 
	 
	 
		
	$('.activity_next').bind('mousedown',function(){
		$('.activity_prev,.activity_first').removeClass('disabled');
		$('.activity_prev,.activity_first').addClass('active');
		var class_cal = $('.page-active').attr('class').split(' ')[1];
		var id_cal = class_cal.split('_')[2]; 
		$('.page-active').removeClass('page-active');
		$('.activity_page_'+(++id_cal)).addClass('page-active');  
		if($('.activity_mobile_view').is(':visible')){
			if(id_cal >= total){
				$('.activity_next,.activity_last').addClass('disabled');
			}
		}
		else{
			if($('.activity_page_'+Math.round(total/total_perpage)).hasClass('page-active')){
				$('.activity_next,.activity_last').addClass('disabled');
			} 
		}
	});

	$('.activity_prev').bind('mousedown',function(){
		$('.activity_next,.activity_last').removeClass('disabled');
		$('.activity_next,.activity_last').addClass('active');
		var class_cal = $('.page-active').attr('class').split(' ')[1];
		var id_cal = class_cal.split('_')[2];
		$('.page-active').removeClass('page-active');
		$('.activity_page_'+(--id_cal)).addClass('page-active'); 
		if(id_cal == 1){
			$('.activity_prev,.activity_first').addClass('disabled');
		}
	});
	
	$('.activity_first').bind('mousedown',function(){
		$('.page-active').removeClass('page-active');
		$('.activity_page_1').addClass('page-active'); 
		$('.activity_prev,.activity_first').addClass('disabled');
		$('.activity_last,.activity_next').removeClass('disabled');
		$('.activity_last,.activity_next').addClass('active');
	});
	
	$('.activity_last').bind('mousedown',function(){
		$('.page-active').removeClass('page-active');
		if($('.activity_mobile_view').is(':visible')){
			$('.activity_page_'+total).addClass('page-active'); 	
		}else{
			$('.activity_page_'+Math.round(total/total_perpage)).addClass('page-active'); 	
		}
		$('.activity_next,.activity_last').addClass('disabled');
		$('.activity_first,.activity_prev').removeClass('disabled');
		$('.activity_first,.activity_prev').addClass('active');
	}); 
	$('.view_add_feedback').bind('mousedown',function(){
		window.location = '../Interviewer_pages/Addfeedback.html';
	});
	
	
	
});