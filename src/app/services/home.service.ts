import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  showlandingPage():Observable<any>{
 return this.http.get('https://admin.hqeba.sa/api/landing-page')
}
showPrice():Observable<any>{
  return this.http.get('https://admin.hqeba.sa/api/prices')
 }

showBlogsSpecs():Observable<any>{
  return this.http.get('https://admin.hqeba.sa/api/specializations')
 }
 showAllBlogs(spec:any):Observable<any>{
  return this.http.post('https://admin.hqeba.sa/api/blogs',spec)
 }
 showBlogDetails(id:any):Observable<any>{
  return this.http.post('https://admin.hqeba.sa/api/blog-details',id)
 }
paycenter(form:any):Observable<any>{
  return this.http.post('https://admin.hqeba.sa/api/add-subscription',form)
 }
}
