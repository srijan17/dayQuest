import express from 'express'

const router = express.Router()

router.get('/quest/questId', (req, res) => {
    return res.send({ prompt: "here is a prompt get all1 " })
})

router.get('/:email', (req, res) => {
    return res.send({ prompt: "here is a prompt get 1", val: req.params.email })
})

router.post('/', (req, res) => {
    return res.send(req.body)
})



router.put('/:id', (req, res) => {
    return res.send({ prompt: "here is a prompt update 1" })
})



export default router