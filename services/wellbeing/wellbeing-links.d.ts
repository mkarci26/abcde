export interface WellbeingGroup {
    name: string;
    description: string;
    categories: WellbeingCategory[];
}
export interface WellbeingCategory {
    name: string;
    items: [{
        links: WellbeingLinks;
        info: WellbeingInfo;
    }];
}
export interface WellbeingInfo {
    id: string;
    name: string;
    description: string;
    image: string;
}
export interface WellbeingLinks {
    android?: string;
    ios?: string;
    web?: string;
}
export declare class WellbeingData {
    static data(): WellbeingGroup[];
}
