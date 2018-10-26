import { ConditionStatus } from "./condition.service";
export interface VCondition {
    conditionName: string;
    conditionId?: string;
    conditionCode?: string;
    statusDescription?: string;
    status?: ConditionStatus;
    notes?: string;
}
