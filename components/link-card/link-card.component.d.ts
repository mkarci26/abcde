import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { WellbeingInfo } from '../../services/wellbeing/wellbeing-links';
export declare class LinkCardComponent {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    info: WellbeingInfo;
    readonly image: SafeStyle;
}
