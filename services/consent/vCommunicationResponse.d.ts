export interface VCommunicationReference {
    communicationType: string;
}
export interface VConsent {
    consents: VCommunicationResponse[];
}
export interface VCommunicationResponse {
    communicationReference?: VCommunicationReference[];
    consentStatus?: string;
    key: string;
    version?: string;
}
