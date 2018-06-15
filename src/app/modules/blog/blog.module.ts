import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { OverzichtComponent } from './overzicht/overzicht.component';

import { BlogService } from './shared/blog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BlogService],
  declarations: [BlogPostComponent, BlogDetailComponent, OverzichtComponent]
})
export class BlogModule { }
