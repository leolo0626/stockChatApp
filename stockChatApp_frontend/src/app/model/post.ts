import {Person} from './person';

export interface IPost {
    createdAt: Date;
    content: string;
    person: Person;
    likes?: number;
    comments?: Array<IPost>
}


export class Post implements IPost {
    constructor(
        public createdAt: Date,
        public content: string,
        public person: Person, 
        public likes: number,
        public comments: Array<Post> = []
        ){}
}