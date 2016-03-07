import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {CharacterListComponent} from "./character-list.component";
import {CharacterComponent} from "./character.component";
@Component({
    selector: 'story-characters-root',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Characters', component: CharacterListComponent, useAsDefault: true},
    {path: '/list/:id', name: 'Characters', component: CharacterListComponent},
    {path: '/:id', name: 'Character', component: CharacterComponent}
])
export class CharactersComponent {
}