import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async upsertUser(@Body() dto : User):Promise<any>{
    const res = await this.appService.upsertUser(dto)
    return res
  }
}
