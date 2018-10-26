export interface VFamilyHistory {
    familyMemberKey?: string;
    familyMemberDescription?: string;
    diagnosisAge?: string;
    familyHistoryId?: string;
    conditionsDescription: string;
    conditionsKey?: string;
    individualId: string;
    memberConditionKey?: string;
}
export interface VFamilyHistoryResponse {
    familyMember?: {
        familyMemberKey?: string;
        familyMemberDescription?: string;
    };
    diagnosisAge?: string;
    familyHistoryId?: string;
    conditions?: {
        conditionsDescription?: string;
        conditionsKey?: string;
    };
    individualId: string;
}
