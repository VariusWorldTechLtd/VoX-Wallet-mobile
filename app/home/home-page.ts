import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
// import { Item } from "./shared/item";

import { MLKitBarcodeScanner } from "nativescript-plugin-firebase/mlkit/barcodescanning";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

export function onScanBarcode(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;

    page.frame.navigate({
        moduleName: "home/qr",
        // context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
