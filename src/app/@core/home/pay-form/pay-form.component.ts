import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {
  price: any;
  domain: any;
  myForm!: FormGroup;
  submited: boolean = false;
  type: any;
  company: any;

  constructor(private route:ActivatedRoute , private formbuilder: FormBuilder, private t:ToastrService , private logo:HomeService) {
    this.route.queryParams.subscribe((params: any) => {
      this.price = params['price'];
      this.domain = params['domain'];

    });
   }

  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      number: ['', [Validators.required , Validators.minLength(16) ]],
      name: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvc: ['', Validators.required],

    });
  }
  onSubmit( ){

    console.log(this.myForm.value);
    this.submited=true
    if (this.myForm.invalid) {


      if(this.myForm.controls['number'].errors){
        this.t.error('', 'من فضلك ادخل رقم البطاقه  بشكل صحيح' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      if(this.myForm.controls['year'].errors||this.myForm.controls['year'].value==0 ){
        this.t.error('', ' من فضلك اختار السنه' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      if(this.myForm.controls['month'].errors||this.myForm.controls['month'].value==0 ){
        this.t.error('', ' من فضلك اختار الشهر' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      if(this.myForm.controls['cvc'].errors ){
        this.t.error('', ' من فضلك ادخل cvc' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      if(this.myForm.controls['name'].errors){
        this.t.error('', 'من فضلك ادخل     الاسم ' ,{
          closeButton: true,
          tapToDismiss:true,
      disableTimeOut:true,
      });
      }
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });

      return;

    //

    // this.http.post("https://api.moyasar.com/v1/payments.html",form ,  {responseType: 'json'}).subscribe((res:any)=>{
    //   //here you received the response of your post
    //   console.log(res);

      //  window.open(`${res?.url}`, '_blank');
       // console.log(e.url, '333333333333333');

      //you can do asomething, like
    //   alert("datos enviados");
    // } ,
    // (err) => {
    //   console.log(err.url);
    //   window.open(`${err.url}`, '_blank');
    // })


    // this.logo.pay(form).subscribe((s:any)=>{
    //   console.log(s);
    //    window.open(`${s.url}`, '_blank', 'location=yes,height=900,width=900,scrollbars=yes,status=yes');
    //    window.open(`${s.url}`, '_blank');
    //    console.log(s.url, '333333333333333');
    //  });

      }else{
        this.creditCardType(this.myForm.controls['number'].value)
        let form={
           ...this.myForm.value,
             company:this.company,
            amount:this.price,
domain:this.domain
      }
      console.log(form);

      this.logo.paycenter(form).subscribe((s:any)=>{
      console.log(s.content.source.transaction_url);
       window.open(`${s.content.source.transaction_url}`, '_self');
    this.myForm.reset;
    this.submited=false
     });
    }
    }
    creditCardType(cc: any){
      let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
      let mastercard = new RegExp('^5[1-5][0-9]{14}$');
      if (visa.test(cc)) {
          this.company='visa';
      }

      if (mastercard.test(cc)) {
        this.company='mastercard';
      }
    }
}
