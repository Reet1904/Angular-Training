
import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  LoginForm= new FormGroup({
    email:new FormControl('',[Validators.required]),
    mobile: new FormControl(''),

  })
  loginUsers(){
    console.warn(this.LoginForm.value)
  }

  get email(){
    return this.LoginForm.get('email');
  }

}
