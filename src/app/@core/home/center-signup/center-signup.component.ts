
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CenterAuthService } from 'src/app/services/center-auth.service';

@Component({
  selector: 'app-center-signup',
  templateUrl: './center-signup.component.html',
  styleUrls: ['./center-signup.component.scss']
})
export class CenterSignupComponent implements OnInit {
  myForm!: FormGroup;
  submitted:boolean=false;
  loading:boolean=true
  show: boolean = false;
  showpass1: boolean = false;
  constructor(    private logIn: CenterAuthService,
    private router: Router,
    private rout: ActivatedRoute,
    private t:ToastrService,
    private formbuilder: FormBuilder) { }
    submit(){
      this.submitted=true
      console.log(this.myForm.value);
      if(this.myForm.value.password!=this.myForm.value.confirm ){
        this.t.error('', 'من فضلك   تحقق من اعاده كلمه السر',{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
return;
        }
      if (this.myForm.invalid){

          if(this.myForm.controls['email'].errors){
            this.t.error('', 'من فضلك ادخل البريد الالكتروني بشكل صحيح' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }
          if(this.myForm.controls['password'].errors){
            this.t.error('', 'يجب ان لا يقل كلمه السر عن 8 احرف او ارقام    ' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }
          if(this.myForm.controls['name'].errors){
            this.t.error('', 'من فضلك ادخل  الاسم الكامل   ' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          return;
      }  else {
        let form = {
          ...this.myForm.value,
        }
        this.logIn.createCenter(form).subscribe((res:any)=>{
          if (res.status==200) {

            this.router.navigate(['create_center/center_email_verify'],{queryParams:{
              email:this.myForm.value.email,
              password:this.myForm.value.password,
              from:"create_center"
            }} )
          }
        })
      }

    }
  ngOnInit(): void {

    this.myForm = this.formbuilder.group({
      email: [
        '',
        [
          Validators.required,

          Validators.email,
        ],
      ],
      password: ['',[ Validators.required ,Validators.minLength(8)] ],
    confirm:['', Validators.required],
      name: ['', Validators.required],
    });
   setTimeout(() => {
    this.loading=false;
   }, 1000);
}


sign_in(){
  this.router.navigate(['registration'])
}
showPass(){
  this.show= !this.show
}
}
