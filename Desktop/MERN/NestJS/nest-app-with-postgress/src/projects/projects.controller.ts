import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CreateProjectDTO } from './DTO/create-project.dto';
import { UpdateProjectDTO } from './DTO/update-project.dto';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';

@Crud({
    model:{
        type:Project,
    },
    dto:{
        create:CreateProjectDTO,
        update: UpdateProjectDTO,
    },
    // query:{
    //     alwaysPaginate:true,
    // }
})
@ApiTags('companies/:companyId/projects')
@Controller('projects')
export class ProjectsController implements CrudController<Project> {
    constructor(public service:ProjectsService){
    // }
}
}
