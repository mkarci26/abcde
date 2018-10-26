import { ElementRef, EventEmitter, OnChanges, QueryList } from "@angular/core";
import { VDate } from '../../model/vDate';
export declare class DatePickerComponent implements OnChanges {
    scrollWrap: ElementRef;
    viewChildren: QueryList<ElementRef>;
    dates: VDate[];
    scrollDate: EventEmitter<Date>;
    change: EventEmitter<Date>;
    selected: VDate;
    private scrollTimer;
    ngOnChanges(): void;
    /**
     * Add an eased callback to the scroll event
     */
    onScroll(): void;
    /**
     * Look up the first visible date in the scroll area.
     */
    getScrollDate(): void;
    /**
     * Update the selected date
     */
    selectDate(date: VDate): void;
    /**
     * Scroll to the next visible page
     */
    scroll(delta: number): void;
}
