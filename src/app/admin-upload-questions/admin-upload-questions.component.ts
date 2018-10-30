import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface uploadQuestionsValues{
  unit: string;
  practice: string;
  skill: string;
  experience: string;
}
@Component({
  selector: 'app-admin-upload-questions',
  templateUrl: './admin-upload-questions.component.html',
  styleUrls: ['./admin-upload-questions.component.css']
})

export class AdminUploadQuestionsComponent implements OnInit {
  uploadQuestionsValues = <uploadQuestionsValues>{};
  profileForm:any;
  selectedFiles: FileList;
  fileName: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  handleFileInput(event) {
    this.handleFileInput = event.target.files;
    this.fileName = this.handleFileInput[0].name;
    console.log('selectedFiles: ' + this.fileName );
  }
submitValeus() {
  const uploadQuestionss={
    "BU_Name" : this.uploadQuestionsValues.unit,
    "Designation" : this.uploadQuestionsValues.practice,
    "Skill" : this.uploadQuestionsValues.skill,
    "Exp" : this.uploadQuestionsValues.experience,
    "Attachment" : this.fileName,
  }
  this.http.get("https://addjd1.herokuapp.com/admin?questions="+JSON.stringify(uploadQuestionss)).subscribe((data)=>{
  });
}

}
