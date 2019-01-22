import { Observable } from "tns-core-modules/data/observable";

export class QRViewModel extends Observable {

    public pause: boolean = false;

    constructor() {
        super();
    }
}
