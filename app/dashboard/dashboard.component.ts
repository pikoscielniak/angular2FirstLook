import {Component} from "angular2/core";
import {OnDestroy} from "angular2/core";
import {OnInit} from "angular2/core";
@Component({
    selector:'my-dashboard',
    templateUrl:'app/dashboard/dashboard.component.html',
    styleUrls:['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {


    ngOnDestroy():any {
        return undefined;
    }

    ngOnInit():any {
        return undefined;
    }

}