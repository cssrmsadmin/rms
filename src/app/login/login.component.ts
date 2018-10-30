import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';
import { apiService } from '../api.service';
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emp =[];
  empDetails:any[];
  loginDetails: any = [];
  constructor(private http: HttpClient, private apiservice :apiService, private router:Router) { }
  ngOnInit() {}
  gotoDashboard(form : NgForm) {
    this.apiservice.getEmp(form.value.email, form.value.password).subscribe( val => {
      this.empDetails =val['data'];
      let login = this.empDetails[0].login;
      let role = this.empDetails[0].role;
      let sid = this.empDetails[0].sid;
     
      let userID= form.value.email;
      let password =form.value.password;
      if(userID == "admin@csscorp.com" && password == "pass123") {
        if(login==1 && role=="TA" && sid==1001){
          this.router.navigate(['/ta-dashboard']);
        }
      }
      else
      {
        alert("Either login or password incorrect");
      }
    });
  }
  
}

