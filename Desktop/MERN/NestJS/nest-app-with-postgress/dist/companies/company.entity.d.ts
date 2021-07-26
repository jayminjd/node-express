import { Project } from '../projects/project.entity';
import { BaseEntity } from '../base-entity';
export declare class Company extends BaseEntity {
    name: string;
    domain: string;
    description: string;
    projects: Project[];
}
