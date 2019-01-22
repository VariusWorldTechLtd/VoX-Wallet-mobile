import * as appSettings from "tns-core-modules/application-settings";
import { IStorage } from "~/core/interfaces";

export class StorageRepository implements IStorage {
  setItem<T>(key: string, value: T): void {
    const valueStr = JSON.stringify(value);
    appSettings.setString(key, valueStr);
  }

  getItem<T>(key: string): T {
    const valueStr = appSettings.getString(key);
    if (valueStr) {
      return JSON.parse(valueStr);
    } else {
      return undefined;
    }
  }

  removeItem(key: string): void {
    appSettings.remove(key);
  }

  clearAll(): void {
    appSettings.clear();
  }
}
