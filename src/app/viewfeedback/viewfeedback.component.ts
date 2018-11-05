import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { apiService } from "../api.service";
apiService;
@Component({
  selector: "app-viewfeedback",
  templateUrl: "./viewfeedback.component.html",
  styleUrls: ["./viewfeedback.component.css"]
})
export class ViewfeedbackComponent implements OnInit {
  feedback = [];
  getJdIdProfId: any = [];
  constructor(private apiservice: apiService) {}

  ngOnInit() {
    this.getJdIdProfId = this.apiservice.getJdIdProfId();
    const arryaValues = this.getJdIdProfId;
    const x = arryaValues["jdId"];
    const y = arryaValues.profId;
    this.apiservice.getViewFeedback(x, y).subscribe(val => {
      this.feedback = val["data"];
    });
  }

  showViewFeedback(form: NgForm) {
    this.getJdIdProfId = this.apiservice.getJdIdProfId();
  }
}
