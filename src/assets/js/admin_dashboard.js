$(document).ready(function(){
	
	var admin_count = 1, admin_count1=1;
	var total_perpage = 4;
	var lev =1,i;
	var question_details = {
		practice_name : ["Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics","Data Science","Analytics"],
		skill_set : ["HTML","UX Design","Phyton","Phython",".Net","Java","HTML","UX Design","Phyton","Phython",".Net","Java","HTML","UX Design","Phyton","Phython",".Net","Java",".Net","Java"],
		experience : ['0-2','3-5','0-2','3-5','5-8','9-10','0-2','3-5','0-2','3-5','5-8','9-10','0-2','3-5','0-2','3-5','5-8','9-10','5-8','9-10'],
		type : ["Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz","Statement","Quizz"],
		noofQuest : ["01","11","03","12","29","01","11","03","12","29","01","11","03","12","29","01","11","03","12","29"]
	}; 
	var total = question_details.practice_name.length;
	for(i=0;i<total;i++){
		$('#admin_mytable').append('<tr class="page admin_dash_page_'+admin_count+'"><td>'+question_details.practice_name[i]+
		'</td><td>'+question_details.skill_set[i]+'</td><td>'+question_details.experience[i]+
		'</td><td>'+question_details.type[i]+'</td><td>'+question_details.noofQuest[i]+'</td><td><button class="view_questions_btn">View</button></td></tr>');
		if(admin_count == 1){ 
			$('.admin_dash_page_1').addClass('page-active');
		}
		if(lev%total_perpage == 0){
			++admin_count;
		}
		lev++;
	}
	 
	 for(var i=0;i<total;i++){
		$('#admin_practice_name').append('<div class="page admin_dash_page_'+admin_count1+' col-sm-6 col-xs-6">'+question_details.practice_name[i]+'</div>');		
		$('#admin_skill').append('<div class="page admin_dash_page_'+admin_count1+' col-sm-6 col-xs-6 id">'+question_details.skill_set[i]+'</div>');		
		$('#admin_experience').append('<div class="page admin_dash_page_'+admin_count1+' col-sm-6 col-xs-6">'+question_details.experience[i]+'</div>');		
		$('#admin_type').append('<div class="page admin_dash_page_'+admin_count1+' col-sm-6 col-xs-6">'+question_details.type[i]+'</div>');		
		$('#admin_questions').append('<div class="page admin_dash_page_'+admin_count1+' col-sm-6 col-xs-6">'+question_details.noofQuest[i]+'</div>');		
		
		if(admin_count1 == 1){ 
			$('.admin_dash_page_1').addClass('page-active');
		}	
		++admin_count1;		
	} 
	 
	$('.admin_next').bind('mousedown',function(){
		$('.admin_prev,.admin_first').removeClass('disabled');
		$('.admin_prev,.admin_first').addClass('active');
		var class_cal = $('.page-active').attr('class').split(' ')[1];
		var id_cal = class_cal.split('_')[3]; 
		$('.page-active').removeClass('page-active');
		$('.admin_dash_page_'+(++id_cal)).addClass('page-active');  
		if($('.admin_mobile_view').is(':visible')){
			if(id_cal >= total){
				$('.admin_next,.admin_last').addClass('disabled');
			}
		}
		else{
			if($('.admin_dash_page_'+Math.round(total/total_perpage)).hasClass('page-active')){
				$('.admin_next,.admin_last').addClass('disabled');
			} 
		}
	});

	$('.admin_prev').bind('mousedown',function(){
		$('.admin_next,.admin_last').removeClass('disabled');
		$('.admin_next,.admin_last').addClass('active');
		var class_cal = $('.page-active').attr('class').split(' ')[1];
		var id_cal = class_cal.split('_')[3];
		$('.page-active').removeClass('page-active');
		$('.admin_dash_page_'+(--id_cal)).addClass('page-active'); 
		if(id_cal == 1){
			$('.admin_prev,.admin_first').addClass('disabled');
		}
	});
	
	$('.admin_first').bind('mousedown',function(){
		$('.page-active').removeClass('page-active');
		$('.admin_dash_page_1').addClass('page-active'); 
		$('.admin_prev,.admin_first').addClass('disabled');
		$('.admin_last,.admin_next').removeClass('disabled');
		$('.admin_last,.admin_next').addClass('active');
	});
	
	$('.admin_last').bind('mousedown',function(){
		$('.page-active').removeClass('page-active');
		if($('.admin_mobile_view').is(':visible')){
			$('.admin_dash_page_'+total).addClass('page-active'); 	
		}else{
			$('.admin_dash_page_'+Math.round(total/total_perpage)).addClass('page-active'); 	
		}
		$('.admin_next,.admin_last').addClass('disabled');
		$('.admin_first,.admin_prev').removeClass('disabled');
		$('.admin_first,.admin_prev').addClass('active');
	});
	
	
	
	
	
	
});