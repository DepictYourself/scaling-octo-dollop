import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EdagDto } from './DTO/edag.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }



    @Get()
    findAll(): string {
        return "finding all..";
    }


    @Post()
    create(@Body() jsonData: EdagDto): string {
        console.table(jsonData.departments);
        console.table(jsonData.departments[0])
        return `${jsonData.departments}`;
    }


}
