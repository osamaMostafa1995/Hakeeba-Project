import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about-haqeba',
  templateUrl: './about-haqeba.component.html',
  styleUrls: ['./about-haqeba.component.scss']
})
export class AboutHaqebaComponent implements OnInit {
  Policy: any;
  loading:boolean=true;
  constructor(private ReturnAbout:HomeService) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.ReturnAbout.showlandingPage().subscribe((data:any)=>{
    console.log(data, 'logpo');
this.Policy=data.content.footer?.about
console.log(this.Policy);
this.loading=false
  })
}
}
