export declare class ValidationPattern {
    /**
     * Email validation pattern.
     *
     * @example
     * VALID: a@b.co
     * INVALID: a
     * INVALID: a@b
     * INVALID: a@b.c
     * INVALID: a.com
     */
    static readonly EMAIL: string;
    /**
     * Phone number validation pattern.
     * Every character except numbers are valid.
     */
    static readonly PHONE: string;
}
