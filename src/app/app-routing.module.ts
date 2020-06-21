import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CharacterComponent } from "./character/character.component";
import { CharacterDetailComponent } from "./character/character-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { 
        path: "",
        component: ShellComponent, 
        children: [
            { path: "characters", component: CharacterComponent },
            { path: "characters/:name", component: CharacterDetailComponent },
            { path: "about", component: AboutComponent}
        ], 
    } 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
