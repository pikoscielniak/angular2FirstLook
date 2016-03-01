import {bootstrap} from 'angular2/platform/browser'
import {Character} from './character.component'
import {CharacterListComponent} from "./character-list.component";

bootstrap(CharacterListComponent)
    .then(success => console.log("Bootstrap success"))
    .then(error => console.log(error));
