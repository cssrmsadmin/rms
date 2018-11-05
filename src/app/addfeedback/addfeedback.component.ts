import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";
import { apiService } from "../api.service";
interface SimpleSliderModel {
  value: number;
  options: Options;
}
@Component({
  selector: "app-addfeedback",
  templateUrl: "./addfeedback.component.html",
  styleUrls: ["./addfeedback.component.css"]
})
export class AddfeedbackComponent implements OnInit {
  valueObject: any = {};
  options: Options = {
    showSelectionBar: true
  };
  verticalSlider: SimpleSliderModel = {
    value: 3,
    options: {
      floor: 0,
      ceil: 10,
      showSelectionBar: true
    }
  };
  verticalSlider7: SimpleSliderModel = {
    value: 0,
    options: {
      floor: 0,
      ceil: 10,
      showSelectionBar: true
    }
  };
  verticalSlider8: SimpleSliderModel = {
    value: 0,
    options: {
      floor: 0,
      ceil: 10,
      showSelectionBar: true
    }
  };
  feedback = [];
  getJdIdProfId: any = [];
  skillSet: any;
  skillSetArray: any;
  constructor(private apiservice: apiService) {}

  te: any;
  ngOnInit() {
    this.te = this.apiservice.profOption();
    this.skillSet = this.te;
    this.skillSetArray = this.skillSet.skillset.split(",");
    for (let items of this.skillSetArray) {
      this.valueObject[items] = 0;
    }
    this.getJdIdProfId = this.apiservice.getJdIdProfId();
    const arryaValues = this.getJdIdProfId;
    const x = arryaValues["jdId"];
    const y = arryaValues.profId;
    this.apiservice.getViewFeedback(x, y).subscribe(val => {
      this.feedback = val["data"];
    });
  }
}
