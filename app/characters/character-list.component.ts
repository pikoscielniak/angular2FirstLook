import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'story-characters',
    templateUrl: './app/characters/character-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['./app/characters/character-list.component.css']
})
export class CharacterListComponent {

}