import {prisma} from "@repo/database/client"
import express, { Request, Response } from "express"

const app = express();

app.get("/",async(req:Request,res:Response)=>{
    const post = await prisma.user.create({
        id:req.body.id,
    })
    res.send("hello")
})
app.listen(3000,()=>{
    console.log("Http-Server Started")
})

