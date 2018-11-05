import { Component, OnInit } from "@angular/core";
import { apiService } from "../api.service";
import { Subscriber, Subscribable } from "rxjs";
import { Router } from "@angular/router";
import { TADashboardComponent } from "../ta-dashboard/ta-dashboard.component";
import { HttpClient } from "@angular/common/http";

interface addProfile {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNo: number;
  exp: number;
}

@Component({
  selector: "app-addprofile",
  templateUrl: "./addprofile.component.html",
  styleUrls: ["./addprofile.component.css"]
})
export class AddprofileComponent implements OnInit {
  addProfile = <addProfile>{};
  listProfiles: any = [];
  jdid: any;
  jdname: any;
  jdate: any;
  skillset: any;
  nopositions: any;
  te: any = [];
  constructor(
    private http: HttpClient,
    private apiservice: apiService,
    private router: Router,
    private ta: TADashboardComponent
  ) {
    this.te = this.apiservice.getOption();
  }

  ngOnInit() {}
  profileForm: any;
  selectedFiles: FileList;
  fileName: string;
  handleFileInput(event) {
    this.handleFileInput = event.target.files;
    this.fileName = this.handleFileInput[0].name;
  }

  submitValeus() {
    const addProfiles = {
      JD_ID: this.te.jdid,
      First_Name: this.addProfile.firstName,
      Middle_Name: this.addProfile.middleName,
      Last_Name: this.addProfile.lastName,
      Email: this.addProfile.email,
      Phone_No: this.addProfile.mobileNo,
      Exp: this.addProfile.exp,
      Attachment: this.fileName
    };

    this.http
      .get(
        "https://addjd1.herokuapp.com/newprof?questions=" +
          JSON.stringify(addProfiles)
      )
      .subscribe(data => {});
  }
}
