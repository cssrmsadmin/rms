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
   var comment=document.getElementById('comments').value;
   if(comment==""){
	   document.getElementById("comments_error").innerHTML = "**Enter your comments";
	   document.getElementById("comments_error").style.color = "red";
	   return false
   }
   else{
	   
	   return true;
	   
   }
  
}