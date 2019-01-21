import { Observable } from "tns-core-modules/data/observable";
import { Item } from "./shared/item";

export class HomeViewModel extends Observable {
    // items: Array<Item>;

    constructor() {
        super();
        /* this.items = new Array<Item>(
            {
                name: "Item 1",
                description: "Description for Item 1"
            },
            {
                name: "Item 2",
                description: "Description for Item 2"
            }
        ); */
    }
}
