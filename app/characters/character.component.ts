import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'story-character',
    templateUrl: 'app/characters/character.component.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    directives: [ROUTER_DIRECTIVES]
})
export class CharacterComponent {



}