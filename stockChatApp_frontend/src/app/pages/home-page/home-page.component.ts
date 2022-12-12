import { Component, OnInit } from '@angular/core';
import { ReactionEnum } from 'src/app/enumCollections/enumCollections';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { Post } from '../../model/post';
import {v4 as uuid} from 'uuid'; 
import {MatDialog} from '@angular/material/dialog';
import { PostEditorComponent } from 'src/app/components/post-editor/post-editor.component';
import { fakeUserDataList } from 'src/app/data/fakePersonData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public posts: Array<Post>;
  public user: User;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.posts = [
      new Post( 
          uuid(),
          new Date(),
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          fakeUserDataList[0],
          {
            [ReactionEnum.LIKE] : [fakeUserDataList[2]]
          }
        ),
        new Post( 
          uuid(),
          new Date(),
          "無料で使えるかわいいイラストの素材集です。個人利用・商用利用ともに完全無料。季節のイベントのイラストや動物や子供のイラストなど、使いやすい ...",
          fakeUserDataList[1],
          {
            [ReactionEnum.LIKE] : [fakeUserDataList[2]]
          }
        ),
        new Post( 
          uuid(),
          new Date(),
          "いらすとやは季節のイベント・動物・子供などのかわいいイラストが沢山見つかるフリー素材サイトです。",
          fakeUserDataList[2],
          {
            [ReactionEnum.LIKE] : [fakeUserDataList[2]]
          }
        ),
        new Post( 
          uuid(),
          new Date(),
          "彭博电视是一个通过有线电视和卫星传送电视信号的电视台，其总部位于纽约证券交易所。该电视台的各频道24小时不间断播放商业和财经相关资讯，并提供了独特的多资讯画面。 现时，彭博电视于全世界共有多个频道，分别在美国本土、印度、土耳其、欧洲、亚太地区、蒙古、加拿大、澳洲和其余地区播出",
          fakeUserDataList[3],
          {
            [ReactionEnum.LIKE] : [fakeUserDataList[2]]
          }
        )
    ]
  }

  addReactionToPost({reactionId, post} : {reactionId: ReactionEnum,
    post: Post
  }) {
    const postToBeUpdated = this.posts.find((p:Post) => p.id === post.id)
    postToBeUpdated!.addReaction(reactionId , this.user)
    // this.user.addPostReaction(post.id!, reactionId)
    console.log("Hi I am outside", reactionId)
    console.log("HomePage", this.user,)
  }

  openDialog() {
    this.dialog.open(PostEditorComponent)
  }

}
