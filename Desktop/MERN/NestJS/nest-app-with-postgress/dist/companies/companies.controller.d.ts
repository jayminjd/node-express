import { CrudController } from '@nestjsx/crud';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
export declare class CompaniesController implements CrudController<Company> {
    service: CompaniesService;
    constructor(service: CompaniesService);
}
