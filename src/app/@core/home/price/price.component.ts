import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  price: any;
  loading: boolean=true;

  constructor(private logo:HomeService , private router:Router) { }

  ngOnInit(): void {
    AOS.refresh();
    AOS.init();
    this.getLogo()
  }
  routerCenter(){
    this.router.navigate(['create_center'])
  }
  getLogo(){
    this.logo.showPrice().subscribe((res:any)=>{
      console.log(res,'langing');
this.price= res?.content.bundle
this.loading=false
    })
      }
}
