import {prisma} from "@repo/database/client"
import express, { Request, Response } from "express"

const app = express();
app.use(express.json())

app.get("/",async(req:Request,res:Response)=>{
   const users  = await prisma.user.findMany();
   res.send(users)
})
app.post("/",async(req:Request,res:Response)=>{
    console.log(req.body)
    const users = await prisma.user.create({
        data:{
            id : req.body.id,
            email: req.body.email
        }
    })
})
app.listen(3001,()=>{
    console.log("Http-Server Started")
})

