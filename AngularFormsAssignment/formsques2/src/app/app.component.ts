import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  projectstatuses = ["Stable", "Critical", "Finished"];
  selectedprojectstatus = "Stable";
  @ViewChild('f', { static: false })
  signUpForm!: NgForm;

  
  

  onSubmit() {
    console.log(this.signUpForm.value);
  }
  
}