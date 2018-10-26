export interface DeviceInfo {
    [key: string]: any;
    browser: string;
    os: string;
    isMobile: boolean;
}
export declare class StatsUtil {
    constructor();
    /**
     * Get Device Info (browser, os, is on Mobile Device)
     * Can be
     *
     * @param osFromApp : OS if sending from app, null otherwise
     */
    getDeviceInfo(osFromApp: string): DeviceInfo;
}
