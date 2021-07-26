import { Company } from "../companies/company.entity";
import { BaseEntity } from '../base-entity';
export declare class Project extends BaseEntity {
    name: string;
    isActive: Boolean;
    description: string;
    companyId?: string;
    company: Company;
}
