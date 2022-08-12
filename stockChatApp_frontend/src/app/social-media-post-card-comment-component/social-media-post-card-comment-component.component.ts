import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';


@Component({
  selector: 'app-social-media-post-card-comment-component',
  templateUrl: './social-media-post-card-comment-component.component.html',
  styleUrls: ['./social-media-post-card-comment-component.component.css']
})
export class SocialMediaPostCardCommentComponentComponent implements OnInit {

  @Input() public comment : Post;
  constructor() { }

  ngOnInit(): void {
  }

}
