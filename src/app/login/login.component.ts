import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { RouterExtensions } from 'nativescript-angular/router';

import * as dialog from "tns-core-modules/ui/dialogs";
@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    user: User = { username: "username", password: "password" };
    loginForm: FormGroup = this.fb.group({
        username: [this.user.username, [Validators.required]],
        password: [this.user.password, [Validators.required]],
    });
    
    username = this.loginForm.get("username");
    password = this.loginForm.get("password");
    constructor(
        private page: Page, 
        private fb: FormBuilder,
        private ls: LoginService,
        private router: RouterExtensions
    ) { 
        page.actionBarHidden = true;
    }
    
    ngOnInit() { 
        this.ls.isLoggedIn().then(
            (res) => {
                this.router.navigate(["/characters"], {clearHistory: true});
            },
            (err) => {
                console.log(err);
            }
        )
    }

    login(){
        this.ls.login().then((result)=> {
            this.router.navigate(["/characters"], {clearHistory: true});
        }), (err) => {
            console.log(err);
            alert("Login dengan Google error, Silakan gunakan akun lain atau hubungi admin");
        }
    }
}