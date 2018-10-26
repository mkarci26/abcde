import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { VAppointmentAvailability } from '../../model/vAppointmentAvailability';
import { VDependent } from '../../model/vDependent';
import { DateUtil } from '../../utils/date.util';
import { StatsUtil } from "../../utils/stats.util";
import { ConfigService } from '../config/config.service';
import { VActivityResponse } from '../vActivityResponse';
import { VAppointmentAvailabilityRequest } from './vAppointmentAvailabilityRequest';
import { VAppointmentBookingRequest } from './vAppointmentBookingRequest';
import { VAppointmentRequest } from './vAppointmentRequest';
import { VAppointmentLinks, VAppointmentResponse } from './vAppointmentResponse';
export declare enum BookingAction {
    BOOK = "BOOK",
    CANCEL = "CANCEL",
}
export declare enum BookingChannel {
    VIDEO = "Video",
    PHONE = "Phone",
}
export declare enum BookingType {
    INITIAL = "Initial",
    NEW = "Consultation",
    FOLLOW_UP = "Follow-Up",
}
export declare enum AppointmentStatus {
    SCHEDULED = "Appointment_Scheduled",
    CANCEL_MEMBER = "Appointment_Canceled_Member_Not_Verified",
    CANCEL_DOCTOR = "Appointment_Canceled",
    MISSED = "Appointment_Missed",
    DOCTOR_WAITING = "Appointment_Doctor_Ready_for_Patient",
    PATIENT_WAITING = "Appointment_Patient_in_Waiting_Room",
    IN_PROGRESS = "Appointment_In_Progress",
    CALL_ENDED = "Appointment_Call_ended",
    COMPLETE = "Appointment_Completed",
}
export declare class AppointmentService {
    private http;
    private config;
    private dateUtil;
    private statsUtil;
    constructor(http: HttpClient, config: ConfigService, dateUtil: DateUtil, statsUtil: StatsUtil);
    private convertAppointment(appointment);
    /**
     * Retrieve appointment links
     */
    getAppointmentLinks(appointment: VAppointmentResponse, dependent: VDependent, osFromApp?: string): Observable<VAppointmentLinks>;
    /**
     * Fetch multiple appointments.
     */
    getAppointments(params: VAppointmentRequest): Observable<VAppointmentResponse[]>;
    /**
     * Fetch single appointment.
     */
    getAppointment(appointmentId: string): Observable<VAppointmentResponse>;
    /**
     * To provide provision to user to book appointment.
     * For all the request device Id and bearer token is required to identify the user.
     */
    bookAppointment(params: VAppointmentBookingRequest): Observable<VAppointmentResponse>;
    /**
     * To provide provision to user to cancel appointment.
     * For all the request device Id and bearer token is required to identify the user.
     */
    cancelAppointment(appointmentId: string): Observable<VActivityResponse>;
    /**
     * To provide provision to user to rate the appointment.
     * For all the request device Id and bearer token is required to identify the user.
     */
    rateAppointment(appointmentId: string, rating: number, feedback?: string): Observable<VActivityResponse>;
    /**
     * Get appointment availability
     */
    getAppointmentAvailability(params: VAppointmentAvailabilityRequest, appointments?: VAppointmentResponse[]): Observable<VAppointmentAvailability[]>;
}
