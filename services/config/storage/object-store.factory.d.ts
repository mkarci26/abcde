import { ObjectStore, StoreID } from './object-store.interface';
export declare class StoreFactory {
    private static STORES;
    /**
     * Store factory for returning the most suitable {@link ObjectStore object store} for the current browser.
     *
     * This also lends us flexiblity for adding an alternate implementation if there are issues with the existing, e.g. via API or file storage.
     *
     * For now this feature simply returns an indexedDB implementation if indexedDB is supported, otherwise it returns a
     * local storage implementation.
     */
    static load(name: StoreID): ObjectStore;
    /**
     * Clear all saved store references.
     */
    static clearCache(): void;
}
