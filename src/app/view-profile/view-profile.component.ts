import { Component, OnInit } from "@angular/core";
import { apiService } from "../api.service";
import { Subscriber, Subscribable } from "rxjs";
import { Router } from "@angular/router";
import { TADashboardComponent } from "../ta-dashboard/ta-dashboard.component";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.css"]
})
export class ViewProfileComponent implements OnInit {
  listProfile: any = [];
  te: any = [];
  listValues: any = [];
  x: any = [];

  constructor(
    private apiservice: apiService,
    private router: Router,
    private ta: TADashboardComponent
  ) {
    this.te = this.apiservice.getOption();
    console.log("Welcome getOption :" + this.te.jdid);
  }

  ngOnInit() {
    this.apiservice.getViewProfiles(this.te.jdid).subscribe(val => {
      this.listProfile = val["data"];
      this.x = this.listProfile[0].Profiles.length;
    });
    this.apiservice.getDashboardJson().subscribe(val => {
      this.listValues = val["data"];
    });
  }

  showFeedback(jdId, profId, i) {
    console.log("From View Profile" + jdId + " " + profId + "" + i);
    if (i <= this.listProfile[0].Profiles.length - 6) {
      this.router.navigate(["/view-feedback"]);
    } else {
      alert("This candidate is internal");
      this.router.navigate(["/view-profile"]);
    }
    this.apiservice.setJdIdProfId(jdId, profId);
  }

  showAddFeedback(jdId, profId) {
    console.log("From View Profile" + jdId, profId);
    this.apiservice.setJdIdProfId(jdId, profId);
  }

  showAddProfile() {
    this.router.navigate(["/add-profile"]);
  }
}
