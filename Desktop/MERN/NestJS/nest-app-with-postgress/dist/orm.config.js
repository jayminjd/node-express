"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: 'root123',
    port: 5432,
    host: '127.0.0.1',
    database: 'fullstack_db',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.config.js.map