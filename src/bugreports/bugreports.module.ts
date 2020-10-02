import { Module } from '@nestjs/common'
import BugreportsController from './bugreports.controller'

@Module({
  controllers: [BugreportsController]
})
export class BugreportsModule { }
