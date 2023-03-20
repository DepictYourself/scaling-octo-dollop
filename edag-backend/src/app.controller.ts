import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { EdagDto } from './DTO/edag.dto';
import { UpdateDepartmentDto} from './DTO/updateDepartment.dto';
import { Department } from './schemas/department.schema';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }



    @Get()
    findAll(): Promise<Department[]> {
        return this.appService.findAll();
    }


    @Post()
    create(@Body() jsonData: EdagDto): Promise<Department[]> {
        return this.appService.create(jsonData);
    }



    @Put(':id')
    update(@Body() updateDepartmentDto: UpdateDepartmentDto, @Param('id') id: string): Promise<Department> {
        return this.appService.updateDepartment(id, updateDepartmentDto);
    }
}
