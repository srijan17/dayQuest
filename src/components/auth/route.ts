// import isAuthenticated from '../../common/Auth/isAuthenticated';
// import express,{Request,Response} from 'express'

// const router = express.Router()

// router.get("/login",(req,res)=>{
//     res.sendFile('./public/login.html')
//   })
  
//   // app.post('/login', requiresAuth,(req: Request, res: Response)=>{
//   //   res.send("success")
//   //   });
  
  
//   router.post('/callback', isAuthenticated,(req: Request, res: Response)=>{
//       res.redirect("/home")
//       });
  
//   router.get('/logout',isAuthenticated,(req:Request,res:Response)=>{
//     res.oidc.logout().then(()=>{res.redirect("/login")})
//   })
  
//   export default router