import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configService } from './config/config.service'
import BugreportsService from './bugreports/bugreports.service'
import BugreportsController from './bugreports/bugreports.controller'

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, BugreportsController],
  providers: [AppService, BugreportsService],
})
export class AppModule { }
