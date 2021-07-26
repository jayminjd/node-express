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
const project_entity_1 = require("../projects/project.entity");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base-entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let Company = class Company extends base_entity_1.BaseEntity {
};
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.MaxLength(100, { always: true }),
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.MaxLength(100, { always: true }),
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "domain", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    typeorm_1.Column({ type: 'text', nullable: true, default: null }),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_entity_1.Project, project => project.company),
    __metadata("design:type", Array)
], Company.prototype, "projects", void 0);
Company = __decorate([
    typeorm_1.Entity('companies')
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map