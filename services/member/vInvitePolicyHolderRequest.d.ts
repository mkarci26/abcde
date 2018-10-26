export interface VPolicyHolder {
    'firstName': string;
    'lastName': string;
    'email': string;
}
export interface VInvitePolicyHolderRequest {
    "memberFirstName": string;
    "Dependents": VPolicyHolder[];
}
