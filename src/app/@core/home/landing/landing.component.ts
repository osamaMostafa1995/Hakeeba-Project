import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CenterAuthService } from 'src/app/services/center-auth.service';

import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  myForm!: FormGroup;
  open: boolean = true;
  typeChoice: any ='';
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
  constructor(private logo:HomeService  , private t:ToastrService , private formbuilder:FormBuilder  , private logIn:CenterAuthService) { }

  ngOnInit(): void {

    this.getLogo()
    this.myForm = this.formbuilder.group({
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
  getLogo(){
    this.logo.showlandingPage().subscribe((res:any)=>{
      console.log(res,'langing');
this.data=res.content;
this.headerImg=`http://admin.hqeba.com${this.data.header.image}`

this.loading=false
    })
      }
      submit() {
        if (this.myForm.invalid) {
          alert('no');


          return;}
          let form = {
            ...this.myForm.value,
            type:this.typeChoice
          };
          console.log(form);
          this.logIn.centerSupport(form).subscribe((data: any) => {
            console.log(data);
            if (data.status == 200) {
this.t.success('تم ارسال الشكوي بنجاح',"تم بنجاح" ,{
  closeButton: true,
  tapToDismiss:true,
disableTimeOut:true,
});
this.myForm.reset()
this.typeChoice=''
            }
          });
        }
      }

