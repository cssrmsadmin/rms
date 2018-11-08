import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';
import { Subscriber,Subscribable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ta-dashboard',
  templateUrl: './ta-dashboard.component.html',
  styleUrls: ['./ta-dashboard.component.css']
})
  export class TADashboardComponent implements OnInit {
    listValues:any = [];
    jdDetails:any = [];
    constructor(private apiservice :apiService,
                private router: Router) { }
    
    ngOnInit() {
      this.apiservice.getDashboardJson().subscribe( val => {
        this.listValues =val['data'];
      });
      
    }
    setDownloadPath(value){
      window.location = value;
    }  
    viewProfile(event){
      console.log("This is from tadashboard "+event);
      this.apiservice.setOption('jdid',event);
      localStorage.setItem("profileID", event);
      this.router.navigate(['/view-profile']);
    }
    showAddNewHiring(){
      this.router.navigate(['/add-new-hiring']);
    }
    viewProfileData(e1,e2,e3,e4,e5){
      console.log("This is from tadashboard\n "+e1+"  "+e2+" "+e3+"   "+e4+"   "+e5);
      this.apiservice.viewProf(e1,e2,e3,e4,e5);
    }
    showAddProfile(e1,e2,e3,e4,e5){
      console.log("This is from tadashboard\n "+e1+"  "+e2+" "+e3+"   "+e4+"   "+e5);
      this.apiservice.addOption(e1,e2,e3,e4,e5);
      this.router.navigate(['/add-profile']);
    }
    
  }

