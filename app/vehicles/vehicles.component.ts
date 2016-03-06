import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {VehicleService} from "./vehicle.service";
import {VehicleListComponent} from "./vehicle-list.component";
import {VehicleComponent} from "./vehicle.component";

@Component({
    selector: 'story-vehicles-root',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [VehicleService]
})
@RouteConfig([
    {path: '/', name: 'Vehicles', component: VehicleListComponent, useAsDefault: true},
    {path: '/list/:id', name: 'Vehicles', component: VehicleListComponent},
    {path: '/:id', name: 'Vehicles', component: VehicleComponent}
])
export class VehiclesComponent {

}