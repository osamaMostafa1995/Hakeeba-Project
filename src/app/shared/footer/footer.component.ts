import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SharedDialogComponent } from '../shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  loading:boolean=true;
  footer: any;
  logoo: any;
  constructor( private logo:HomeService ,     public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.getfooter()
  }
  getfooter(){
    this.logo.showlandingPage().subscribe((res:any)=>{
this.logoo=`https://admin.hqeba.sa${res?.content?.logo}`;
this.footer=res?.content.footer;
console.log(this.footer,'footer');
    this.loading=false
    })
      }


      openpolicy() {
   this.router.navigate(['ReturnPolicy'])
      }
      openterms(){
        this.router.navigate(['Terms'])
      }
      openAbout(){
        this.router.navigate(['About_Haqeba'])
      }
}
