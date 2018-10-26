import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ConfigService } from "../config/config.service";
import { VActivityResponse } from "../vActivityResponse";
import { VFamilyHistory, VFamilyHistoryResponse } from "./vFamilyHistory";
export declare class FamilyHistoryService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigService);
    convert(response: VFamilyHistoryResponse): VFamilyHistory;
    convertAdd(response: VFamilyHistory): VFamilyHistory;
    convertToKey(description: string): string;
    convertCondition(description: string): string;
    /**
     * Fetch all family history for an individual
     */
    fetchAll(individualId: string): Observable<VFamilyHistory[]>;
    /**
     * Return a pre-defined list of conditions for use in autofill etc.
     * we only want a string returned to work with what the frontend expects, then map to a key
     * for the save.
     */
    lookup(keyword: string): Observable<string[]>;
    /**
     * Add or update a condition.
     */
    save(familyHistory: VFamilyHistory): Observable<VFamilyHistory>;
    /**
     * Remove a condition
     */
    remove(familyHistoryId: string): Observable<VActivityResponse>;
}
