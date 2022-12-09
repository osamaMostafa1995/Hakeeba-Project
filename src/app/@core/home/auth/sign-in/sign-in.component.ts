import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CenterAuthService } from 'src/app/services/center-auth.service';
import { SharedDialogComponent } from 'src/app/shared/shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  type: any;
  show:boolean=false;
  submitted:boolean=false;
  loading:boolean=true;
  constructor(
    private logIn: CenterAuthService,
    private router: Router,
    private rout: ActivatedRoute,
    public dialog: MatDialog,
    private formbuilder: FormBuilder,
    private t:ToastrService
  ) {}
  myForm!: FormGroup;
  ngOnInit(): void {
    this.loading=false;
    this.openDialog();
    this.myForm = this.formbuilder.group({
      email: [
        '',
        [
          Validators.required,

          Validators.email,
        ],
      ],
      password: ['', Validators.required],
    });
  }
  showPass(){
    this.show= !this.show
  }
  forgetPass(){
if(this.myForm.value.email ==''){
  this.t.error('', 'من فضلك ادخل البريد الالكتروني',{
    closeButton: true,
    tapToDismiss:true,
disableTimeOut:true,
});
return
}
this.logIn.ForgetPassword({email:this.myForm.value.email}).subscribe((data:any)=>{
  if (data.status==200) {
    this.router.navigate(['registration/verify'] , {queryParams:{
      email:this.myForm.value.email
    }} )
  }else{
    console.log(data.error)
  }
})
  }


  submit() {
    this.submitted=true
    if (this.myForm.invalid) {


      if(this.myForm.controls['email'].errors){
        this.t.error('', 'من فضلك ادخل البريد الالكتروني بشكل صحيح' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      if(this.myForm.controls['password'].errors){
        this.t.error('', 'من فضلك ادخل كلمه السر  بشكل صحيح' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });

      return;
    } else {
      let form = {
        ...this.myForm.value,
      };
      console.log(form);
      this.logIn.centerOrTrainerLogin(form).subscribe((data: any) => {
        console.log(data);
        if (data.status == 200) {
          if( this.type=='center'&&data.content.type==0){
            this.myForm.reset();
            this.submitted=false
            this.t.success('تم التسجيل بنجاح كمركز',"تم بنجاح" ,{
              closeButton: true,
              tapToDismiss:true,
            disableTimeOut:true,
            });
             window.open(`http://admin.hqeba.com${data.content.link}`, "_blank");
          } else if( this.type=='coach'&&data.content.type==1){
            this.myForm.reset();
            this.submitted=false
            this.t.success('تم التسجيل بنجاح كمدرب',"تم بنجاح" ,{
              closeButton: true,
              tapToDismiss:true,
            disableTimeOut:true,
            });

             window.open(`http://admin.hqeba.com${data.content.link}`, "_blank");
          }
          else {
            this.submitted=false
            this.myForm.reset();
            this.openDialog();

            this.t.error('', '  انت لم تقم باختيار التسجيل الصحيح (مركز ام  مدرب)'  ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }

        }
      });
    }
  }

signUp(){
   if( this.type=='center'){
    // alert('تم التسجيل بنجاح كمركز')
    this.router.navigate(['/create_center'] )
  }else if( this.type=='coach'){
    alert('تم التسجيل بنجاح كمدرب')
  }
}
  openDialog() {
    const dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '40%',
      panelClass: 'custom-modalbox',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result.data);
      this.type=result.data
    });
  }
}
