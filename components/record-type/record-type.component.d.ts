import { ControlValueAccessor } from "@angular/forms";
import { RecordType } from '../../enums/record-type';
export declare class RecordTypeComponent implements ControlValueAccessor {
    selected: boolean;
    onChange: (selected: boolean) => void;
    onTouched: () => void;
    type: RecordType;
    isTall: boolean;
    readonly icon: string;
    writeValue(value: boolean): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
}
