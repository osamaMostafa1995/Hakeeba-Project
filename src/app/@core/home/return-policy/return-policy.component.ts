import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.component.html',
  styleUrls: ['./return-policy.component.scss']
})
export class ReturnPolicyComponent implements OnInit {
  Policy: any;
  loading:boolean=true;
  constructor(private ReturnPolicy:HomeService) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.ReturnPolicy.showlandingPage().subscribe((data:any)=>{
    console.log(data, 'logpo');
this.Policy=data.content.footer?.policy
console.log(this.Policy);
this.loading=false
  })
}
}
