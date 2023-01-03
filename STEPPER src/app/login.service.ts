import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import {basicForm, bankForm, comForm } from './components/model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  url:string="http://localhost:3000";
  Empsave(emp:basicForm){
   return this.http.post<basicForm>(this.url+"/Basic",emp);
  }

  Usersave(emp:bankForm){
    return this.http.post<bankForm>(this.url+"/Bank",emp);
  }

  Comsave(emp:comForm){
    return this.http.post<comForm>(this.url+"/Address",emp);
  }

  
}

