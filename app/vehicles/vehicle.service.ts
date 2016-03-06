import {Injectable} from "angular2/core";

export interface Vehicle {
    id: number;
    name: string;
    type: string;
}

@Injectable()
export class VehicleService {
    constructor() {
    }
}
