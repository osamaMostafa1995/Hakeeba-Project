import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenterAuthService {

  constructor(private http:HttpClient) { }
  centerOrTrainerLogin(form:any){
    return this.http.post('https://admin.hqeba.sa/api/login' , form)
   }
   ForgetPassword(email:any){
    return this.http.post('https://admin.hqeba.sa/api/forget-password' , email)
   }
   resendCode(email:any){
    return this.http.post('https://admin.hqeba.sa/api/resendCode' , email)
   }
   resetPass(code:any){
    return this.http.post('https://admin.hqeba.sa/api/verify-account' , code)
   }
   createPass(form:any){
    return this.http.post('https://admin.hqeba.sa/api/reset-password' , form)
   }
   createCenter(form:any){
    return this.http.post('https://admin.hqeba.sa/api/sign-up' , form)
   }
  //
  centerSupport(form:any){
    return this.http.post('https://admin.hqeba.sa/api/haqiba-support' , form)
  }
  getCountry(){
    return this.http.get('https://admin.hqeba.sa/api/countries')
  }
  addcenter(form: any) {

    const formData:FormData = new FormData()




    for (const [key, value] of Object.entries(form)) {
      // || value != ''

      if(value != "" ) {
        if(key == 'cover'){
          formData.append('cover',form.cover)
        }
        else if(key=='logo'){
          formData.append('logo',form.logo)
        }
        else if(key=='authorization'){
          formData.append('authorization',form.authorization)
        }else{
          formData.append(key,`${value}`)
        }

 // formData.append(key,`${value}`)
      }}

    return this.http.post(`https://admin.hqeba.sa/api/sign-up-information`, formData);
  }
}
