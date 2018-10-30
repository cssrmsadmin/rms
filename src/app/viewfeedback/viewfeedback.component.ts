import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiService } from '../api.service';
apiService
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  feedback = [];
  getJdIdProfId :any = [];
  constructor(private apiservice :apiService) { }

  ngOnInit() {    
    this.getJdIdProfId = this.apiservice.getJdIdProfId();
    console.log(typeof(this.getJdIdProfId)+".......................");
    const arryaValues = this.getJdIdProfId;
    console.log(arryaValues);
    const x = arryaValues['jdId'];
    const y = arryaValues.profId;
    console.log(x);
    console.log(y);
      this.apiservice.getViewFeedback(x, y).subscribe((val) =>{
       console.log(val);
        this.feedback = val['data'];
        console.log("From Feedabck"+this.feedback);
    
  });

  }
  showViewFeedback(form : NgForm) {
    this.getJdIdProfId = this.apiservice.getJdIdProfId();
    console.log(this.getJdIdProfId);
    // this.apiservice.getViewFeedback(1005, 135).subscribe(val =>{
    //   this.feedback = val['data'];
    // });
    // this.apiservice.getEmp(form.value.email, form.value.password).subscribe( val => {
    //   this.empDetails =val['data'];
    //   let login = this.empDetails[0].login;
    //   let role = this.empDetails[0].role;
    //   let sid = this.empDetails[0].sid;
     
    //   let userID= form.value.email;
    //   let password =form.value.password;
    //   if(userID == "ta@csscorp.com" && password == "pass123") {
    //     if(login==1 && role=="TA" && sid==1001){
    //       this.router.navigate(['/app-ta-dashboard']);
    //     }
    //   }
    //   else
    //   {
    //     alert("Wrong Password");
    //   }
    // });
  }
}
