import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor( public postService: PostService) { }
// this is used to avoid memory leak as it will
// be used only for this module and will not be live for other modules
  private postSub =  new Subscription();

//  posts = [
//   { title: 'First Post', content: 'First Post Content' },
//   { title: 'Second Post', content: 'Second Post Content' },
//   { title: 'Third Post', content: 'Third Post Content' }
// ];
 posts: Post[] = [];



  ngOnInit() {
     this.postService.getPost();
   this.postSub = this.postService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }


  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
