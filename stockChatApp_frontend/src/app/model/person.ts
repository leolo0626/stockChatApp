import { ReactionEnum } from "../enumCollections/enumCollections";

export class Person {
    constructor(
        public id: string, 
        public name: string,
        public avatar: string, 
        public postReactions : { [key: string] : ReactionEnum } = {} ,
        ){}
    
    private _checkPostReactionExist (postId: string) : boolean {
        return postId in this.postReactions;
    }

    addPostReaction(postId: string, reaction: ReactionEnum) {
        console.log(postId);
        this.postReactions[postId] = reaction;
    }

    getPostReaction(postId: string): ReactionEnum | null {
        return this._checkPostReactionExist(postId) ? this.postReactions[postId] : null;
    }
}

