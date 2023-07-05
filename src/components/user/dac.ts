import { PrismaClient, User, Prisma } from 'prisma/prisma-client'
export default class UserDac {
    async create(user: User) {
        const prismaClient = new PrismaClient();
        const userInput: Prisma.UserCreateArgs = {
            data:
            {
                email: user.email,
                name: user.name,
                score: "0"

            }
        }
        const result = await prismaClient.user.create(userInput)
        return result
        //call dac
    }
    async get(email: string) {
        const prismaClient = new PrismaClient();
        return await prismaClient.user.findMany({ where: { email: email } })

        //call dac
    }
    async update(email: string, user: Partial<User>) {
        const prismaClient = new PrismaClient();
        return await prismaClient.user.update({ where: { email }, data: { ...user } })

        //call dac
    }
    delete(email: string) {
        console.log("delete")
        console.log(email)
        //call dac
    }

}