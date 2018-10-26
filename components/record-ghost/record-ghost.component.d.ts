import { RecordType } from '../../enums/record-type';
export declare class RecordGhostComponent {
    type: RecordType;
    RecordType: typeof RecordType;
    /**
     * Only some ghosts may have some additional text, filter
     * them out here.
     */
    readonly hasText: boolean;
}
