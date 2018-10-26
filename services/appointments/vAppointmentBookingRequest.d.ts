import { VPhoneNumber } from "../member/vMemberUpdateRequest";
import { BookingChannel, BookingType } from "./appointment.service";
export interface VAppointmentBookingRequest {
    "individualId": string;
    "date": Date;
    "subject": string;
    "reason": string;
    "doctorNotes"?: string;
    "bookingChannel": BookingChannel;
    "bookingType": BookingType;
    "contactNumber"?: VPhoneNumber;
    "isPrimary"?: boolean;
}
