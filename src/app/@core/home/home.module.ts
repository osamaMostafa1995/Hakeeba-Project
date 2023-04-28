import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PriceComponent } from './price/price.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { CarouselModule } from 'ngx-owl-carousel-o';


import { SignInComponent } from './auth/sign-in/sign-in.component';
import { VerifyCodeComponent } from './auth/verify-code/verify-code.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { CreateCenterLayoutComponent } from './create-center-layout/create-center-layout.component';
import { CenterSignupComponent } from './center-signup/center-signup.component';
import { CenterAddInformationComponent } from './center-add-information/center-add-information.component';
import { CenterEmailVerifyComponent } from './center-email-verify/center-email-verify.component';
import { NgxMatIntlTelInputComponent} from 'ngx-mat-intl-tel-input';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PrivateCenterInformationComponent } from './private-center-information/private-center-information.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutHaqebaComponent } from './about-haqeba/about-haqeba.component';
import { PayFormComponent } from './pay-form/pay-form.component';
@NgModule({
  declarations: [
    LandingComponent,
    PriceComponent,
    BlogsComponent,
    BlogDetailsComponent,



    SignInComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    CreateCenterLayoutComponent,
    CenterSignupComponent,
    CenterAddInformationComponent,
    CenterEmailVerifyComponent,
    PrivateCenterInformationComponent,
    HomeLayoutComponent,
    ReturnPolicyComponent,
    TermsComponent,
    AboutHaqebaComponent,
    PayFormComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    NgOtpInputModule,
    NgxMatIntlTelInputComponent,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
SharedModule
  ],

})
export class HomeModule { }
