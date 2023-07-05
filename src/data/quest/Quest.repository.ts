// import { PrismaClient, Prisma, Quest } from "@prisma/client";
// import { IQuestRepository } from "./IQuestRepository";

// export class QuestRepository implements IQuestRepository {
//     prisma: PrismaClient;
//     constructor() {
//         this.prisma = new PrismaClient();
//     }
//     async create(data: Quest): Promise<Quest> {
//         const created = await this.prisma.quest.create({
//             data: data
//         })
//         return created
//     }
//     async delete(where: Prisma.QuestWhereInput): Promise<number> {
//         const deleted = await this.prisma.quest.deleteMany({
//             where: where
//         })
//         return deleted.count
//     }
//     update(): void {
//         throw new Error("Method not implemented.");
//     }

//     async find(where: Prisma.QuestWhereInput): Promise<Quest[]> {
//         //     const quests = await this.prisma.quest.findMany({
//         //        where:where
//         //     })
//         //     return quests
//         // }
//     }