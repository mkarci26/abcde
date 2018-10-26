import { Moment } from "moment";
import { AppointmentStatus, BookingChannel, BookingType } from "./appointment.service";
export interface VAppointmentResponse {
    "appointmentId": string;
    "individualId": string;
    "subject": string;
    "date": string;
    "startTime": string;
    "startTimeM"?: Moment;
    "endTimeM"?: Moment;
    "appointmentstatus"?: AppointmentStatus;
    "appointmentStatus": AppointmentStatus;
    "appointmentType": BookingType;
    "channel": BookingChannel;
    "reason": string;
    "doctor": VDoctor;
    "doctorNotes"?: string;
    "diagnosis"?: VDiagnosis[];
    "videoUrl"?: string;
    "medications"?: VMedication[];
    "rating"?: string;
    "feedback"?: string;
    "media"?: VMedia[];
}
export interface VDiagnosis {
    "diagnosisId": string;
    "diagnosisName": string;
    "diagnosisNotes": string;
}
export interface VMedication {
    "medicationName": string;
    "medicationId": string;
}
export interface VDoctor {
    "name": string;
    "id": string;
}
export interface VMedia {
    "mediaId": string;
    "documentTitle": string;
}
export interface VAppointmentLinks {
    testJoinUrl: string;
    joinUrl: string;
}
