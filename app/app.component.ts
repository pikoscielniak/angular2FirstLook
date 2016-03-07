import {Component, provide} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS,XHRBackend} from "angular2/http";
import 'rxjs/Rx';

import { InMemoryBackendConfig, InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
import {InMemoryStoryService} from '../api/in-memory-story.service';
import {CharactersComponent} from './characters/characters';
import { DashboardComponent } from './dashboard/dashboard';
import {VehiclesComponent} from './vehicles/vehicles';
import {CONFIG, MessageService} from './shared/shared';
import {EntityService, ExceptionService, ModalComponent, ModalService, SpinnerService,SpinnerComponent,ToastComponent, ToastService} from './blocks/blocks';

@Component({
    selector: 'story-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, ModalComponent, SpinnerComponent, ToastComponent],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(XHRBackend, { useClass: InMemoryBackendService }),
        provide(SEED_DATA, { useClass: InMemoryStoryService }),
        provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
        EntityService,
        ExceptionService,
        MessageService,
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

    constructor(private _messageService:MessageService,
                private _modalService:ModalService) {
    }

    resetDb() {
        let msg = 'Are you sure you want to reset the database?';
        this._modalService.activate(msg).then(responseOK => {
            if (responseOK) {
                this._messageService.resetDb();
            }
        });
    }
}