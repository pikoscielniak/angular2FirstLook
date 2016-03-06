import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'story-vehicle',
    templateUrl: 'app/vehicles/vehicle.component.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    directives: [ROUTER_DIRECTIVES]
})
export class VehicleComponent {

}