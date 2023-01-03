import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.css']
})
export class SignupUpPageComponent implements OnInit {
[x: string]: any;
 
  address = new FormControl('', [Validators.maxLength(60)]);
  basicFormGroup!: FormGroup;
  bankFormGroup!: FormGroup;
  communicationFormGroup!: FormGroup;
  constructor(private fb: FormBuilder,private cs:LoginService){}
  

  ngOnInit() {
    this.basicFormGroup = this.fb.group({
      fullname: ['', [Validators.required ]],
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      fathername: ['', Validators.required],
      mothername: ['', Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
      mobile: ['', Validators.required]
    });
    this.bankFormGroup = this.fb.group({
      fullname:['', Validators.required],
      Accno:['',Validators.required],
      bankname:['',Validators.required],
      ifsc:['',Validators.required],
      ib:['',Validators.required],
      mb:['',Validators.required]
    });
    this.communicationFormGroup = this.fb.group({
      presentadd: ['', Validators.required],
      permanentadd:['', Validators.required],
      
    })
    
    
  }
  onSubmit() {        
    // console.warn(this.basicFormGroup.value);
    // console.warn(this.bankFormGroup.value);
    // console.warn(this.communicationFormGroup.value)
    console.log(this.bankFormGroup.value)
    console.log(this.communicationFormGroup.value)
    console.log(this.basicFormGroup.value)
    this.cs.Empsave(this.basicFormGroup.value).subscribe();
    this.cs.Usersave(this.bankFormGroup.value).subscribe();
    this.cs.Comsave(this.communicationFormGroup.value).subscribe();
   }

}
