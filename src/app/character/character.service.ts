import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class CharacterService {
    baseUrl = `https://www.breakingbadapi.com/api`;
    
    constructor(private http: HttpClient){}

    getCharacters() {
        return this.http.get(`${this.baseUrl}/characters`)
    }

    getCharacter(name: string) {
        return this.http.get(`${this.baseUrl}/characters/${name}`)
    }
}
