import { EventData } from "tns-core-modules/data/observable";
// import { Button } from "tns-core-modules/ui/button";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
//import { HomeViewModel } from "./home-view-model";
import { Web3ViewModel } from "~/core/models";

import { goToQRPage } from "~/core/helpers/nav.helper";

let web3: any = new Web3ViewModel();

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = web3;
}

export function onScanBarcode(args: EventData) {
    goToQRPage();
}
