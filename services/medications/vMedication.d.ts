export interface VMedicationResponse {
    name: string;
    dosage?: string;
    frequency?: string;
    notes?: string;
    code?: string;
    strength?: string;
    prescribedToDate?: string;
    prescribingDoctor?: string;
    medicationId?: string;
    prescribedFromDate?: string;
    strengthUnit?: string;
}
export interface VMedication {
    name: string;
    id?: string;
    code?: string;
    notes?: string;
    doctor?: string;
    duration?: VMedicationDuration;
    prescription?: VMedicationPrescription;
}
export interface VMedicationDuration {
    from?: Date;
    to?: Date;
}
export interface VMedicationPrescription {
    dosage?: number;
    strength?: number;
    frequency?: string;
    unit?: string;
}
export interface VMedicationSearchResult {
    medicationCode: string;
    medicationName: string;
}
export interface VMedicationRequest extends VMedicationResponse {
    activity: string;
    individualId: string;
}
