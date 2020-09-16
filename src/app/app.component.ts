import { Component, OnInit } from '@angular/core';
import { EmployeeinfoService } from './employeeinfo.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';
GetEmployee:any;
data
btntxt: string ="Create";
  emp:any;
  myform : FormGroup;
  constructor(public fg : EmployeeinfoService, form : FormBuilder){
    this.myform = form.group({
      empName : new FormControl(),
      gender :  new FormControl(),
      department : new FormControl(),
      salary: new FormControl()
    })
  }
  
ngOnInit(){
  
  this.getemp();
  
}
getemp(){
this.fg.GetEmployee().subscribe(res=>{

  this.data=res;
  console.log(this.data)
})
}
Createemp(){
 console.log(this.myform.value);
 if(this.myform.value["gender"]== "male") this.myform.value["gender"]= false;
 else this.myform.value["gender"] = true;
 this.fg. SaveEmployee(this.myform.value).subscribe(res=>{
  console.log(res);
  this.getemp();
  this.myform.reset();
  
})
}
updateemployeeS(){
  this.fg.updateemployee(this.myform.value).subscribe(res=>{
    console.log(this.myform.value)
  });
}
    

EditEmployee(emp){
  this.fg.GetEmployeebyid(this.myform.value).subscribe(res=>{
    this.myform.controls.empName.setValue(emp.empName)
  this.myform.controls.gender.setValue(emp.gender)
  this.myform.controls.salary.setValue(emp.salary);
  })
   this.btntxt ='update';
}
}
