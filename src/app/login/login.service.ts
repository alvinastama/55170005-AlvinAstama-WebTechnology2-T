import { Injectable } from '@angular/core';
import * as as from "tns-core-modules/application-settings";
const firebase = require("nativescript-plugin-firebase");

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    
    constructor() { }
    
    isLoggedIn() {
        return new Promise((resolve, reject) => {
            firebase.getCurrentUser()
            .then((user) => {
                resolve(user);
            })
            .catch((err) => {
                reject(err);
            });
        })
    }

    login(){
        return new Promise((resolve, reject) =>{
            firebase.login({
                type: firebase.LoginType.GOOGLE,
            }).then(
                function (result) {
                    // login berhasil
                    JSON.stringify(result);
                    resolve(result);
                },
                function (errorMessage) {
                    //login gagal
                    console.log(errorMessage);
                    reject(errorMessage);
                }
            );
        })
    }

    logout() {
        firebase.logout();
    }
}