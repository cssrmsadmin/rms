import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { apiService } from '../api.service';
interface SimpleSliderModel {
  value: number;
  options: Options;
}
@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {
  
  valueObject : any = {};
  options: Options = {
    showSelectionBar: true,
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
  getJdIdProfId :any = [];
  skillSet:any;
  skillSetArray : any;
  constructor(private apiservice :apiService) { }

te:any;
  ngOnInit() {
    this.te = this.apiservice.profOption();
    console.log(this.te.skillset, "fsdfsgsg");
    this.skillSet = this.te;
    console.log(typeof(this.te)+"this.te");
    console.log(this.skillSet.skillset);
    console.log(typeof(this.skillSet)+"this.te");
    this.skillSetArray = this.skillSet.skillset.split(',');
    console.log(this.skillSetArray);
    for (let items of this.skillSetArray){
      this.valueObject[items] = 0;
      console.log(this.valueObject);
    }
    console.log(this.valueObject);
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
    
  })
  }
}


