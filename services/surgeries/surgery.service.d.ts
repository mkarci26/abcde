import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { VDependent } from "../../model/vDependent";
import { ConfigService } from "../config/config.service";
import { VActivityResponse } from "../vActivityResponse";
import { VSurgery } from "./vSurgery";
export declare class SurgeryService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigService);
    private convert(response);
    /**
     * Fetch all surgeries for an individual
     */
    fetchAll(individualId: string): Observable<VSurgery[]>;
    /**
     * Add or update a surgery.
     */
    save(surgery: VSurgery, dependent: VDependent): Observable<VSurgery>;
    /**
     * Remove a surgery
     */
    remove(surgeryId: string): Observable<VActivityResponse>;
}
