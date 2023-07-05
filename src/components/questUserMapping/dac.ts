import { User } from "./models"
import { Prisma, PrismaClient, Quest, QuestUserMap } from 'prisma/prisma-client'
export class QuestMapDac {
    async create(questUserMap: QuestUserMap) {
        const prisma = new PrismaClient()
        return prisma.questUserMap.create({ data: questUserMap })
        //call dac
    }
    async get(questMap: Prisma.QuestUserMapWhereInput) {
        const prisma = new PrismaClient()
        return prisma.questUserMap.findMany({ where: questMap })
        //call dac
    }

    update(questMap: Prisma.QuestUserMapWhereInput, updated: Partial<QuestUserMap>) {
        const prisma = new PrismaClient()
        return prisma.questUserMap.updateMany({ where: questMap, data: updated })
        //call dac
    }

}