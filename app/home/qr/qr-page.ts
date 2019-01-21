import { EventData, View } from "tns-core-modules/ui/core/view";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { Item } from "../shared/item";
// import { HomeViewModel } from "../home-view-model";


import { MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";

// function onLoaded(args: NavigatedData){
//     const page = <Page>args.object;
//     page.bindingContext = new HomeViewModel();
// }

// export function onNavigatingTo(args: NavigatedData) {
//     const page = args.object as Page;
//     const item = args.context as Item;
//     page.bindingContext = item;
// }

export function onBackButtonTap(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;
    page.frame.goBack();
}

export function onBarcodeScanningResult(event: any) {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    const barcodes: Array<{
        value: string;
        format: string; }> = result.barcodes;
    console.log("barcodes: " + JSON.stringify(barcodes));
    if (barcodes.length > 0) {
        // alert({
        //     title: "Barcode Scanned!",
        //     message: result.barcodes,
        //     okButtonText: "Confirm"
        //  });
        // console.log("pausing the scanner for 3 seconds (to test the 'pause' feature)");
        // const view = args.object as View;
        // const page = view.page as Page;
        // pause = true;
        // setTimeout(() => pause = false, 3000);
    }
}
