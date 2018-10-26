import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FileType } from '../../enums/file-type';
import { VDependent } from '../../model/vDependent';
import { DateUtil } from '../../utils/date.util';
import { ConfigService } from '../config/config.service';
import { VActivityResponse } from '../vActivityResponse';
import { VDocument, VDocumentResponse } from './vDocumentResponse';
import { VDocumentInfo } from './vDocumentUpdateRequest';
export declare class DocumentService {
    private http;
    private config;
    private dateUtil;
    constructor(http: HttpClient, config: ConfigService, dateUtil: DateUtil);
    convert(document: VDocumentResponse): VDocument;
    /**
     * Calculate the document type from a mime type.
     */
    convertFileType(mimeType: string): FileType;
    /**
     * Fetch all documents for a dependent
     */
    fetchDocuments(dependentId: string): Observable<VDocument[]>;
    /**
     * Fetch a specific document by ID
     */
    getDocument(documentId: string, dependentId: string): Observable<VDocument>;
    /**
     * Upload a new document.
     */
    uploadDocument(file: File, info: VDocumentInfo, dependent: VDependent, appointmentId?: string): Observable<VDocument>;
    /**
     * Remove a specific document
     */
    removeDocument(documentId: string, dependent: VDependent): Observable<VActivityResponse>;
    /**
     * Update details of ane existing document.
     */
    updateDocument(documentId: string, info: VDocumentInfo): Observable<VActivityResponse>;
    /**
     * Convert a document from a byte array into a file
     */
    static convertFromByteArray(array: Uint8Array, mimeType: string): Observable<Blob>;
    /**
     * Convert a file into a byte array for posting to the API
     */
    static convertToByteArray(blob: Blob): Observable<number[]>;
}
