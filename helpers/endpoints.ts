import { USERNAME,PASSWORD } from "./Constants";

export enum endpoints  {
    USERS_SERVICE = "/api/users",
    AUTHTOKENURL =`/authorizationserver/oauth/token?client_id=mobile&client_secret=secret&scope=basic&grant_type=password&username=ktr@yopmail.com&password=Test@123`
}