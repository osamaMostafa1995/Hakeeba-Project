import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  showlandingPage():Observable<any>{
 return this.http.get('http://admin.hqeba.com/api/landing-page')
}
}
