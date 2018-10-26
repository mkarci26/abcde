import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { VDependent } from "../../model/vDependent";
import { DateUtil } from '../../utils/date.util';
import { ConfigService } from "../config/config.service";
import { VActivityResponse } from "../vActivityResponse";
import { VMedication, VMedicationSearchResult } from "./vMedication";
export declare class MedicationService {
    private http;
    private config;
    private dateUtil;
    frequencies: Array<{
        key: string;
        value: string;
    }>;
    units: Array<{
        key: string;
        value: string;
    }>;
    constructor(http: HttpClient, config: ConfigService, dateUtil: DateUtil);
    private convert(response);
    convertUnit(unit: string): string;
    convertFrequency(frequency: string): string;
    /**
     * Fetch all medications for an individual
     */
    fetchAll(individualId: string): Observable<VMedication[]>;
    /**
     * Add or update a medication.
     */
    save(medication: VMedication, dependent: VDependent): Observable<VMedication>;
    /**
     * Remove a medication
     */
    remove(medicationId: string): Observable<VActivityResponse>;
    /**
     * Search the array for medication details
     */
    search(query: string): Observable<VMedicationSearchResult[]>;
}
