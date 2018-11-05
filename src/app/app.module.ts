import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { TADashboardComponent } from "./ta-dashboard/ta-dashboard.component";
import { AddNewHiringComponent } from "./add-new-hiring/add-new-hiring.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { apiService } from "./api.service";
import { AddprofileComponent } from "./addprofile/addprofile.component";
import { ViewfeedbackComponent } from "./viewfeedback/viewfeedback.component";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AddfeedbackComponent } from "./addfeedback/addfeedback.component";
import { Ng5SliderModule } from "ng5-slider";
import { AdminUploadQuestionsComponent } from "./admin-upload-questions/admin-upload-questions.component";
import { ExecutiveDashboardComponent } from "./executive-dashboard/executive-dashboard.component";
import { ChartsModule } from "ng2-charts";
import { NgxPaginationModule } from "ngx-pagination";

const routers: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "view-profile", component: ViewProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "ta-dashboard", component: TADashboardComponent },
  { path: "add-new-hiring", component: AddNewHiringComponent },
  { path: "add-profile", component: AddprofileComponent },
  { path: "view-feedback", component: ViewfeedbackComponent },
  { path: "add-feedback", component: AddfeedbackComponent },
  { path: "upload-questions", component: AdminUploadQuestionsComponent },
  { path: "executive-dashboard", component: ExecutiveDashboardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TADashboardComponent,
    AddNewHiringComponent,
    ViewProfileComponent,
    HeaderComponent,
    FooterComponent,
    AddprofileComponent,
    ViewfeedbackComponent,
    AddfeedbackComponent,
    AdminUploadQuestionsComponent,
    ExecutiveDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
    AngularFileUploaderModule,
    Ng5SliderModule,
    ChartsModule,
    NgxPaginationModule
  ],
  providers: [apiService, TADashboardComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
