import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import CreateBugreportDto from './dto/createBugreport.dto'
import Bugreport from './bugreport.interface'
import UpdateBugreportDto from './dto/updateBugreport.dto'

@Injectable()
export default class BugreportsService {
  private lastBugreportId = 0
  private Bugreports: Bugreport[] = []

  getAllBugreports() {
    return this.Bugreports
  }

  getBugreportById(id: number) {
    const Bugreport = this.Bugreports.find(Bugreport => Bugreport.id === id)
    if (Bugreport) {
      return Bugreport
    }
    throw new HttpException('Bugreport not found', HttpStatus.NOT_FOUND)
  }

  replaceBugreport(id: number, Bugreport: UpdateBugreportDto) {
    const BugreportIndex = this.Bugreports.findIndex(Bugreport => Bugreport.id === id)
    if (BugreportIndex > -1) {
      this.Bugreports[BugreportIndex] = Bugreport
      return Bugreport
    }
    throw new HttpException('Bugreport not found', HttpStatus.NOT_FOUND)
  }

  createBugreport(Bugreport: CreateBugreportDto) {
    const newBugreport = {
      id: ++this.lastBugreportId,
      ...Bugreport
    }
    this.Bugreports.push(newBugreport)
    return newBugreport
  }

  deleteBugreport(id: number) {
    const BugreportIndex = this.Bugreports.findIndex(Bugreport => Bugreport.id === id)
    if (BugreportIndex > -1) {
      this.Bugreports.splice(BugreportIndex, 1)
    } else {
      throw new HttpException('Bugreport not found', HttpStatus.NOT_FOUND)
    }
  }
}
