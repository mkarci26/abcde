import { OnChanges } from '@angular/core';
import { VDependent } from '../../model/vDependent';
import { VAppointmentResponse } from '../../services/appointments/vAppointmentResponse';
export declare class AppointmentComponent implements OnChanges {
    status: string;
    appointment: VAppointmentResponse;
    dependent: VDependent;
    readonly statusText: string;
    readonly isUpcoming: boolean;
    ngOnChanges(): void;
}
