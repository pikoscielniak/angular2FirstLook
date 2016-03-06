import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import 'rxjs/Rx';

import { DashboardComponent } from './dashboard/dashboard';
import {VehiclesComponent} from './vehicles/vehicles'
import {CharactersComponent} from './characters/characters'

@Component({
    selector: 'story-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/vehicles/...', name: 'Vehicles', component: VehiclesComponent},
    {path: '/characters/...', name: 'Characters', component: CharactersComponent}
])
export class AppComponent {

    public menuItems = [
        {caption: 'Dashboard', link: ['Dashboard']},
        {caption: 'Characters', link: ['Characters']},
        {caption: 'Vehicles', link: ['Vehicles']}
    ]

    resetDb() {

    }
}