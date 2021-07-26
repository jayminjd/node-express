import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { CompaniesModule } from './companies/companies.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), CompaniesModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}