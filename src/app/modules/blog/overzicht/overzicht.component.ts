import { Component, OnInit } from '@angular/core';

// Models
import { Blog } from '../../../shared/models/blog.model';

// Enums
import { BlogType } from '../../../shared/enums/blog-type.enum';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit {

  public blogPosts: Array<Blog>;

  constructor() { }

  ngOnInit() {
    this.blogPosts = [
      new Blog({ title: 'This is an article', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'So nice', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Even with a longer title', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Heavenly good', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Must see artifacts discovered', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Saaie zever op tv', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Morgen weer een hele dag naar Brussel', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Hoeveel artikels heb ik wel niet', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Bijna gedaan met typen voor vandaag', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Zou ik er ook een in het frans maken?', type: BlogType.javascript, date: '24 augustus 2017' }),
      new Blog({ title: 'Nah, teveel werk!', type: BlogType.javascript, date: '24 augustus 2017' }),
    ];
  }

}
