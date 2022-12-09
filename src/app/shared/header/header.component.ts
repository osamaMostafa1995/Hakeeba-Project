import { Component, HostListener, OnInit } from '@angular/core';
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
  constructor(private logo:HomeService) { }

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
this.logoImg=`http://admin.hqeba.com${res.content.logo}`
this.loading=false
})
  }
}
