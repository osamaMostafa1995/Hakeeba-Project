import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PriceComponent } from './price/price.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { MainBlogComponent } from './blogs/Components/main-blog/main-blog.component';
import { TabOneComponent } from './blogs/Components/tab-one/tab-one.component';
import { TabTwoComponent } from './blogs/Components/tab-two/tab-two.component';
import { TabThreeComponent } from './blogs/Components/tab-three/tab-three.component';
import { TabFourComponent } from './blogs/Components/tab-four/tab-four.component';
import { TabFiveComponent } from './blogs/Components/tab-five/tab-five.component';
import { RelatedBlogsComponent } from './blog-details/Components/related-blogs/related-blogs.component';
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
@NgModule({
  declarations: [
    LandingComponent,
    PriceComponent,
    BlogsComponent,
    BlogDetailsComponent,

    MainBlogComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent,
    TabFiveComponent,
    RelatedBlogsComponent,
    SignInComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    CreateCenterLayoutComponent,
    CenterSignupComponent,
    CenterAddInformationComponent,
    CenterEmailVerifyComponent,
    PrivateCenterInformationComponent,

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
