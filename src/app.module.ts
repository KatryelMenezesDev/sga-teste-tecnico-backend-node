import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TutorialsModule } from './tutorials/tutorials.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ConfigModule.forRoot(), UsersModule, TutorialsModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
