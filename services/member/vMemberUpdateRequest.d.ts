export interface VMemberUpdateRequest {
    countryOfDestinationId?: string;
    countryOfCitizenshipId?: string;
    primaryEmail?: string;
    secondaryEmail?: string;
    primaryPhoneCode?: string;
    primaryPhoneNumber?: string;
    secondaryPhoneCode?: string;
    secondaryPhoneNumber?: string;
    cityOfDestination?: string;
    cityOfCitizenship?: string;
    languageId?: string;
    timeZoneCode?: string;
    eobEmailNotifyId?: string;
    eobSMSNotifyId?: string;
}
export interface VPhoneNumber {
    code: string;
    number: string;
}
