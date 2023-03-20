import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from './schemas/department.schema';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        MongooseModule.forFeature([{ name: "Department", schema: DepartmentSchema }])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
