import {Inject, Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import 'rxjs/Rx';

export interface Character {
    id: number;
    name: string;
}

@Injectable()
export class CharacterService {
    constructor(private _http:Http) {
    }

    getCharacters(storyId:number) {
        return this._http.get('app/characters.json')
            .map((response: Response) => response.json().data);
    }
}
