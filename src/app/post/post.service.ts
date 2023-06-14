import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  

  private apiUrl = "http://127.0.0.1:8000/api/"

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http : HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<Post[]>(this.apiUrl+'employees')
  }

  create(post: Post):Observable<Post>{
    return this.http.post<Post>(this.apiUrl+'employee',JSON.stringify(post),this.httpOptions)
  }

  find(id:number):Observable<any>{
     return this.http.get<Post[]>(this.apiUrl+'employee/'+id,this.httpOptions)
     //(`$(this.apiUrl+'employee)/${id}`,this.httpOptions)
     //(this.apiUrl+'employee/'+id)
  }

  update(id:number, post:Post):Observable<Post>{
    return this.http.put<Post>(this.apiUrl+'employee/'+id, JSON.stringify(post), this.httpOptions)
  }
  delete(id:number){
    return this.http.delete<Post>(this.apiUrl+'employee/'+id)
  }
}
