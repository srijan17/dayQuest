// import express from 'express'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
// const app = express()

// app.get('/feed', async (req, res) => {
//     const posts = await prisma.post.findMany({
//         where: { published: true },
//         include: { author: true },
//     })
//     res.json(posts)
// })

// app.post('/post', async (req, res) => {
//     const { title, content, authorEmail } = req.body
//     const post = await prisma.post.create({
//         data: {
//             title,
//             content,
//             published: false,
//             author: { connect: { email: authorEmail } },
//         },
//     })
//     res.json(post)
// })



// app.delete('/user/:id', async (req, res) => {
//     const { id } = req.params
//     const userId = parseInt(id)
//     const user = await prisma.user.delete({
//         where: {
//             id: userId,
//         },
//     })
//     res.json(user)
// })

// const server = app.listen(3000)