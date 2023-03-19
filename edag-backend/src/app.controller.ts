import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EdagDto } from './DTO/edag.dto';
import { Department } from './schemas/department.schema';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }



    @Get()
    findAll(): string {
        return "finding all..";
    }


    @Post()
    create(@Body() jsonData: EdagDto): Promise<Department[]> {
        return this.appService.create(jsonData);
    }


}
