import { ControlValueAccessor } from "@angular/forms";
export declare class InputRatingComponent implements ControlValueAccessor {
    step: number;
    min: number;
    max: number;
    isLarge: boolean;
    isWeb: boolean;
    disabled: boolean;
    readonly: boolean;
    value: number;
    onChange: (value: number) => void;
    onTouched: () => void;
    readonly ratings: number[];
    onClick(value: number): void;
    writeValue(value: number): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
}
