import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import BugreportsService from './bugreports.service'
import CreateBugreportDto from './dto/createBugreport.dto'
import UpdateBugreportDto from './dto/updateBugreport.dto'

@Controller('bugreports')
export default class BugreportsController {
  constructor(
    private readonly BugreportsService: BugreportsService
  ) { }

  @Get()
  getAllPosts() {
    return this.BugreportsService.getAllBugreports()
  }

  @Get(':id')
  getBugreportById(@Param('id') id: string) {
    return this.BugreportsService.getBugreportById(Number(id))
  }

  @Post()
  async createBugreport(@Body() post: CreateBugreportDto) {
    return this.BugreportsService.createBugreport(post)
  }

  @Put(':id')
  async replaceBugreport(@Param('id') id: string, @Body() post: UpdateBugreportDto) {
    return this.BugreportsService.replaceBugreport(Number(id), post)
  }

  @Delete(':id')
  async deleteBugreport(@Param('id') id: string) {
    this.BugreportsService.deleteBugreport(Number(id))
  }
}
