import { OnModuleInit } from "@nestjs/common";
// import { PrismaClient } from "@prisma/client";
import {PrismaClient} from "@prisma1"



export class PrismaUserService extends PrismaClient implements OnModuleInit {
    private prisma  = new PrismaClient()

    onModuleInit() {
        this.prisma.$connect()
    }
}