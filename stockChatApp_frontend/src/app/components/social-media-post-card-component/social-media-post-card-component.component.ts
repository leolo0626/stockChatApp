import { Component, Input, OnInit } from '@angular/core';
import { Comment, Post } from '../../model/post';
import { Person } from '../../model/person';
import { ReactionEnum } from 'src/app/enumCollections/enumCollections';
import {v4 as uuid} from 'uuid'; 

@Component({
  selector: 'app-social-media-post-card-component',
  templateUrl: './social-media-post-card-component.component.html',
  styleUrls: ['./social-media-post-card-component.component.css']
})
export class SocialMediaPostCardComponentComponent implements OnInit {

  @Input() public post: Post;
  @Input() public user: Person;
  public isShowComment: boolean = false;
  public isShowReactPopUp: boolean = false;
  public isReactHiding: boolean = false;
  public newCommentContent: string = '';
  public reactionButtonName: string;

  public readonly reactions = [
    { id: ReactionEnum.LIKE, img: "http://i.imgur.com/LwCYmcM.gif", emoji: '&#128077', eng_name: 'LIKE' },
    { id: ReactionEnum.LOVE, img: "http://i.imgur.com/k5jMsaH.gif", emoji: '&#x1F496', eng_name: 'LOVE' },
    { id: ReactionEnum.HAHA, img: "http://i.imgur.com/f93vCxM.gif", emoji: '&#x1F602', eng_name: 'HAHA' },
    { id: ReactionEnum.YAY, img: "http://i.imgur.com/a44ke8c.gif", emoji: '&#x1F60A', eng_name: 'YAYA' },
    { id: ReactionEnum.WOW, img: "http://i.imgur.com/9xTkN93.gif", emoji: '&#x1F929', eng_name: 'WOW' },
    { id: ReactionEnum.SAD, img: "http://i.imgur.com/tFOrN5d.gif", emoji: '&#128546', eng_name: 'SAD' },
    { id: ReactionEnum.ANGRY, img: "http://i.imgur.com/1MgcQg0.gif", emoji: '&#128544', eng_name: 'ANGRY' },
  ]



  constructor() {
  }


  ngOnInit(): void {
    this.reactionButtonName = this.user.getPostReaction(this.post.id!) || 'Reaction' 
  }

  loadComments() {
    if (this.isShowComment) {
      return;
    }
    this.isShowComment = true;

    this.post.comments = [
      new Comment(
        uuid(),
        new Date(),
        "無料で使えるかわいいイラストの素材集です。個人利用・商用利用ともに完全無料。季節のイベントのイラストや動物や子供のイラストなど、使いやすい ...",
        new Person(
          "Calico",
          "https://1.bp.blogspot.com/-1mAMdaOBddY/VaMN9yDgfBI/AAAAAAAAvgw/dInAeqNXapo/s800/youngwoman_37.png"
        )
      ),
      new Comment(
        uuid(),
        new Date(),
        "いらすとやは季節のイベント・動物・子供などのかわいいイラストが沢山見つかるフリー素材サイトです。",
        new Person(
          "Meko Chung",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvThbsJRKdRw-JqFhZsCK-09IASZH5bPmRzZFKuDyvXc0Id_f8fJk-OCx-VQbJRgtwgc&usqp=CAU"
        )
      ),
      new Comment(
        uuid(),
        new Date(),
        "彭博电视是一个通过有线电视和卫星传送电视信号的电视台，其总部位于纽约证券交易所。该电视台的各频道24小时不间断播放商业和财经相关资讯，并提供了独特的多资讯画面。 现时，彭博电视于全世界共有多个频道，分别在美国本土、印度、土耳其、欧洲、亚太地区、蒙古、加拿大、澳洲和其余地区播出",
        new Person(
          "Chicken",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0-5udIGPZj7wv4PsOYdAsXKdqzXL1fJYdQ&usqp=CAU"
        ),
      )
    ]
  }


  increaseLikes() {
    this.post.addReaction(ReactionEnum.LIKE, this.user);
  }

  handleClickReact(reactionId: ReactionEnum) {
    console.log(reactionId);
    this.post.addReaction(reactionId, this.user);
    console.log(this.post.reactions);
  }

  handleMouseOverReact() {
    this.isShowReactPopUp = true;
    this.isReactHiding = false;
  }

  handleMouseLeaveReact() {
    this.isShowReactPopUp = false;
  }

  handleCommentSubmission() {
    const comment: Comment = new Comment(
      uuid(),
      new Date(),
      this.newCommentContent,
      this.user
    )
    this.post.comments = [
      ...this.post.comments,
      comment
    ]
    this.newCommentContent = "";
  }

}
