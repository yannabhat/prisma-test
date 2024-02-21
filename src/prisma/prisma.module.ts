import { Global, Module } from "@nestjs/common";
import { PrismaNongnoochService } from "./prisma_2.service";
import { PrismaUserService } from "./prisma_1.service";


@Global()
@Module({
    exports : [PrismaNongnoochService,PrismaUserService],
    providers : [PrismaNongnoochService,PrismaUserService]
})
export class PrismaModule {}