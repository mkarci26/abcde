import { PipeTransform } from '@angular/core';
export declare class HighlightPipe implements PipeTransform {
    transform(content: string, match: string, opts?: HighlightOptions): string;
}
export interface HighlightOptions {
    /**
     * Specify the class to be added to the highlighted option.
     * Defaults to 'v-highlight'.
     */
    toggleClass?: string;
    /**
     * If true, match only the first result.
     */
    first?: boolean;
}
