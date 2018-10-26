export interface VAppointmentAvailabilityRequest {
    individualId: string;
    dateFrom: Date;
    dateTo: Date;
    doctorId?: number;
    appointmentType?: string;
}
