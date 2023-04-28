import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  terms: any;
loading:boolean=true;
  constructor(private ReturnPolicy:HomeService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.ReturnPolicy.showlandingPage().subscribe((data:any)=>{
      console.log(data, 'logpo');
  this.terms=data.content.footer?.terms
  console.log(this.terms);
this.loading=false
    })
  }
}
