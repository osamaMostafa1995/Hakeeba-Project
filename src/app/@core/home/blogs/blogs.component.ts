import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
BlogsSpecs:any=[];
  blogs: any=[];
  specid:any=0
  filterBolgs: any;
  loading:boolean=true;
  constructor(private spec:HomeService , private router:Router ) { }

  ngOnInit(): void {
    AOS.refresh();
    AOS.init();
    this.getSpecsBlogs();
    this.getBlogs()
  }
getBlogs(){
  this.spec.showAllBlogs(null).subscribe((data:any)=>{
    this.blogs=data?.content.blogs;
    this.loading=false
  })
}
getSpecsBlogs(){
  this.loading=true
  this.spec.showBlogsSpecs().subscribe((data:any)=>{
this.BlogsSpecs=data.content;
console.log(this.BlogsSpecs , 'blogs');
this.loading=false
  })
}
changeSpec(item:any){

  this.loading=true;
 this.getBlogs()
this.specid=item.id;
if(item.id==0){
return this.filterBolgs=this.blogs
}else{
this.blogs=this.blogs.filter((e:any)=>{
 this.filterBolgs=this.blogs.filter((e:any)=>{
  return e.specs.some((a:any)=>{
    return a.id==item.id
  })
 })
})
}
}
gotoBlog(item:any){
this.router.navigate([`blogs/${item}`], {
  queryParams:{
    Blog_id:item
  }
})
}
}
