import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  formValue!: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData!: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService){}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      gender:[''],
      email:[''],
      salary:[''],

    })
    this.getAllEmployees()
  }
  postEmployeeDetails(){
    this.employeeModelObj.empid = this.formValue.value.empid;
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.gender = this.formValue.value.gender;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(res=>{
      console.log(res);
      alert("Employees Record Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      alert("something went wrong, Please Check Again")
    })
  }

  getAllEmployees(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData= res;
    })
  }

}
