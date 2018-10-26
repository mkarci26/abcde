import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { VDependent } from "../../model/vDependent";
import { ConfigService } from "../config/config.service";
import { VActivityResponse } from "../vActivityResponse";
import { VShareOptions } from "./vShare";
export declare class ShareService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigService);
    /**
     * This API is to share the record(medication/diagnosis/notes) details in a pdf format required the user.
     * We just palm off thee requirements via the API - they do the rest.
     */
    shareToEmail(email: string, shareOptions: VShareOptions, dependent: VDependent): Observable<VActivityResponse>;
}
