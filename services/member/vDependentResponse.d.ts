import { DependentRegistration } from "../../enums/dependent-registration";
import { DependentRelationship } from "../../enums/dependent-relationship";
export interface VDependentResponse {
    "individualId": string;
    "firstName": string;
    "lastName": string;
    "dob": string;
    'consent': VDependentBoolean;
    'isSubscriber': VDependentBoolean;
    "relationship": DependentRelationship;
    "registered": DependentRegistration;
}
export declare enum VDependentBoolean {
    YES = "Y",
    NO = "N",
}
