import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/models/user.interface';

@Schema()
export class Department extends mongoose.Document {
    @Prop()
    name: string;

    @Prop({type: [Object]})
    users: User[];
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);