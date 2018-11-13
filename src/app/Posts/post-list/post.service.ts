import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PostService {


  constructor( private http: HttpClient) {

  }
 private posts: Post[] = [] ;
 private getPostUpdated = new Subject <Post[]>();
  getPost() {

    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/path')
    .subscribe((postData) => {
       this.posts = postData.posts;
       this.getPostUpdated.next([...this.posts]);

    });
    // Spread operator used to have copy of posts array not the referance..
   // return [...this.posts] ;
  }

  getPostUpdateListener() {
     return this.getPostUpdated.asObservable();
  }

  addPost( title: string, content: string) {
 const post: Post = { id: null, title: title, content: content};
 this.posts.push(post);
 this.getPostUpdated.next([...this.posts]);
  }

}
