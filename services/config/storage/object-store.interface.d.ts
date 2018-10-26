export interface ObjectStore {
    /**
     * Set the current user ID for persistence.
     */
    user: string;
    /**
     * Clear stored data.
     *
     * @param key if provided, clear a specific object from the store, else clear all data.
     */
    clear(key?: string): Promise<void>;
    /**
     * Retrieve data from the store
     *
     * @param key if provided, clear a specific object from the store, else clear all data.
     */
    get<T>(key: string): Promise<T>;
    /**
     * Put data into the store, overriding existing data.
     * @param key
     * @param data
     */
    put(key: string, data: any): Promise<void>;
}
export declare enum StoreID {
    AUTH = "v-auth",
    CONFIG = "v-config",
}
