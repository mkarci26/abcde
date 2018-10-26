import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { AuthService } from './auth.service';
export declare class AuthTokenInterceptor implements HttpInterceptor {
    private config;
    private userService;
    constructor(config: ConfigService, userService: AuthService);
    /**
     * Checks if the URL requires an attached authentication token.
     *
     * @param url
     * @returns true if authentication headers required
     */
    private checkUrlRequiresAuth(url);
    /**
     * The authentication token interceptor checks each HTTP request which contacts the APIc. *
     * For (almost) all URLs we need to attach the {@link Auth auth token} in the request headers.
     *
     * If authentication is required, then we pass through the auth service, checking if the current authentication is still valid.
     * If it is, then the relevant headers are attached to each request. If it is not, or an error occurs during the API request, then the service
     * publishes a log out event: ({@link AuthStatus.INACTIVE} if the API returns error, or {@link AuthStatus.LOGGED_OUT} if the authentication has expired.
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
