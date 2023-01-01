import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.css']
})
export class SignupUpPageComponent implements OnInit {

  basicFormGroup!: FormGroup;
  bankFormGroup!: FormGroup;
  communicationFormGroup!: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.basicFormGroup = this.fb.group({
      fullname: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      fathername: ['', Validators.required],
      mothername: ['', Validators.required],
      mobile: ['', Validators.required]
    });
    this.bankFormGroup = this.fb.group({
      fullname:['', Validators.required]
    });
    this.communicationFormGroup = this.fb.group({
      presentadd: ['', Validators.required],
      permanentadd:['', Validators.required]
    })
    
  }
  onSubmit() {        
    console.warn(this.basicFormGroup.value);
    console.warn(this.bankFormGroup.value);
    console.warn(this.communicationFormGroup.value)

   }

}
