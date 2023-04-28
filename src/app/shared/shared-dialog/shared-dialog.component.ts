import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss']
})
export class SharedDialogComponent implements OnInit {
  value: any;
show:boolean=true;
fromSign_in:any;
show_btn:boolean=false;
test:boolean=true;
  constructor(private router:Router, private t:ToastrService,private dialogRef: MatDialogRef<SharedDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any,) {
   if(data.from =='create_center'){
    dialogRef.disableClose = true;
   }
console.log(data);

  }
  center(){
    this.value='center'
    this.closeModal()
  }
  coach(){
    this.value='coach'
    this.closeModal()
  }
  ngOnInit(): void {
  }
  closeModal() {
    console.log(this.value);
    this.dialogRef.close({ data: this.value });
  }
  gotodashbord(){
   setTimeout(() => {
    this.t.success('يمكنك استخدام المركز كنسخه تجريبيه لمده 14 يوم'," تم انشاء المركز  بنجاح " ,{
      closeButton: true,
      tapToDismiss:true,
    disableTimeOut:true,
    });
   }, 2000);
    window.open(this.data?.link, "_blank");
    this.closeModal()

  }
  payNow(){
    this.closeModal();
    this.router.navigate([`create_center/pay_form`], {
      queryParams:{
       price:this.data?.price,
       domain:this.data?.domain
      }
    })

  }
}
