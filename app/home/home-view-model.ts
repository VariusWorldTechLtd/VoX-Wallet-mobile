import { Observable } from "tns-core-modules/data/observable";
import { Item } from "./shared/item";

export class HomeViewModel extends Observable {
    // items: Array<Item>;

    pause: boolean = false;

    constructor() {
        super();

    }
}
