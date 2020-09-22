import { default as CryptoJS } from 'crypto-js';

const Storage = window.localStorage;
export enum StorageKeys {
  Favourites = '@Favourites',
}

class StorageService {
  private secret: string = 'secret';

  public get = async <T>(key: string): Promise<T | null> => {
    const value: string | null = await Storage.getItem(key);
    if (!value) {
      return null;
    }

    const bytes = CryptoJS.AES.decrypt(value, this.secret);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData as T;
  };

  public set = async <T>(key: string, data: T): Promise<void> => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), this.secret).toString();
    await Storage.setItem(key, encryptedData);
  };
}

const storageService = new StorageService();
export { storageService as StorageService };
