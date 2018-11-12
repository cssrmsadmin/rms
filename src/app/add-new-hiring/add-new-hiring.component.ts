import { Observable } from 'rxjs';
import { apiService } from '../api.service';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UploadFileService } from '../upload-file.service';
import * as AWS from 'aws-sdk';

declare var TextDecoder;

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-new-hiring',
  templateUrl: './add-new-hiring.component.html',
  styleUrls: ['./add-new-hiring.component.css']
})

export class AddNewHiringComponent implements OnInit {
  public name;
  public model:number;
  formdata : any;
  constructor(private uploadService: UploadFileService, private http: HttpClient, private apiservice :apiService, private router:Router) { }
  ngOnInit() {
    AWS.config.credentials = new AWS.Credentials({
      accessKeyId: 'AKIAIYAYPXS4DS6PMMXQ', secretAccessKey: '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'
    });
    const params = {
      Bucket: 'jsa-angular6-bucket6/jd-upload',
      Key: ''
    };

    let s3 = new AWS.S3();
    s3.getObject(params, function(err, data) {
      if (err) {
        console.error(err); // an error occurred
      } else {
        const string = new TextDecoder('utf-8').decode(data.Body);
        console.log(string);
      }
    });
  
  }
  profileForm:any;
  selectedFiles: FileList;
  fileName: string;
// \\Awslabapse1w003\cv  



    handleFileInput(event) {
      const userFile: File = event.target.files[0];
      this.fileName = userFile.name;
      this.formdata = new FormData();
      this.formdata.append('file', userFile, userFile.name);
      this.selectedFiles = event.target.files;
    }
    addNewHiring(addNewHiringFrm : NgForm){
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
    this.apiservice.addNewHiring(
      addNewHiringFrm.value.BU_Name,
      addNewHiringFrm.value.Jd_Name,
      addNewHiringFrm.value.Designation,
      addNewHiringFrm.value.Years_of_Exp, 
      addNewHiringFrm.value.No_of_Position,
      addNewHiringFrm.value.external_interview_panel_details,
      addNewHiringFrm.value.L1_Panelist_1,
      addNewHiringFrm.value.L1_Panelist_2,
      addNewHiringFrm.value.L2_Panelist_1,
      addNewHiringFrm.value.L2_Panelist_2,
      addNewHiringFrm.value.Skills.replace(/,/g,"+"),
      addNewHiringFrm.value.Attachment
    ).subscribe( val => {
    alert("Test Success");
    this.router.navigate(['/ta-dashboard']);
    }
    )
    } 
}