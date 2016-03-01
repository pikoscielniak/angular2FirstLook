import {Component} from "angular2/core";
import {CharacterComponent} from "./character.component";
import {Character} from "./character";
@Component({
    selector: 'my-character-list',
    templateUrl: 'app/character-list.component.html',
    directives: [CharacterComponent]
})
export class CharacterListComponent {
    selectedCharacter:Character;

    characters = [
        new Character(1, "Han Solo"),
        new Character(2, 'Luke Skywalker'),
        new Character(3, 'BB-8'),
        new Character(4, 'Rey')
    ];

    select(character:Character) {
        this.selectedCharacter = character;
    }
}
