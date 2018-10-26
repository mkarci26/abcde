import { PipeTransform } from '@angular/core';
import moment from 'moment-es6';
import { DateUtil } from '../utils/date.util';
export declare class MomentPipe implements PipeTransform {
    private dateUtil;
    constructor(dateUtil: DateUtil);
    transform(date: Date | moment.Moment | string | number, format?: string): string;
}
