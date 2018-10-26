export interface VSurgeryResponse {
    date?: string;
    doctor?: string;
    procedureCode?: string;
    procedureDescription?: string;
    notes?: string;
    surgeryId?: string;
    hospital?: string;
}
export interface VSurgery {
    id?: string;
    code?: string;
    name: string;
    hospital?: string;
    doctor?: string;
    notes?: string;
    date?: string;
}
export interface VSurgeryRequest extends VSurgeryResponse {
    activity: string;
    individualId?: string;
}
