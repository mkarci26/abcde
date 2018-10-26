import { ControlValueAccessor } from "@angular/forms";
import { VAppointmentResponse } from "../../services/appointments/vAppointmentResponse";
export declare class AppointmentSelectComponent implements ControlValueAccessor {
    private selected;
    appointment: VAppointmentResponse;
    onChange: (appointment: VAppointmentResponse) => void;
    onTouched: () => void;
    readonly isSelected: boolean;
    writeValue(value: VAppointmentResponse): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
}
