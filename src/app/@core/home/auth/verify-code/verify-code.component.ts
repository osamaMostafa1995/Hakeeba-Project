import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { ToastrService } from 'ngx-toastr';
import { CenterAuthService } from 'src/app/services/center-auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit {
  otp: string | undefined;
  myForm!: FormGroup;
  showOtpComponent = true;
  @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent | undefined;
  config :NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };
  onOtpChange(otp: string) {
    this.otp = otp;
    console.log(this.otp);

  }
  constructor(private router:Router , private rout : ActivatedRoute ,  private t:ToastrService,   private logIn: CenterAuthService,) {
    this.email=this.rout.snapshot.queryParamMap.get('email');
   }
email:any;
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  this.resendCode()
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
this.router.navigate(['registration/reset'] ,{queryParams:{
  email:this.email
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
