import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { VDependent } from "../../model/vDependent";
import { ConfigService } from '../config/config.service';
import { VActivityResponse } from "../vActivityResponse";
import { VInvitePolicyHolderRequest } from './vInvitePolicyHolderRequest';
import { VMemberContact, VMemberResponse, VMemberState } from './vMemberResponse';
import { VMemberUpdateRequest } from './vMemberUpdateRequest';
import { VPushConfig } from './vPushConfig';
export * from './vDependentResponse';
export * from './vMemberResponse';
export * from './vMemberUpdateRequest';
export * from './vPushConfig';
export interface PublicToken {
    access_token: string;
}
export declare class MemberService {
    private http;
    private config;
    private readonly FETCH_API;
    private permissionToken;
    constructor(http: HttpClient, config: ConfigService);
    /**
     * This API to fetch the family members info along with consent details.
     */
    getFamily(): Observable<VDependent[]>;
    /**
     * This API to fetch the dependents Info along with consent details.
     */
    getDependents(): Observable<VDependent[]>;
    /**
     * This API fetches the Member, Dependent and Policy details.
     */
    getMemberDetails(memberId: string): Observable<VMemberResponse>;
    /**
     * This API fetches the Member state.
     */
    getMemberState(): Observable<VMemberState>;
    /**
     * This is to update the member contact details for both subscriber and dependent.
     * Only contact information can be updated i.e. email, country, city, countryPhoneCode, phone number.
     */
    getEmergencyContacts(individualId: string): Observable<VMemberContact[]>;
    /**
     * This API adds Emergency Contacts
     */
    addEmergencyContacts(params: VMemberContact[], individualId: string): Observable<VMemberContact[]>;
    /**
     * This API to tag the device in Azure Notification Hub.
     */
    registerPushToken(config: VPushConfig): Observable<VActivityResponse>;
    /**
     * This is to update the member contact details for both subscriber and dependent.
     * Only contact information can be updated i.e. email, country, city, countryPhoneCode, phone number.
     */
    updateMemberDetails(memberId: string, params: VMemberUpdateRequest): Observable<VActivityResponse>;
    checkEligibility(username: string, individualId: string): Observable<boolean>;
    getPublicToken(): Observable<PublicToken>;
    invitePolicyHolders(params: VInvitePolicyHolderRequest): Observable<VActivityResponse>;
}
