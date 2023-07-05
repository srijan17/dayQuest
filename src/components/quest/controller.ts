import { Quest } from "prisma/prisma-client";
import { User } from "./models";
import { QuestDac } from "./dac";

export default class QuestController {
    dac = new QuestDac()

    async create(quest: Quest) {
        return this.dac.create(quest)
        //call dac
    }
    async get(quest: Partial<Quest>) {
        return this.dac.get(quest)

    }

    delete(id: string) {
        return this.dac.delete(id)
        //call dac
    }

}