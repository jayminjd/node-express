import { RoleEntity } from './role.entity';
export declare class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    readonly fullName: string;
    role: RoleEntity;
    constructor(partial: Partial<UserEntity>);
}
