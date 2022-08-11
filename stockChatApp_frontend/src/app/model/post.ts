import {Person} from './person';

export class Post {
    constructor(
        public createdAt: Date,
        public content: string,
        public person: Person, 
        public likes: number
        ){}
}
