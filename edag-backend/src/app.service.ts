import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Department } from './schemas/department.schema';

import { DepartmentRequest } from './models/departmentrequest.interface';

@Injectable()
export class AppService {
    constructor(@InjectModel('Department') private readonly departmentModel: Model<Department>){

    }

    async findAll(): Promise<Department[]> {
        return await this.departmentModel.find();
    }



    async create(departmentRequest: DepartmentRequest): Promise<Department[]> {
        const departments = departmentRequest.departments;
        const createdDepartments = [];

        for (const department of departments) {
            const createdDepartment = await this.departmentModel.create(department);
            createdDepartments.push(createdDepartment);
        }

        return createdDepartments;
    } 
}
