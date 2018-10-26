import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { ConsentType } from "../../enums/consent-type";
import { ConfigService } from "../config/config.service";
import { VCommunicationResponse, VConsent } from "./vCommunicationResponse";
import { VConsentConfig } from "./vConsentConfig";
import { VConsentResponse } from "./vConsentResponse";
export declare class ConsentService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigService);
    getTermsAndConditions(dependentID: string): Observable<VConsentResponse>;
    private convertConsent(response);
    private mapConsentParams(consent);
    retrieveConsent(dependentID: string): Observable<VCommunicationResponse>;
    addConsent(params: VCommunicationResponse[], dependentID: string): Observable<VConsent>;
    getConsent(key: ConsentType): Observable<VConsentResponse>;
    addCommsConsent(params: VConsentConfig, dependentID: string): Observable<VConsent>;
    getTermsAndConditionsConsent(dependentID: string): Observable<boolean>;
    getFilteredConsent(filter: string, dependentID: string): Observable<VCommunicationResponse>;
    getNotificationConsent(dependentID: string): Observable<VConsentConfig>;
}
