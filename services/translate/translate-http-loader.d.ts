import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { ConfigService } from "../config/config.service";
/**
 * Gets the translations from the server.
 *
 * If the language includes locale (e.g. en-US.json) but there is no locale specific langauge value,
 * fetch the language only variant (en.json) instead.
 */
export declare class TranslateHttpLoader implements TranslateLoader {
    private config;
    private http;
    constructor(config: ConfigService, http: HttpClient);
    private getUrl(lang);
    getTranslation(lang: string): any;
    static factory(config: ConfigService, http: HttpClient): TranslateHttpLoader;
}
