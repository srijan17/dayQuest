import express from 'express'
import QuestController from './controller'

const router = express.Router()
const questController = new QuestController()
router.get('/', async (req, res) => {
    const result = await questController.get({})
    return result
})

router.get('/:id', async (req, res) => {
    const result = await questController.get({ id: req.params.id })
    return result
})


router.delete('/:id', async (req, res) => {
    const result = await questController.delete(req.params.id)
    return result
})



export default router