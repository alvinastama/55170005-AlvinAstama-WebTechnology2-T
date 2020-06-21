import { Component, OnInit } from "@angular/core";
import { CharacterService } from "./character.service";
import { BehaviorSubject } from "rxjs";
@Component({
    selector: "ns-items",
    templateUrl: "./character.component.html"
})
export class CharacterComponent implements OnInit {
    characters = [];
    characters$: BehaviorSubject<Array<any>>;
    constructor(private ps: CharacterService) {
        this.characters$ = new BehaviorSubject([]);
    }

    ngOnInit(): void {
        this.ps.getCharacters().subscribe(
            (data: any) => {
                this.characters.push(...data);
                this.characters$.next(this.characters);
            },
            (err) => console.log(err)
        );
    }
}
