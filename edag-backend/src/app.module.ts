import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from './schemas/department.schema';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://localhost:27017/edag"),
        MongooseModule.forFeature([{ name: "Department", schema: DepartmentSchema }])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
