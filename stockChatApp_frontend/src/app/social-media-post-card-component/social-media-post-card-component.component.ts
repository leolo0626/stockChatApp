import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-social-media-post-card-component',
  templateUrl: './social-media-post-card-component.component.html',
  styleUrls: ['./social-media-post-card-component.component.css']
})
export class SocialMediaPostCardComponentComponent implements OnInit {

  @Input() public post: Post; 
  
  constructor() { }


  ngOnInit(): void {
  }

}
