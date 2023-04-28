import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  logoImg: any;
  loading:boolean=true
  status: boolean = false;
  constructor(private logo:HomeService , private router:Router) { }

  ngOnInit(): void {
    this.getLogo()
  }
  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
  getLogo(){
this.logo.showlandingPage().subscribe((res:any)=>{
  console.log(res,'logo');
this.logoImg=`https://admin.hqeba.sa${res?.content?.logo}`
this.loading=false
})
  }


  ///////////////////////

  toggle(){

   this.status= !this.status
   console.log(this.status);

  }
closeMenu(){
  setTimeout(() => {
    this.status=false
  }, 1000);
}
}
