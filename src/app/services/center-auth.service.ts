import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenterAuthService {

  constructor(private http:HttpClient) { }
  centerOrTrainerLogin(form:any){
    return this.http.post('http://admin.hqeba.com/api/login' , form)
   }
   ForgetPassword(email:any){
    return this.http.post('http://admin.hqeba.com/api/forget-password' , email)
   }
   resendCode(email:any){
    return this.http.post('http://admin.hqeba.com/api/resendCode' , email)
   }
   resetPass(code:any){
    return this.http.post('http://admin.hqeba.com/api/verify-account' , code)
   }
   createPass(form:any){
    return this.http.post('http://admin.hqeba.com/api/reset-password' , form)
   }
   createCenter(form:any){
    return this.http.post('http://admin.hqeba.com/api/sign-up' , form)
   }
  //
  centerSupport(form:any){
    return this.http.post('http://admin.hqeba.com/api/haqiba-support' , form)
  }
}
