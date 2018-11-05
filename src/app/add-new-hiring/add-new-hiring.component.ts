import { apiService } from "../api.service";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-add-new-hiring",
  templateUrl: "./add-new-hiring.component.html",
  styleUrls: ["./add-new-hiring.component.css"]
})
export class AddNewHiringComponent implements OnInit {
  public name;
  public model: number;
  formdata: any;
  constructor(
    private http: HttpClient,
    private apiservice: apiService,
    private router: Router
  ) {}
  ngOnInit() {}
  profileForm: any;
  selectedFiles: FileList;
  fileName: string;

  handleFileInput(event) {
    this.handleFileInput = event.target.files;
    this.fileName = this.handleFileInput[0].name;
    const userFile: File = event.target.files[0];
    this.fileName = this.handleFileInput[0].name;
    this.formdata = new FormData();
    this.formdata.append("file", userFile, userFile.name);
  }
  addNewHiring(addNewHiringFrm: NgForm) {
    console.log(
      "Checking the values....." +
        addNewHiringFrm.value.L1_Panelist_1 +
        "" +
        addNewHiringFrm.value.L1_Panelist_2 +
        "" +
        addNewHiringFrm.value.L2_Panelist_1 +
        "" +
        addNewHiringFrm.value.L2_Panelist_2
    );
    this.http
      .post("https://addjd2.herokuapp.com/uploader", this.formdata)
      .subscribe(data => {});

    this.apiservice
      .addNewHiring(
        addNewHiringFrm.value.BU_Name,
        addNewHiringFrm.value.Jd_Name,
        addNewHiringFrm.value.Designation,
        addNewHiringFrm.value.Years_of_Exp,
        addNewHiringFrm.value.No_of_Position,
        addNewHiringFrm.value.L0_interview,
        "1212321",
        addNewHiringFrm.value.L1_Panelist_1,
        addNewHiringFrm.value.L1_Panelist_2,
        addNewHiringFrm.value.L2_Panelist_1,
        addNewHiringFrm.value.L2_Panelist_2,
        addNewHiringFrm.value.Skills,
        addNewHiringFrm.value.Attachment
      )
      .subscribe(val => {
        alert("Test Success");
        this.router.navigate(["/app-ta-dashboard"]);
      });
  }
}
