import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CenterAuthService } from 'src/app/services/center-auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email:any
  show: boolean=false;
  showa: boolean=false;
  constructor(private logIn:CenterAuthService , private rout :ActivatedRoute ,private t:ToastrService, private router:Router) {
    this.email=this.rout.snapshot.queryParamMap.get('email');
   }

  ngOnInit(): void {
  }
  showPass(){
    this.show= !this.show
  }
  showPassAgain(){
    this.showa= !this.showa
  }
createPass(val:any , confirm:any){
if(val==confirm &&val!=''){
  let form= {
email:this.email,
newPassword:val
  }
this.logIn.createPass(form).subscribe((res:any)=>{

  this.t.success('   تغيير كلمه المرور بنجاح',"تم بنجاح" ,{
    closeButton: true,
    tapToDismiss:true,
  disableTimeOut:true,
  });
  this.router.navigate(['Haqeba/registration'])
})
}else{
  this.t.error('', 'من فضلك ادخل البريد الالكتروني',{
    closeButton: true,
    tapToDismiss:true,
disableTimeOut:true,
});
}
}
}
