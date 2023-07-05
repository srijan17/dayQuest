import express from 'express'
import UserController from './controller'
const router = express.Router()
const userController = new UserController()
router.get('/:email', async (req, res) => {
    try {
        const email = req.params.email
        const result = await userController.get(email)
        res.send(result)
    }
    catch (e) {
        res.send(e)
    }
})


router.post('/', async (req, res) => {
    try {
        const result = await userController.create(req.body)
        res.send(result)
    }
    catch (e) {
        console.error(e)

        res.send(e)
    }
})



router.put('/:email', async (req, res) => {
    try {
        const email = req.params.email
        console.log(email)
        const result = await userController.update(email, req.body)

        res.send(result)
    }
    catch (e) {
        console.error(e)
        res.send(e)
    }
})

export default router