import { Injectable } from '@angular/core';

@Injectable()
export class UrlConfig {
    constructor() {
        return {
            apiEndPoint: "http://localhost:3000/api/",
            users: {
                login: "user/login",
                register: "user/signup",
                getAll: "user/getAllUser",
                getUserID: "user/getUser",
                UpdateProfile: "user/profile"
            }
        }
    }
}