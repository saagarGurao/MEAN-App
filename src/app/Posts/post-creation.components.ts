import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './post-list/post.service';

@Component ({
selector : 'app-postcreation',
templateUrl: './post-creation.component.html',
styleUrls: ['./post-creation.component.css']
})

export class PostCreationComponent implements OnInit {

  enteredTitle: string;
 enteredContent: string ;


 constructor(public potService: PostService) {

}

 onAddPost( form: NgForm) {
  if (form.invalid) {
    return;
  }

   this.potService.addPost(form.value.title , form.value.content);
   form.reset();
}



ngOnInit() {

}


}
