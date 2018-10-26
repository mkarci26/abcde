import { Observable } from 'rxjs/Observable';
import { VNotificationConfig } from './vNotificationConfig';
export declare class NotificationService {
    private currentConfig;
    /**
     * Retrieve the current notification configuration.
     */
    fetchConfig(): Observable<VNotificationConfig>;
    /**
     * Update the notification configuration.
     */
    updateConfig(notification: VNotificationConfig): Observable<VNotificationConfig>;
}
