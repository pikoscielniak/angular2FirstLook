///<reference path="../../node_modules/angular2/src/core/change_detection/pipe_transform.d.ts"/>
import {Pipe} from "angular2/core";
import {PipeTransform} from "angular2/core";

@Pipe({name: 'initCaps'})
export class InitCapsPipe implements PipeTransform {

    transform(value:any, args:any[]):any {
        return value.toLowerCase()
            .replace(/(?:^|\s)[a-z]/g, function (m) {
                return m.toUpperCase();
            });
    };
}