import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CenterAuthService } from 'src/app/services/center-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedDialogComponent } from 'src/app/shared/shared-dialog/shared-dialog.component';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-center-add-information',
  templateUrl: './center-add-information.component.html',
  styleUrls: ['./center-add-information.component.scss']
})
export class CenterAddInformationComponent implements OnInit {
code:any;
currentCity:any;
  myData: any=[];
  selectedCar:any=''
  open:boolean=false;
  openSpec:boolean=false;
  openReson:boolean=false;
  counrtries: any;
  myForm!: FormGroup;
  number: any;
  showStudentInfo:boolean=true ;
  showGardianInfo:boolean=false ;
  selected: any;
  step1:boolean=true;
  submitted: boolean =false;
  complate: boolean =false;
  authorization:any= '0' ;
  fileLogo!: File ;
  filebackground!: File;
  email: any;
  base64Imagelogo: any;
  base64Imagecover: any;
  cityImg: any;
  spec: any;
  password: string | null;
  constructor( private logo:HomeService,  public dialog: MatDialog,private formbuilder: FormBuilder, private logIn: CenterAuthService , private router :Router , private rout:ActivatedRoute ,    private t:ToastrService) {
    this.email=this.rout.snapshot.queryParamMap.get('email');
    this.password=this.rout.snapshot.queryParamMap.get('password');
  }
  getCountryCode(item:any){
this.currentCity= this.counrtries.find((i:any)=>{
 return i.id ==item
})
console.log(this.currentCity , 'osama');

this.code= this.currentCity?.country_code
this.cityImg= `https://admin.hqeba.sa${this.currentCity?.image}`
  }

  ngOnInit(): void {
   this.getCountry();
   this.getSpec()
   this.myForm = this.formbuilder.group({
    country_id: ['' , Validators.required],
   name: ['', Validators.required],
   domain: ['', Validators.required],
    qualification: [''],
    phone:['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)] ],
    link:[''],
    desc:[''],
    reason:['']
  });
}

  log(){
    this.open=!this.open;
   console.log(this.open);
  }
  getCountry(){
    this.logIn.getCountry().subscribe((data:any)=>{
      console.log(data);
      this.counrtries=data.content
    })
  }
centerStep2(){
  this.submitted=true;
  if(this.myForm.controls['country_id'].errors){
    this.t.error('', 'من فضلك      اختار الدوله' ,{
      closeButton: true,
      tapToDismiss:true,
  disableTimeOut:true,
  });

  }

if(this.myForm.controls['phone'].errors){
    this.t.error('', 'من فضلك ادخل  رقم الهاتف بشكل صحيح' ,{
      closeButton: true,
      tapToDismiss:true,
  disableTimeOut:true,
  });

  }
if(this.myForm.controls['phone'].valid &&this.myForm.controls['country_id'].valid){
  this.step1=false;
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
}

}
createCenter(){
  this.complate= true;
  if(this.myForm.controls['name'].errors){
    this.t.error('', 'من فضلك       ادخل اسم المركز' ,{
      closeButton: true,
      tapToDismiss:true,
  disableTimeOut:true,
  });
  }
  if(this.myForm.controls['domain'].errors){
    this.t.error('', 'من فضلك       ادخل رابط المركز' ,{
      closeButton: true,
      tapToDismiss:true,
  disableTimeOut:true,
  });
  }
  else{
    console.log(this.myForm.value);
let form={
  ...this.myForm.value,
  email:this.email,
  code:this.code ,
  authorization:this.authorization,
 password: this.password,
  cover : this.filebackground ? this.filebackground : ''  ,
  logo: this.fileLogo ? this.fileLogo:''

}
console.log(form , 'center_form');
this.logIn.addcenter(form).subscribe((data:any)=>{
  if (data.status == 200) {
  console.log(data);
      this.myForm.reset();
      this.submitted=false
      // this.router.navigate(['home'])
      const dialogRef = this.dialog.open(SharedDialogComponent, {
        // width: '40%',
        data:{from:'create_center' , link:`https://admin.hqeba.sa${data.content?.link}` , domain:data.content?.domain ,price:data.content?.price },
        panelClass: 'custom-modalbox',
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(result.data);

      });
    }
})
  }
}
selec(event:any) {
  this.fileLogo=<File> event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.fileLogo);
  reader.onload = () => {
    this.base64Imagelogo = reader.result;
console.log(this.fileLogo);
  };

}
selectback(event:any){
  this.filebackground=<File> event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.filebackground);
  reader.onload = () => {
    this.base64Imagecover = reader.result;
console.log(this.filebackground);
  };
}

getSpec(){
  this.logo.showBlogsSpecs().subscribe((res:any)=>{
    this.spec=res?.content
  })
}

}
