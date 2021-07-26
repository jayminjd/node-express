import { CrudController } from '@nestjsx/crud';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';
export declare class ProjectsController implements CrudController<Project> {
    service: ProjectsService;
    constructor(service: ProjectsService);
}
