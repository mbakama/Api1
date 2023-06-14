import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
// import { Post } from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];

  constructor(private serviceData: PostService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.serviceData.getAll().subscribe((res) => {
      this.posts = res.data;
      console.log(this.posts);
    });
  }
  deleteData(id: number) {
    this.serviceData.delete(id).subscribe((res) => {
      this.posts = this.posts.filter((item) => item.id !== id);
      console.log('id supprimer avec success');
    });
  }
}
