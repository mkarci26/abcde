import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Observable";
import { VDependent } from "../../model/vDependent";
import { ConfigService } from "../config/config.service";
import { VActivityResponse } from "../vActivityResponse";
import { VCondition } from "./vCondition";
export declare enum ConditionStatus {
    PAST = "PT",
    CURRENT = "CT",
    DT = "DT",
    FR = "FR",
    PR = "PR",
    ST = "ST",
    UST = "UST",
    CT = "CT",
    PT = "PT",
    FAMILY = "family-history",
}
export declare class ConditionService {
    private http;
    private config;
    private translate;
    constructor(http: HttpClient, config: ConfigService, translate: TranslateService);
    /**
     * Fetch all conditions for an individual
     */
    fetchAll(individualId: string): Observable<VCondition[]>;
    convertStatus(status: ConditionStatus): ConditionStatus;
    convertStatusDescription(status: ConditionStatus): string;
    /**
     * Add or update a condition.
     */
    save(condition: VCondition, dependent: VDependent): Observable<VCondition>;
    /**
     * Remove a condition
     */
    remove(conditionId: string): Observable<VActivityResponse>;
    /**
     * Return a pre-defined list of conditions for use in autofill etc.
     */
    lookup(keyword: string): Observable<string[]>;
    /**
     * Search the API for conditions
     */
    search(keyword: string): Observable<VCondition[]>;
}
