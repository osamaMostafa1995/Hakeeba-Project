import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
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
  constructor(private router:Router , private rout : ActivatedRoute ,     private logIn: CenterAuthService,) {
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
  }
  resetPass(){
    this.logIn.resetPass({code:this.otp}).subscribe((res:any)=>{
      console.log(res);
if(res.status= 200){
alert("تم  التحقق من الرمز  بنجاح")
this.router.navigate(['registration/reset'] ,{queryParams:{
  email:this.email
}} )

}
    })
    // this.router.navigate(['../reset'] ,{ relativeTo: this.rout})

    }
    resendCode(){
      this.logIn.resendCode({email:this.email}).subscribe((res:any)=>{
        console.log(res);
if(res.status= 200){
 alert("تم ارسال الرمز بنجاح")


}
      })

    }
}
