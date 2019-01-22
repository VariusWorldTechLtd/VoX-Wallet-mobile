import { Observable } from "tns-core-modules/data/observable";

export class QRViewModel extends Observable {

    pause: boolean = false;

    constructor() {
        super();
    }
}
