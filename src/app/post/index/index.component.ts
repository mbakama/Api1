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
  tabs : string [] = ['accueil','blog','contact'];
  activeTaxIndex : number = 0;
  dtoptions : DataTables.Settings={};
  constructor(private serviceData: PostService) {}

  ngOnInit(): void {
    this.getAll();
    this.dtoptions={
      pagingType : 'full_numbers',
    }
  }
  tabChange(tabIndex:number){
    this.activeTaxIndex = tabIndex;
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
      // console.log('id supprimer avec success');
      alert('data deleted');
    });
  }
}
