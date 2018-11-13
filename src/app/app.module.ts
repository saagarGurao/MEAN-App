import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
   MatInputModule,
   MatCardModule,
   MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreationComponent } from './Posts/post-creation.components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostService } from './Posts/post-list/post.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostCreationComponent,
    HeaderComponent,
    PostListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  HttpClientModule


  ],
  providers: [ PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
