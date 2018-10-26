import { ObjectStore, StoreID } from './object-store.interface';
export declare class IndexedDBStore implements ObjectStore {
    private storeId;
    private static readonly DATABASE_VERSION;
    private static readonly DATABASE_ID;
    private static db;
    private userId;
    constructor(storeId: StoreID);
    static isSupported(): boolean;
    /**
     * Single-run promise to fetch the database
     */
    private database;
    private getIndexKey(key);
    /**
     * Create a new object store transaction
     */
    private getStore(permission);
    clear(key?: string): Promise<void>;
    get<T>(key: string): Promise<T>;
    put(key: string, data: any): Promise<void>;
    /**
     * Set a user ID.
     */
    user: string;
}
