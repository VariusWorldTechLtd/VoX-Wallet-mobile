import { MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
// View
import { EventData } from "tns-core-modules/ui/core/view";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { goBack } from "~/core/helpers/nav.helper";
import { QRViewModel } from "~/core/models/qr-view-model";

let qrViewModel: QRViewModel;

// function onLoaded(args: NavigatedData) {
//     const page = <Page>args.object;
//     page.bindingContext = new QRViewModel();
// }

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    qrViewModel = new QRViewModel();
    page.bindingContext = qrViewModel;
}

export function onBackButtonTap(args: EventData) {
    goBack();
}

export function onBarcodeScanningResult(event: any) {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    const barcodes: Array<{
        value: string;
        format: string;
    }> = result.barcodes;
    console.log("barcodes: " + JSON.stringify(barcodes));
    if (barcodes.length > 0) {
        console.log("pausing the scanner for 3 seconds (to test the 'pause' feature)");
        qrViewModel.pause = true;
        setTimeout(() => qrViewModel.pause = false, 5000);
    }
}
