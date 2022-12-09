import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterAuthService } from 'src/app/services/center-auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email:any
  constructor(private logIn:CenterAuthService , private rout :ActivatedRoute , private router:Router) {
    this.email=this.rout.snapshot.queryParamMap.get('email');
   }

  ngOnInit(): void {
  }
createPass(val:any , confirm:any){
if(val==confirm &&val!=''){
  let form= {
email:this.email,
newPassword:val
  }
this.logIn.createPass(form).subscribe((res:any)=>{
  alert("تم تغير كلمه السر بنجاح");
  this.router.navigate(['registration'])
})
}else{
  alert("يرجي التحقق من اعادة كلمه السر")
}
}
}
