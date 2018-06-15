import { Component, OnInit } from '@angular/core';

// Models
import { Blog } from '../../../shared/models/blog.model';

// Enums
import { BlogType } from '../../../shared/enums/blog-type.enum';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit {

  public blogPosts: Array<Blog>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogPosts().subscribe(x => this.blogPosts = x);
  }

}
