import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import 'rxjs/Rx';

import {CharactersComponent} from './characters/characters';
import { DashboardComponent } from './dashboard/dashboard';
import {VehiclesComponent} from './vehicles/vehicles';
import {ModalComponent, ModalService, SpinnerService,SpinnerComponent,ToastComponent, ToastService} from './blocks/blocks';

const KEY_ESC = 27;

@Component({
    selector: 'story-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, ModalComponent, SpinnerComponent, ToastComponent],
    providers: [
        ROUTER_PROVIDERS,
        ModalService,
        SpinnerService,
        ToastService
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

    constructor(private _service:ModalService) {
    }

    resetDb() {
        this._service.activate("yeah", "fuck");
    }
}