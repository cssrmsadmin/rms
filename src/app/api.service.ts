import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
@Injectable({  providedIn: 'root'})
export class apiService { 
  data:any = {};  
  viewProfData = {};
  setOption(option, value) {      
    this.data[option] = value;  
  }  
  addOption(e1,e2,e3,e4,e5) {      
    const addProf = {'jdid': e1, 'jdname': e2,'skillset':e3, 'nopositions':e4,'jdate':e5 } ;
    this.data = addProf;
    console.log("from setOption function "+ this.data);
  }  
  viewProf(e1,e2,e3,e4,e5) {      
    const viewProf = {'jdid': e1, 'jdname': e2,'skillset':e3, 'nopositions':e4,'jdate':e5 } ;
    this.viewProfData = viewProf;
    console.log(this.viewProfData);
    console.log("from setOption function "+ this.viewProfData);
  }
  setJdIdProfId(jdId, profId) {     
    const objectValues = {'jdId': jdId, 'profId': profId } ;
    this.data =objectValues;
    console.log("From Set of Service ::::::"+this.data);
  }  
  getJdIdProfId(){
    console.log("From get of Service:"+this.data);
    return this.data;
  }
  getOption() {  
    return this.data;  
  } 
  profOption() {
    console.log(this.viewProfData);
    return this.viewProfData;
  }
  constructor(private http: HttpClient) {}
  getDashboardJson():any{
    return this.http.get("https://addjd1.herokuapp.com/addjd");
  }
  getViewProfiles(jdid: any):any {
    return this.http.get("https://addjd1.herokuapp.com/viewjd?questions="+jdid);
    
  }
  addNewHiring(BU_Name,JD_Name,Designation,Years_of_Exp,No_of_Position,L0_interview,Program_code,L1_Panelist_1,L1_Panelist_2,L2_Panelist_1,L2_Panelist_2,Skills,Attachment):any{
    const addNewHiring= {
      "BU_Name":BU_Name,
      "JD_Name":JD_Name,
      "Designation":Designation,
      "Years_of_Exp":Years_of_Exp,
      "No_of_Position":No_of_Position,
      "L0_interview":L0_interview,
      "Program_code":"Skills",
      "L1_Panelist_1":L1_Panelist_1,
      "L1_Panelist_2":L1_Panelist_2,
      "L2_Panelist_1":L2_Panelist_1,
      "L2_Panelist_2":L2_Panelist_2,
      "Skills":Skills,
      "Attachment":Attachment
    }
    console.log("Add New Hiring data"+addNewHiring);
    return this.http.get("https://addjd1.herokuapp.com/addjobdesc?questions="+JSON.stringify(addNewHiring));
  }
  getEmp(id,pwd):any {
    const lgoinArray ={
      "id":id,"pwd":pwd
    }
    return this.http.get("https://addjd1.herokuapp.com/authenticate?questions="+JSON.stringify(lgoinArray));
  }
  getViewFeedback(jdid,profid):any{
    console.log("before "+jdid,profid);
    const feedbacckArray ={
      "jdid":jdid,"profid":profid
    }
    console.log("Feedback array: "+JSON.stringify(feedbacckArray));
    return this.http.get("https://addjd1.herokuapp.com/viewfeedback?questions="+JSON.stringify(feedbacckArray));
  }
}