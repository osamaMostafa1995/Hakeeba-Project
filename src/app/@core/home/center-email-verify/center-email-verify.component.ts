import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-center-email-verify',
  templateUrl: './center-email-verify.component.html',
  styleUrls: ['./center-email-verify.component.scss']
})
export class CenterEmailVerifyComponent implements OnInit {
  otp: string | undefined;
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
  constructor(private router:Router , private rout : ActivatedRoute) { }

  ngOnInit(): void {
  }
  route(){
    console.log(this.router.url);

    this.router.navigate(['../center_add_information'] ,{ relativeTo: this.rout})

    }

}
