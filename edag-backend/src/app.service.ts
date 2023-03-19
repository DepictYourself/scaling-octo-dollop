import { Injectable } from '@nestjs/common';

import { Department } from './models/department.interface';
import { User } from './models/user.interface';

@Injectable()
export class AppService {
    

    findAll(): {departments: Department[]} {
        return {
            departments: new Array<Department>()
        }
    }



    create(departments: Department[]): void {
        
    } 
}
