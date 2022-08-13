import { Component, OnInit } from '@angular/core';
import { ReactionEnum } from 'src/app/enumCollections/enumCollections';
import { UserService } from 'src/app/services/user.service';
import { Person } from '../../model/person';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public posts: Array<Post>;
  public user: Person;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.posts = [
      new Post( 
          new Date(),
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          new Person(
            "Leo Lo", 
            "https://3.bp.blogspot.com/-xT36Kpq_T_E/W1a5CIwueAI/AAAAAAABNjc/nkwOIiInph0FSJ3cpJHdE1Ghu60HX5BfgCLcBGAs/s800/niyakeru_takuramu_ayashii_man.png"
          ),
          {
            [ReactionEnum.LIKE] : [new Person("Leo Lo", "")]
          }
        ),
        new Post( 
          new Date(),
          "無料で使えるかわいいイラストの素材集です。個人利用・商用利用ともに完全無料。季節のイベントのイラストや動物や子供のイラストなど、使いやすい ...",
          new Person(
            "Calico", 
            "https://1.bp.blogspot.com/-1mAMdaOBddY/VaMN9yDgfBI/AAAAAAAAvgw/dInAeqNXapo/s800/youngwoman_37.png"
          ),
          {
            [ReactionEnum.LIKE] : [new Person("Leo Lo", "")]
          }
        ),
        new Post( 
          new Date(),
          "いらすとやは季節のイベント・動物・子供などのかわいいイラストが沢山見つかるフリー素材サイトです。",
          new Person(
            "Meko Chung", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvThbsJRKdRw-JqFhZsCK-09IASZH5bPmRzZFKuDyvXc0Id_f8fJk-OCx-VQbJRgtwgc&usqp=CAU"
          ),
          {
            [ReactionEnum.LIKE] : [new Person("Leo Lo", "")]
          }
        ),
        new Post( 
          new Date(),
          "彭博电视是一个通过有线电视和卫星传送电视信号的电视台，其总部位于纽约证券交易所。该电视台的各频道24小时不间断播放商业和财经相关资讯，并提供了独特的多资讯画面。 现时，彭博电视于全世界共有多个频道，分别在美国本土、印度、土耳其、欧洲、亚太地区、蒙古、加拿大、澳洲和其余地区播出",
          new Person(
            "Chicken", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0-5udIGPZj7wv4PsOYdAsXKdqzXL1fJYdQ&usqp=CAU"
          ),
          {
            [ReactionEnum.LIKE] : [new Person("Leo Lo", "")]
          }
        )
    ]
  }

}
