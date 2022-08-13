import { ReactionEnum } from '../enumCollections/enumCollections';
import {Person} from './person';

export interface IPost {
    id?: string, 
    createdAt: Date;
    content: string;
    person: Person;
    likes?: number;
    comments?: Array<IPost>
}


export class Post implements IPost {
    constructor(
        public id: string | undefined ,
        public createdAt: Date,
        public content: string,
        public person: Person, 
        public reactions: Reactions,
        public comments: Array<Comment> = []
        ){}
    
    getTotalReactionCount(): number {
        let totalCount = 0;
        for (const [key, arr] of Object.entries(this.reactions)) {
            totalCount += arr.length;
        }
        return totalCount;
    }

    addReaction(reaction: ReactionEnum, person: Person) {
        if (reaction in this.reactions) {
            this.reactions[reaction] = [
              ...this.reactions[reaction]!,
              person
            ];
          } else {
            this.reactions[reaction] = [person];
        }
    }
}

export class Comment implements IPost {
    constructor(
        public id: string | undefined,
        public createdAt: Date,
        public content: string,
        public person: Person, 
    ){}
}

type Reactions = {
    [ReactionEnum.LIKE]? : Array<Person>;
    [ReactionEnum.LOVE]? : Array<Person>;
    [ReactionEnum.HAHA]? : Array<Person>;
    [ReactionEnum.YAY]? : Array<Person>;
    [ReactionEnum.WOW]? : Array<Person>;
    [ReactionEnum.SAD]? : Array<Person>;
    [ReactionEnum.ANGRY]? : Array<Person>;
}