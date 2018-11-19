import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';
import { Subscriber,Subscribable } from 'rxjs';
import { Router } from '@angular/router';
import { TADashboardComponent } from '../ta-dashboard/ta-dashboard.component';
import { HttpClient } from '@angular/common/http';
interface addProfile{
  jdid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  university: string,
  skills: string;
  email: string;
  mobileNo: number;
  lastCompanyName: string;
  exp: number;


}

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
  addProfile = <addProfile>{};
  listProfiles:any = [];
  jdid:any;
  jdname:any;
  jdate:any;
  skillset:any;
  nopositions:any;
  te:any = [];
  constructor(private http:HttpClient, private apiservice :apiService, private router: Router, private ta:TADashboardComponent) {
    this.te = this.apiservice.getOption();
    console.log(this.te.skillset);
    // this.te.jdid+" "+this.te.jdname+" "+this.te.jdate+" "+this.te.skillset+"" +
  }

  ngOnInit() {
    

  }
  profileForm:any;
  selectedFiles: FileList;
  fileName: string;
   handleFileInput(event) {
    this.handleFileInput = event.target.files;
    this.fileName = this.handleFileInput[0].name;
    console.log('selectedFiles: ' + this.fileName );
  }

  submitValeus(){
    const addProfiles={
      "JD_ID":String(this.te.jdid),
       "First_Name":this.addProfile.firstName,
       "Middle_Name":this.addProfile.middleName,
       "Last_Name": this.addProfile.lastName,
       "Emp_Skill": this.addProfile.skills.replace(/,/g,"+"),
       "Email": this.addProfile.email,
       "University":this.addProfile.university,
       "Phone_No": this.addProfile.mobileNo,
       "Last_Comp_Name":this.addProfile.lastCompanyName,
       "Exp": this.addProfile.exp,
       "Attachment":this.fileName
    }
    
  this.http.get("").subscribe((data)=>{
  });

  }
}
