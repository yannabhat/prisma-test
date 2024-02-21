import { OnModuleInit } from "@nestjs/common";
// import { PrismaClient } from "@prisma/client";
import {PrismaClient} from "@prisma2"



export class PrismaNongnoochService extends PrismaClient implements OnModuleInit {
    private prisma  = new PrismaClient()

    onModuleInit() {
        this.prisma.$connect()
    }
}