import { Moment } from "moment";
export interface VAppointmentAvailabilityResponse {
    availability: [{
        date: string;
        appointmentType: string;
        doctor: {
            id: string;
        };
        startTime: string;
        startTimeM?: Moment;
        endTime: string;
        startTimeD: Date;
        endTimeD: Date;
    }];
}
