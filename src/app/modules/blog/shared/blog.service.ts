import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public getBlogPosts(): Observable<any> {
    return this.http.get('http://travelblogapp.azurewebsites.net/api/Blogs');
  }
}
