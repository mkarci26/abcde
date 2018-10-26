import { OnChanges } from '@angular/core';
export declare class TruncateComponent implements OnChanges {
    concat: string;
    showAll: boolean;
    length: number;
    content: string;
    readonly buttonText: string;
    ngOnChanges(): void;
}
