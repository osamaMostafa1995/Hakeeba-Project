import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-private-center-information',
  templateUrl: './private-center-information.component.html',
  styleUrls: ['./private-center-information.component.scss']
})
export class PrivateCenterInformationComponent implements OnInit {

  constructor(private logo :HomeService) { }

  ngOnInit(): void {
  }
}
