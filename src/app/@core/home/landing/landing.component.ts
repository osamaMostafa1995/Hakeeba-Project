import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs/operators';
import { CenterAuthService } from 'src/app/services/center-auth.service';

import { HomeService } from 'src/app/services/home.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  myForm!: FormGroup;
  open: boolean = true;
  typeChoice: any ='';
  price:any;
  priceItem:any;
  mainitemChanged(val:any){
console.log(val);
    this.typeChoice=val;
     this.open = false;
  }
  user:any;
  homeReview: OwlOptions = {

    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    center: true,
    autoplay: false,
    // stagePadding: 30,
    slideTransition: "ease-in-out",
    smartSpeed: 1000,
    navText: ['<img src="assets/images/landing/arrow1.svg" >','<img src="assets/images/landing/arrow.svg" >' ],
    nav: true,
    dotsEach: 4,
    stagePadding:0,
    responsive:{

         0:{
            items:1,

         },
         600:{
             items:1,

         },
         1000:{
             items:2,

         },
         1200:{
             items:2,


         },
         1400:{
             items:2,

         },
         1600:{
             items:2,

         },
         1800:{
             items:2,

         }
      }
  };
data:any;
  headerImg: any;
  statistics:any
  loading: boolean =true;
  submitted:boolean=false;
    homeReviews: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    center: true,
    autoplay: false,

    slideTransition: "ease-in-out",
    smartSpeed: 1000,
    navText: ['<img src="assets/images/landing/arrow1.svg" >','<img src="assets/images/landing/arrow.svg" >' ],
    nav: true,
    responsive:{

         0:{
            items:1,

         },
         600:{
             items:1,

         },
         900:{
          items:2,
      },
         1000:{
             items:2,

         },
         1100:{
          items:3,

      },
         1200:{
             items:3,

         },
         1400:{
             items:3,

         },
         1600:{
             items:3,

         },
         1800:{
             items:3,

         }
      }
  };
  constructor(private logo:HomeService ,private router:Router , private t:ToastrService , private formbuilder:FormBuilder  , private logIn:CenterAuthService) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  }

  ngOnInit(): void {
    AOS.refresh();
    AOS.init();

    this.getLogo()
    this.myForm = this.formbuilder.group({
      type:['0' , Validators.required],
      name:['' , Validators.required],
      email: [
        '',
        [
          Validators.required,

          Validators.email,
        ],
      ],
      desc: ['', Validators.required],
    });
  }
  routerCenter(){
    this.router.navigate(['create_center'])
  }
  getLogo(){
    this.logo.showlandingPage().pipe(map((data:any)=>data)).subscribe((res:any)=>{
      console.log(res,'landing'  );

this.data=res;
this.headerImg=`https://admin.hqeba.sa${this.data.content.header.image}`
this.price= res?.content.bundle
// this.priceItem=this.price[1]

this.loading=false


    })
      }
      submit() {
       this.submitted=true;
        if (this.myForm.invalid) {
          if(this.myForm.controls['name'].errors){
            this.t.error('', 'من فضلك ادخل    الاسم' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }
          if(this.myForm.controls['email'].errors){
            this.t.error('', 'من فضلك ادخل  البريد الالكتروني  بشكل صحيح' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }
          if(this.myForm.controls['desc'].errors){
            this.t.error('', 'من فضلك ادخل   الوصف ' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });



        }
          if(this.myForm.controls['type'].value == 0){
            this.t.error('', 'من فضلك اختار الصفه    ' ,{
              closeButton: true,
              tapToDismiss:true,
          disableTimeOut:true,
          });
          }

        }else{
          let form = {
            ...this.myForm.value,

          };
          console.log(form);
          this.logIn.centerSupport(form).subscribe((data: any) => {
            console.log(data , "ssssss");
            if (data.status == 200) {
this.t.success('تم ارسال الشكوي بنجاح',"تم بنجاح" ,{
  closeButton: true,
  tapToDismiss:true,
disableTimeOut:true,
});
this.submitted=false;
this.myForm.reset()
this.typeChoice=''
            }
          });
        }}
        gotoCenter(item:any){


          window.open(`https://h.hqeba.sa/${item?.domain}`,"_blank" , '')

        }
      }

