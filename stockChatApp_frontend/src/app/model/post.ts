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
        public reactions: PerosnReactions,
        public comments: Array<Comment> = []
        ){}
    
    getTotalReactionCount(): number {
        let totalCount = 0;
        for (const [key, arr] of Object.entries(this.reactions)) {
            totalCount += arr.length;
        }
        return totalCount;
    }

    private _isPostLikedByPersonId(person: Person) :boolean {
        return person.getPostReaction(this.id!) !== null;
    }

    private _addReactionToPost(reaction: ReactionEnum, person: Person) {
        if (reaction in this.reactions) {
            this.reactions[reaction] = [
              ...this.reactions[reaction]!,
              person
            ];
          } else {
            this.reactions[reaction] = [person];
        }
    }
    
    // upsertReaction : update and insert
    addReaction(reaction: ReactionEnum, person: Person) { 
        console.log(person)
        if (this._isPostLikedByPersonId(person)) {
            const prevReaction = person.getPostReaction(this.id!);
            if (prevReaction === reaction) return ;
            // remove id and add the id 
            this.reactions[prevReaction!] = [...this.reactions[prevReaction!]!.filter((p: Person) => p.id !== person.id)]
        }
        this._addReactionToPost(reaction, person)
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

type PerosnReactions = {
    [ReactionEnum.LIKE]? : Array<Person>;
    [ReactionEnum.LOVE]? : Array<Person>;
    [ReactionEnum.HAHA]? : Array<Person>;
    [ReactionEnum.YAY]? : Array<Person>;
    [ReactionEnum.WOW]? : Array<Person>;
    [ReactionEnum.SAD]? : Array<Person>;
    [ReactionEnum.ANGRY]? : Array<Person>;
}