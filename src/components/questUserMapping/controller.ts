import { PrismaClient, Quest, QuestUserMap } from "prisma/prisma-client";
import { User } from "./models";
import { QuestMapDac } from "./dac";

class QuestMappingController {
    questDac = new QuestMapDac()
    async create(questMap: QuestUserMap) {
        return await this.questDac.create(questMap)
        //call dac
    }
    async getQuests(email: string) {
        return await this.questDac.get({ user: { email: email } })
        //call dac
    }
    async getQuestDetails(email: string, questId: string) {
        return await this.questDac.get({ user: { email: email }, quest: { id: questId } })
        //call dac
    }

    async update(email: string, questId: string, status: boolean) {
        return await this.questDac.update({ user: { email: email }, quest: { id: questId } }, { state: status })
        //call dac
    }

}