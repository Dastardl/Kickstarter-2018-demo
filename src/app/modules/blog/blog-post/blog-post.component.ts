import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../../shared/models/blog.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit() {
  }

}
