import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {Crud,CrudController} from '@nestjsx/crud'
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDTO } from './DTO/create-company.dto';
import { UpdateCompanyDTO } from './DTO/update-company.dto';


@Crud({
    model:{
        type:Company,
    },
    dto:{
        create:CreateCompanyDTO,
        update: UpdateCompanyDTO,
    },
    query:{
        alwaysPaginate:true,
        join:{
            projects:{},
        }
    }
})
@ApiTags('companies')
@Controller('companies')
export class CompaniesController implements CrudController<Company>{
    constructor(public service:CompaniesService){
        //- User will send the request ----> Validation Pipe wil validate properties (DTO--- Date Transfer Object) ---> send Parameters to Request handler

    }
}
