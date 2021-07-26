"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const create_project_dto_1 = require("./DTO/create-project.dto");
const update_project_dto_1 = require("./DTO/update-project.dto");
const project_entity_1 = require("./project.entity");
const projects_service_1 = require("./projects.service");
let ProjectsController = class ProjectsController {
    constructor(service) {
        this.service = service;
    }
};
ProjectsController = __decorate([
    crud_1.Crud({
        model: {
            type: project_entity_1.Project,
        },
        dto: {
            create: create_project_dto_1.CreateProjectDTO,
            update: update_project_dto_1.UpdateProjectDTO,
        },
    }),
    swagger_1.ApiTags('companies/:companyId/projects'),
    common_1.Controller('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map