import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { ToastrService } from 'ngx-toastr';
import { CenterAuthService } from 'src/app/services/center-auth.service';

@Component({
  selector: 'app-center-email-verify',
  templateUrl: './center-email-verify.component.html',
  styleUrls: ['./center-email-verify.component.scss']
})
export class CenterEmailVerifyComponent implements OnInit {
  otp: string | undefined;
  showOtpComponent = true;
  email:any ;
  loading:boolean=true;
  @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent | undefined;
  config :NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };
  from: string | null;
  password: string | null;
  onOtpChange(otp: string) {
    this.otp = otp;
    console.log(this.otp);

  }
  constructor(private router:Router , private rout : ActivatedRoute , private logIn:CenterAuthService , private t:ToastrService) {
   this.email =this.rout.snapshot.queryParamMap.get('email');
   this.from =this.rout.snapshot.queryParamMap.get('from');
   this.password =this.rout.snapshot.queryParamMap.get('password');
   }

  ngOnInit(): void {
   setTimeout(() => {
    this.loading=false;
    window.scroll(0,0)
   }, 1000);
if(this.from !="create_center"){
  this.resendCode()
}
  }
  resetPass(){
    this.logIn.resetPass({code:this.otp}).subscribe((res:any)=>{
      console.log(res);
if(res.status= 200){

this.t.success('     تم التحقق من الرمز بنجاح',"تم بنجاح" ,{
  closeButton: true,
  tapToDismiss:true,
disableTimeOut:true,
});
this.router.navigate(['create_center/center_add_information'], {queryParams:{
  email:this.email,
  password:this.password
}} )

}
    })


    }
  resendCode(){
    this.logIn.resendCode({email:this.email}).subscribe((res:any)=>{
      console.log(res);
if(res.status= 200){

  this.t.success(' تم ارسال الكود لبريدك الالكتروني',"تم بنجاح" ,{
    closeButton: true,
    tapToDismiss:true,
  disableTimeOut:true,
  });
}
})
  }
}
