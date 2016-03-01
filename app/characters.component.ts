import {Component, OnInit, Output, Input, EventEmitter} from "angular2/core";
import {CharacterComponent} from "./character.component";
import {CharacterService} from "./character.service";
import {Character} from "./character.service";

@Component({
    selector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterComponent],
    providers: [CharacterService]
})
export class CharactersComponent implements OnInit {

    @Output() changed = new EventEmitter<Character>();
    @Input() storyId:number;

    characters:Character[];
    selectedCharacter:Character;

    constructor(private _characterService:CharacterService) {

    }

    ngOnInit():any {
        this._characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }

    select(selectedCharacter:Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}
