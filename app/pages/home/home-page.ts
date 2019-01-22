import { EventData } from "tns-core-modules/data/observable";
// import { Button } from "tns-core-modules/ui/button";
//import { NavigatedData, Page } from "tns-core-modules/ui/page";
//import { HomeViewModel } from "./home-view-model";

import { goToQRPage } from "~/core/helpers/nav.helper";

// export function onNavigatingTo(args: NavigatedData) {
//     const page = <Page>args.object;
//     page.bindingContext = new HomeViewModel();
// }

export function onScanBarcode(args: EventData) {
    goToQRPage();
}
