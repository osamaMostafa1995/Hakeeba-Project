import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-center-add-information',
  templateUrl: './center-add-information.component.html',
  styleUrls: ['./center-add-information.component.scss']
})
export class CenterAddInformationComponent implements OnInit {

  myData: any=[];
  selectedCar:any=''

  constructor(private http: HttpClient , private router :Router , private rout:ActivatedRoute ,    private t:ToastrService) { }

  ngOnInit(): void {
    this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
        const countries = [];
        for (let i = 0; i < resp.length; ++i) {
            const country = resp[i];
            countries.push({ text: country.text, value: country.value });
        }
        this.myData = countries;
        console.log(this.myData );

    });
}
route(){
  this.router.navigate(['../private_center_information'] ,{ relativeTo: this.rout})

  }}
