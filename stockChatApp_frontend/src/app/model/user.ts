import { Roles } from "../enumCollections/enumCollections";
import { UserProfile } from "./userProfile";

export class User {
    id?: string;
    username!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    token?: string;
    roles?: Array<Roles>;
    userProfile?: UserProfile;
}