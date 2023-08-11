import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form! : FormGroup


  constructor(private service : PostService, private routes:Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required]),
      prenom : new FormControl('',[Validators.required])
    })
  }

  get f(){
   return this.form.controls
  }
  submit(){
    this.service.create(this.form.value).subscribe(res =>{
      // console.log('success')
      this.routes.navigateByUrl('post/index')
    })
  }
}
