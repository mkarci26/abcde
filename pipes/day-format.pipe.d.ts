import { PipeTransform } from '@angular/core';
import moment from 'moment-es6';
export declare class DayFormatPipe implements PipeTransform {
    transform(date: Date | moment.Moment | string | number, opts?: FormatOptions): string;
}
export interface FormatOptions {
    /**
     * Set the default format if words not used.
     */
    format?: string;
    /**
     * Set whether or not tomorrow is formatted
     * as a standard date or word.
     */
    tomorrow?: boolean;
}
