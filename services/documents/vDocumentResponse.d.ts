import { Observable } from 'rxjs/Observable';
import { FileType } from '../../enums/file-type';
export interface VDocument {
    id: string;
    title: string;
    author: string;
    notes: string;
    created: Date;
    mimeType: string;
    appointmentId: string;
    dependentId: string;
    type: FileType;
    file?: Observable<Blob>;
}
export interface VDocumentResponse {
    fileContent: [{
        body: string;
        headers: [{
            "Content-Type": string;
        }];
    }];
    responseBody: [{
        body: {
            appointmentId: string;
            documentTitle: string;
            individualId: string;
            mediaId: string;
            mimeType: string;
        };
        headers: [{
            "Content-Type": string;
        }];
    }];
}
