import { User } from 'prisma/prisma-client'
import UserDac from './dac'
export default class UserController {
    dac = new UserDac()
    async create(user: User) {
        console.log("creating")
        console.log(user)
        return await this.dac.create(user)

        //call dac
    }
    async get(email: string) {
        return await this.dac.get(email)
        //call dac
    }
    async update(email: string, user: Partial<User>) {
        console.log(email)
        return await this.dac.update(email, user)
        //call dac
    }
    delete(email: string) {
        console.log("delete")
        console.log(email)
        //call dac
    }

}