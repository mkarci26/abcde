import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ConfigService } from "../config/config.service";
import { VFamilyMember } from "./vFamilyMember";
export declare class FamilyMembersService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigService);
    /**
     * Fetch family members
     */
    fetch(id: string): Observable<VFamilyMember[]>;
}
