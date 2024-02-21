import { HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaUserService } from './prisma/prisma_1.service';
import { PrismaNongnoochService } from './prisma/prisma_2.service';
import { User } from './dto/app.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly user: PrismaUserService,
    private readonly nongnooch : PrismaNongnoochService
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  async upsertUser(dto : User):Promise<any> {
    try {
      await this.user.user_master.upsert({
        where : { user_id : dto.user_id || ""},
        create : {
          user_id : dto.user_id,
          age : dto.age 
        },
        update :{
          age : dto.age
        }
      })

      await this.nongnooch.user_group.upsert({
        where : { user_id : dto.user_id || ""},
        create : {
          user_id : dto.user_id,
          user_group : dto.user_group
        },
        update : {
          user_group : dto.user_group
        }
      })
    }catch(err){
      throw new InternalServerErrorException(err)
    }

    return {
      status : HttpStatus.CREATED,
      timestamp : new Date(Date.now()).toLocaleString("th-TH",{timeZone : "Asia/Bangkok"})
    }
  }
}
