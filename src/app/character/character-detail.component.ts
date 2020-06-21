import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CharacterService } from "./character.service";

@Component({
    selector: "ns-details",
    templateUrl: "./character-detail.component.html"
})
export class CharacterDetailComponent implements OnInit {
    name;
    character = {};
    
    constructor(
        private ps: CharacterService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ps.getCharacter(this.name).subscribe(
            (response: any) => {
                this.character = response
            }
        );
    }
}
