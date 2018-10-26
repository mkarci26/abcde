import { Observable } from 'rxjs/Observable';
import { WellbeingGroup } from './wellbeing-links';
export * from './wellbeing-links';
export declare class WellbeingService {
    /**
     * This is a simple service but has been designed so that we can easily
     * switch out to fetching links externally.
     */
    getLinks(): Observable<WellbeingGroup[]>;
}
