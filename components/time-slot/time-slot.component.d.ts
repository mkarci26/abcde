import { ControlValueAccessor } from "@angular/forms";
export declare class TimeSlotComponent implements ControlValueAccessor {
    private selected;
    date: Date;
    theme: string;
    showDate: boolean;
    onChange: (date: Date) => void;
    onTouched: () => void;
    readonly isSelected: boolean;
    writeValue(value: Date): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
}
