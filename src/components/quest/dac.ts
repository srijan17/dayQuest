import { User } from "./models"
import { PrismaClient, Quest } from 'prisma/prisma-client'
export class QuestDac {
    async create(quest: Quest) {
        const prisma = new PrismaClient()
        return prisma.quest.create({ data: quest })
        //call dac
    }
    async get(quest: Partial<Quest>) {
        const prisma = new PrismaClient()
        return await prisma.quest.findMany({ where: quest })
        //call dac
    }

    async delete(id: string) {
        const prisma = new PrismaClient()
        return await prisma.quest.delete({ where: { id } })
        //call dac
    }

}