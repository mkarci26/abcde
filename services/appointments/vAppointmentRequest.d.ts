export interface VAppointmentRequest {
    individualId: string;
    from?: Date;
    to?: Date;
    appointmentStatus?: string;
    appointmentType?: string;
    doctorId?: number;
}
