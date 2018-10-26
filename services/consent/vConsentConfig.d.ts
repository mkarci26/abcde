export interface VConsentConfig {
    research: {
        isSelected?: boolean;
        email: boolean;
        sms: boolean;
        phone: boolean;
    };
    marketing: {
        isSelected?: boolean;
        email: boolean;
        sms: boolean;
        phone: boolean;
    };
}
