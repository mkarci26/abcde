import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { VDependent } from "../../model/vDependent";
import { ConfigService } from "../config/config.service";
import { VActivityResponse } from "../vActivityResponse";
import { VAllergy, VAllergyType } from "./vAllergy";
export declare class AllergyService {
    private http;
    private config;
    allergyTypes: Array<{
        key: string;
        value: string;
    }>;
    constructor(http: HttpClient, config: ConfigService);
    private convert(response);
    convertType(type: string): string;
    /**
     * Fetch all allergies for an individual
     */
    fetchAll(individualId: string): Observable<VAllergy[]>;
    /**
     * Add or update an allergy.
     */
    save(allergy: VAllergy, dependent: VDependent): Observable<VAllergy>;
    /**
     * Remove an allergy
     */
    remove(allergyId: string): Observable<VActivityResponse>;
    /**
     * Return all allergy types
     */
    types(): Observable<VAllergyType[]>;
    /**
     * Return a pre-defined list of conditions for use in autofill etc.
     */
    lookup(keyword: string): Observable<string[]>;
}
