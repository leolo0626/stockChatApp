import { ReactionEnum } from '../enumCollections/enumCollections';
import { User } from './user';

export interface IPost {
    id?: string, 
    createdAt: Date;
    content: string;
    user: User;
    likes?: number;
    comments?: Array<IPost>
}


export class Post implements IPost {
    constructor(
        public id: string | undefined ,
        public createdAt: Date,
        public content: string,
        public user: User, 
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

    private _isPostLikedByPersonId(user: User) :boolean {
        // return person.getPostReaction(this.id!) !== null;
        return false;
    }

    private _addReactionToPost(reaction: ReactionEnum, user: User) {
        if (reaction in this.reactions) {
            this.reactions[reaction] = [
              ...this.reactions[reaction]!,
              user
            ];
          } else {
            this.reactions[reaction] = [user];
        }
    }
    
    // upsertReaction : update and insert
    addReaction(reaction: ReactionEnum, user: User) { 
        console.log(user)
        if (this._isPostLikedByPersonId(user)) {
            // const prevReaction = user.getPostReaction(this.id!);
            // if (prevReaction === reaction) return ;
            // // remove id and add the id 
            // this.reactions[prevReaction!] = [...this.reactions[prevReaction!]!.filter((p: User) => p.id !== person.id)]
        }
        this._addReactionToPost(reaction, user)
    }
}

export class Comment implements IPost {
    constructor(
        public id: string | undefined,
        public createdAt: Date,
        public content: string,
        public user: User, 
    ){}
}

type PerosnReactions = {
    [ReactionEnum.LIKE]? : Array<User>;
    [ReactionEnum.LOVE]? : Array<User>;
    [ReactionEnum.HAHA]? : Array<User>;
    [ReactionEnum.YAY]? : Array<User>;
    [ReactionEnum.WOW]? : Array<User>;
    [ReactionEnum.SAD]? : Array<User>;
    [ReactionEnum.ANGRY]? : Array<User>;
}