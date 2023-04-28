import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
blog_id:any;
main_blog:any;
relativeBlog:any;
loading:boolean=true
  constructor(private route : ActivatedRoute , private blog:HomeService , private router:Router) {
    this.blog_id=this.route.snapshot.queryParamMap.get('Blog_id')
   }

  ngOnInit(): void {
    AOS.refresh();
    AOS.init();
    this.getDetails()
  }
getDetails(){
  this.blog.showBlogDetails({id:this.blog_id}).subscribe((data:any)=>{
this.main_blog=data.content;
console.log(this.main_blog);
this.relativeBlog=this.main_blog.blogs_relative;
console.log(this.relativeBlog , 'relative');
this.loading=false;
  })
}
anotherBlog(item:any){
  this.loading=true;
  this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
    Blog_id:item.id
  }});
  this.blog.showBlogDetails({id:item.id}).subscribe((data:any)=>{
    this.main_blog=data.content;
    console.log(this.main_blog);
    this.relativeBlog=this.main_blog.blogs_relative;
    console.log(this.relativeBlog , 'relative');
    this.loading=false;
      })
}
}
