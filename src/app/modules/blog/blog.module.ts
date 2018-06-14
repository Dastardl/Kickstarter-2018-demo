import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { OverzichtComponent } from './overzicht/overzicht.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogPostComponent, BlogDetailComponent, OverzichtComponent]
})
export class BlogModule { }
