import { Frame, NavigationEntry, topmost } from "tns-core-modules/ui/frame";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
import { ROUTES } from "~/core/helpers";

export function navigate(
  pageModuleNameOrNavEntry: string | NavigationEntry,
  otherFrame?: Frame
) {
  const navFrame = otherFrame ? otherFrame : topmost();
  if (typeof pageModuleNameOrNavEntry === "object") {
    navFrame.navigate(pageModuleNameOrNavEntry);
  } else if (typeof pageModuleNameOrNavEntry === "string") {
    navFrame.navigate(pageModuleNameOrNavEntry);
  }
}

// const button: Button = <Button>args.object;
// const page: Page = button.page;
// page.frame.navigate({
//     moduleName: "home/qr/qr-page",
//     // context: object,
//     animated: true,
//     transition: {
//         name: "slide",
//         duration: 200,
//         curve: "ease"
//     }
// });
export function goToQRPage() {
  const navEntry: NavigationEntry = {
    moduleName: ROUTES.qrPage,
    animated: true,
    transition: {
      name: "slide",
      duration: 200,
      curve: "ease"
    }
  };
  navigate(navEntry);
}

// export function goToXXXXPage<T>(context: T, clearHistory?: boolean) {
//   const navEntry: NavigationEntry = {
//     moduleName: ROUTES.qrPage,
//     clearHistory,
//     context,
//     animated: true,
//     transition: {
//       name: "slide",
//       duration: 200,
//       curve: "ease"
//     }
//   };
//   navigate(navEntry);
// }

export function goToSettingsPage() {
  const navEntry: NavigationEntry = {
    create: () => {
      const stack = new StackLayout();
      const label = new Label();
      label.text = "Settings";
      stack.addChild(label);

      const page = new Page();
      page.content = stack;

      return page;
    }
  };
  navigate(navEntry);
}

// const view = args.object as View;
// const page = view.page as Page;
// page.frame.goBack();
export function goBack() {
  topmost().goBack();
}
