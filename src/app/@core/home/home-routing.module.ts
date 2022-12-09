import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { VerifyCodeComponent } from './auth/verify-code/verify-code.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CenterAddInformationComponent } from './center-add-information/center-add-information.component';
import { CenterEmailVerifyComponent } from './center-email-verify/center-email-verify.component';
import { CenterSignupComponent } from './center-signup/center-signup.component';
import { CreateCenterLayoutComponent } from './create-center-layout/create-center-layout.component';
import { LandingComponent } from './landing/landing.component';
import { PriceComponent } from './price/price.component';
import { PrivateCenterInformationComponent } from './private-center-information/private-center-information.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: LandingComponent},
  {path: 'Prices', component: PriceComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blogs/:id', component: BlogDetailsComponent},
  {path: 'registration', component: RegistrationComponent , children:[
    {path: '', component: SignInComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'verify', component: VerifyCodeComponent},
    {path: 'reset', component: ResetPasswordComponent},
  ]},
  {path: 'create_center', component: CreateCenterLayoutComponent , children:[
    {path: '', component: CenterSignupComponent},
    {path: 'signUp', component: CenterSignupComponent},
    {path: 'center_email_verify', component: CenterEmailVerifyComponent},
    {path: 'center_add_information', component: CenterAddInformationComponent},
    {path: 'private_center_information', component: PrivateCenterInformationComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
