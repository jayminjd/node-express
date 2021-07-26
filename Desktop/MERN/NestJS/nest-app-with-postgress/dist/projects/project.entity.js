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
const crud_1 = require("@nestjsx/crud");
const class_validator_1 = require("class-validator");
const company_entity_1 = require("../companies/company.entity");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base-entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let Project = class Project extends base_entity_1.BaseEntity {
};
__decorate([
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.IsDefined({ groups: [CREATE] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.MaxLength(100, { always: true }),
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.IsBoolean({ always: true }),
    typeorm_1.Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Project.prototype, "isActive", void 0);
__decorate([
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.IsNumber({}, { always: true }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Project.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.Company, company => company.projects),
    __metadata("design:type", company_entity_1.Company)
], Project.prototype, "company", void 0);
Project = __decorate([
    typeorm_1.Entity()
], Project);
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map