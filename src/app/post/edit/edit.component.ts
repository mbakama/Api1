
import { Post } from './../post';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id!: number;
  posts!:Post;
  form!: FormGroup


  constructor(public service : PostService,private route:ActivatedRoute, private routes:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.service.find(this.id).subscribe((data:Post)=>{
      this.posts = data;
      console.log(this.posts)
    })
    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required]),
      prenom : new FormControl('',[Validators.required])
    })
  }

  get f(){
   return this.form.controls
  }
  submit(){
    console.log(this.form.value)
    this.service.update(this.id, this.form.value).subscribe((res:any): void =>{
      console.log('success')
      this.routes.navigateByUrl('post/index')
    })
  }
}
