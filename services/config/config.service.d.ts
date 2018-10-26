import { InjectionToken } from '@angular/core';
import { VDependent } from '../../model/vDependent';
/**
 * Configuration options
 */
export interface Config {
    apiUrl?: string;
    authUrl?: string;
    consultationUrl?: string;
    inviteUrl?: string;
    mockUrl?: string;
    publicUrl?: string;
    permissionUrl?: string;
    outboundSsoUrl?: string;
    locale?: string;
    translationPrefix?: string;
    translationSuffix?: string;
}
/**
 * Session information. This data is cleared when a user
 * is logged out.
 */
export declare class Session {
    static DEPENDENTS: VDependent[];
    static ACTIVE_DEPENDENT: VDependent;
    static INDIVIDUAL_ID: string;
    static HEALTHKIT_PERM_ALLOWED: boolean;
}
export declare class ConfigService {
    static readonly DEFAULTS: Config;
    private config;
    private store;
    constructor(config: Config);
    /**
     * Get the current config
     */
    readonly get: Config;
    /**
     * Update the config fields
     */
    update(config: Config): void;
    /**
     * Clear one or all values in storage
     */
    clearData(key?: string): Promise<void>;
    /**
     * Retrieve an item from storage
     */
    getData<T>(key: string): Promise<T>;
    /**
     * Save an item into storage
     */
    setData(key: string, data: string | number | boolean | object): Promise<void>;
    /**
     * Update the current user used by the config store.
     */
    updateUser(userId: string): void;
}
export declare const CONFIG_TOKEN: InjectionToken<Config>;
