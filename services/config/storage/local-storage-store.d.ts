import { ObjectStore, StoreID } from './object-store.interface';
export declare class LocalStorageStore implements ObjectStore {
    private storeId;
    private userId;
    constructor(storeId: StoreID);
    buildKey(key: string): string;
    /**
     * Clear one or all values in storage
     */
    clear(key?: string): Promise<void>;
    /**
     * Retrieve an item from storage
     */
    get<T>(key: string): Promise<T>;
    /**
     * Save an item into storage
     */
    put(key: string, data: any): Promise<void>;
    /**
     * Set a user ID.
     */
    user: string;
}
