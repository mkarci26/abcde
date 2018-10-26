export interface VNotificationConfig {
    account: {
        email: boolean;
        sms: boolean;
    };
    marketing: {
        email: boolean;
        sms: boolean;
        phone: boolean;
    };
}
