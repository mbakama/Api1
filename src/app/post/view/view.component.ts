 import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id : any;
  post!: Post ;
  data: any;


  constructor(public service : PostService, private route:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['postId']; 
    this.find()
  }

  find(){
    this.service.find(this.id).subscribe(res=>{
      this.post = res.data; 
      
    });
  }
  // find(){
  //   this.data = this.route.snapshot.params['postId']; 
  //   this.service.find(this.data).subscribe((response)=>{
  //       this.data = response
  //       console.log(this.data)
  //   })
  // }
  
}

