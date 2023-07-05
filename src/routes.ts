import user from './components/user/route'
import express from 'express'
import userRouter from './components/user/route'
import questRouter from './components/quest/route'
import questUserMapRouter from './components/questUserMapping/route'
// import AuthRouter from './components/auth/route'
const router = express.Router()
// router.use('/quest', QuestRouter)
router.use('/user', userRouter)
router.use('/quest', questRouter)
router.use('/questUser', questUserMapRouter)

// export default router
import path from 'path'
import fs from 'fs'
import { sync } from 'glob'


// export default async () => {

//     const routePaths = sync('C:/code/DayQuest/Day/dist/**/*.routes.*')
//     // const routePaths = sync(path.join(__dirname, '**/*.routes.*').replace("\\","/"));
//     console.log(routePaths)
//     console.log(path.join(__dirname, '**/*.routes.*'))
//     const router = express.Router()
//     for(const route of routePaths){
//         try {
//             const item = await import(route);
//             const baseRoute = path.basename(route).split('.')[0]
//             router.use(`/api/${baseRoute}/`, item.default);
//         } catch (error) {
//             console.log(error);
//         }

//     }
//     // await routePaths.map(async (route) => {
//     // }
//     // )

//     console.log(router.length)

export default router

    // forEach(async (filename) => {
    //     let route = path.join(routePath, filename);
    //     try {
    //         const item = await import(route);
    //         router.use('/api', item.default);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // });

// } 