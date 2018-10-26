import { HttpClient } from '@angular/common/http';
import { RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PublicToken } from '../../public_api';
import { ConfigService } from '../config/config.service';
import { VFAQ } from './vFAQ';
export declare class FAQService {
    private http;
    private config;
    private renderer;
    private publicToken;
    constructor(http: HttpClient, config: ConfigService, rendererFactory: RendererFactory2);
    private convertFAQs(html);
    /**
     * List the FAQs and convert them from the HTML string into a usable format.
     */
    getFAQs(): Observable<VFAQ[]>;
    getPublicToken(): Observable<PublicToken>;
}
