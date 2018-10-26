import { ControlValueAccessor } from "@angular/forms";
export declare class OptionButtonComponent implements ControlValueAccessor {
    private selected;
    icon: string;
    value: object;
    onChange: (value: object) => void;
    onTouched: () => void;
    readonly isSelected: boolean;
    writeValue(value: object): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
}
