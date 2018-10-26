export interface VMemberResponse {
    firstName: string;
    lastName: string;
    dob: string;
    countryOfDestinationId: string;
    countyOfCitizenshipId: string;
    primaryEmail: string;
    secondaryEmail: string;
    primaryPhoneCode: string;
    primaryPhoneNumber: string;
    secondaryPhoneCode: string;
    secondaryPhoneNumber: string;
    cityOfDestination: string;
    cityOfCitizenship: string;
    timeZoneCode: string;
    eobEmailNotifyInd: string;
    eobSMSNotifyInd: string;
    instanceId: string;
    languageId: string;
}
export interface VMemberContact {
    emergencyContactId: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    countryPhoneCode: string;
    phoneNumber: string;
}
export interface VMemberState {
    converted: string;
    firstName: string;
    individualId: number;
    regionCode: number;
}
