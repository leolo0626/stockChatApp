import { Roles } from "../enumCollections/enumCollections";

export class User {
    id?: string;
    username!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    token?: string;
    roles?: Array<Roles>;
}