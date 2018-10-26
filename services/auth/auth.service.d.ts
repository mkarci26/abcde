import { HttpClient } from '@angular/common/http';
import { Moment } from 'moment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConfigService } from '../config/config.service';
import { Auth } from './auth.model';
export declare enum AuthStatus {
    LOGGED_IN = "loggedIn",
    LOGGED_OUT = "loggedOut",
    INACTIVE = "inactive",
    REFRESH_ERROR = "refreshError",
}
export interface StatusChange {
    previous: AuthStatus;
    next: AuthStatus;
}
/**
 * The AuthService provides a global observable for the application, ensuring that any login state changes are immediately received by any subscribers.
 *
 *
 */
export declare class AuthService {
    private http;
    private config;
    private static readonly AUTH_TOKEN_KEY;
    private static readonly USER_EXPIRY_KEY;
    constructor(http: HttpClient, config: ConfigService);
    /**
     * Last published {@link AuthStatus}. This prevents us publishing the same status multiple times.
     */
    private currentStatus;
    /**
     * Store used for saving any auth settings.
     */
    private authStore;
    /**
     * Pre-resolved promise for fetching stored authentication from the auth store. This ensures we only contact the store once when
     * the application loads.
     */
    private storedAuth;
    /**
     * 'Local' expiry time within the app. This value is restored from the auth store whenever the app is loaded.
     * If the current time ever exceeds this value, then the user should be automatically logged out.
     */
    userExpiry: Moment;
    /**
     * This timer is used to count down to the user's 'local' expiry time.
     */
    private expiryTimer;
    /**
     * Current authentication token.
     */
    private token;
    /**
     * Subscriber to see when the user is logged out.
     */
    status: Subject<StatusChange>;
    /**
     * Private setter function for saving a user token into the auth service. This sets the local values, the {@link Session}, updates the config service,
     * and publishes a {@link AuthStatus.LOGGED_IN} state across the app.
     */
    private userToken;
    /**
     * Check if the user is currently logged in.
     *
     * <b>This should be called when the applciation starts in order to determine the current state, as well as whenever any authenticated action is performed - for example
     * whenever a HTTP method is called.</b>
     *
     * <ul>
     *     <li>If there is no token in the service, the service publishes an {@link AuthStatus.LOGGED_OUT} status.
     *     <li>If the 'local' user expiry time has, the service publishes an {@link AuthStatus.INACTIVE} status.
     *     <li>If the token expiry is due to expire in < 30 seconds, the service fetches a new token and restarts the status check. If this errors, the service publishes an {@link AuthStatus.REFRESH_ERROR} status.
     *     <li>Otherwise the method extends the 'local' expory by 30 minutes and returns the current auth object.
     */
    isLoggedIn(): Observable<Auth>;
    /**
     * Extend the user expiry every time there is activity (e.g. http request or page change).
     *
     * <b>This should be called whenever an 'action' is called - e.g. whenever a page changes, or for each HTTP call.</b>
     *
     * @param minutes Override the default 30 minute countdown to preserve the login, e.g. when starting a video consultation.
     */
    extendUserExpiry(minutes?: number): void;
    /**
     * Broadcast the current authentication status across the application. This is used whenever a state change occurs, and publishes
     * to any components subscribed to the auth service status.
     *
     * If the status is not {@link AuthStatus.LOGGED_IN}, then the existing state information will be cleared from the service and the auth store.
     *
     * <b>This should be called whenever a custom status needs to be applied - e.g. when a user clicks the 'Log Out' button.</b>
     */
    changeStatus(status: AuthStatus): void;
    /**
     * Clear the login token and auth/expiry keys
     */
    clearToken(): void;
    /**
     * Publicly facing method for setting a new auth token value. This should be picked up following a successful login attempt.
     *
     * This sets the authentication in the service, saves the token to the auth store and extends the current expiry time.
     *
     * <b>This should be called on a successful login attempt.</b>
     */
    updateLoginToken(userToken: Auth): Auth;
    /**
     * Loads a token from the config store. If a token is found then it should rebuild the auth state within the service.
     *
     * The store should only be called once per application load.
     *
     * <b>This shouldn't be called anywhere, and is only really used by the tests.</b>
     */
    loadToken(): Observable<Auth>;
    /**
     * Publicly facing method for handling outbound sso requesrs. This should be picked up when the user clicks/taps on links taking them to HealthHub/CX.
     *
     * This POSTs to Aetna's account manager which in turn responds with a redirect page containing appropriate tokens to allow the user to proceed without having to re-login.
     *
     * <b>This should be called when the user clicks/taps on links taking them to HealthHub/CX.</b>
     */
    initiateOutboundSSO(): Observable<string>;
    /**
     * Publicly facing method for getting converted status.
     *
     * This sends back the value of "converted" so the FE can determine which flow to use.
     *
     */
    getConverted(): string;
}
