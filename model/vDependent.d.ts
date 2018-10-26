import { DependentRegistration } from "../enums/dependent-registration";
import { DependentRelationship } from "../enums/dependent-relationship";
import { VDependentBoolean } from '../services/member/vDependentResponse';
export interface VDependent {
    id: string;
    firstName: string;
    lastName: string;
    dob: Date;
    consent?: VDependentBoolean;
    relationship?: DependentRelationship;
    registered?: DependentRegistration;
}
