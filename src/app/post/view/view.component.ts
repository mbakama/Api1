 import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id! : number;
  post!: Post;

  constructor(public service : PostService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.find()
    
  }
  find(){
    this.id = this.route.snapshot.params['postId'];

    this.service.find(this.id).subscribe((data:Post)=>{
      this.post = data
      console.log(this.post)
    })
  }
}