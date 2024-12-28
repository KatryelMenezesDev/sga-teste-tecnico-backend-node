import { User } from '@prisma/client';

export class UserEntity implements User {
    id: string;
    name: string;
    login: string;
    password: string;
    creat_att: Date;
    update_att: Date;
    delete_att: Date;
}
