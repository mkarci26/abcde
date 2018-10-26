import { Moment } from 'moment';
import { ConfigService } from '../services/config/config.service';
export declare class DateUtil {
    private config;
    constructor(config: ConfigService);
    static readonly FORMAT: string;
    static readonly SHORT_FORMAT: string;
    /**
     * Format a date
     *
     * @param date momentizable date object
     * @param format moment date format
     */
    format(date: Date | Moment | string | number, format?: string): string;
    /**
     * Formats a date into the API pattern.
     *
     * @param date date object
     */
    formatAPIDate(date: Date): string;
    /**
     * Formats a date into the API pattern without timezone.
     *
     * @param date date object
     */
    formatShortAPIDate(date: Date): string;
    /**
     * Use moment to convert an api format date into a valid
     * ISO date string.
     *
     * @param vDate api format date string
     */
    convertAPIDateToString(vDate: string): string;
    /**
     * Use moment to convert an api format date into a valid
     * ISO date string.
     *
     * @param vDate api format date string
     */
    convertAPIDate(vDate: string): Date;
    /**
     * Use moment to convert an api format date into a valid
     * ISO date string without timezone.
     *
     * @param vDate api format date string
     */
    convertShortAPIDate(vDate: string): Date;
    /**
     * Round the hour to the closest 00 or 30 minutes
     *
     * @param date date to be rounded
     */
    roundTime(date: Date): Date;
}
