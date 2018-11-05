import { Component, OnInit } from "@angular/core";
import { apiService } from "../api.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-executive-dashboard",
  templateUrl: "./executive-dashboard.component.html",
  styleUrls: ["./executive-dashboard.component.css"]
})
export class ExecutiveDashboardComponent implements OnInit {
  listValue: any = [];
  monthStats: any = [];
  l0Values: any = [];
  l1Values: any = [];
  l2Values: any = [];
  profileValues: any = [];
  monthValues: any = [];
  constructor(private apiservice: apiService, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://addjd1.herokuapp.com/executive-dashboard")
      .subscribe(val => {
        this.listValue = val["data"];
        for (let values of this.listValue[0].Last_3_month_stats) {
          this.profileValues.push(values["Prof_Received"]);
          this.l0Values.push(values["L0_Cleared"]);
          this.l1Values.push(values["L1_Cleared"]);
          this.l2Values.push(values["L2_Cleared"]);
          this.monthValues.push(values["Month"]);
        }
      });
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = this.monthValues;
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: this.profileValues, label: "Total Profile Received" },
    { data: this.l0Values, label: "L0 Cleared" },
    { data: this.l1Values, label: "L1 Cleared" },
    { data: this.l2Values, label: "L2 Cleared" }
  ];
  public barChartColors: Array<any> = [
    {
      backgroundColor: "#719ceb"
    },
    {
      backgroundColor: "#ffa300"
    },
    {
      backgroundColor: "#9a7cd2"
    },
    {
      backgroundColor: "#4aced3"
    },
    {
      backgroundColor: "#912488"
    }
  ];
}
