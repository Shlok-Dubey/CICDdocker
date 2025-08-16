import express from 'express'
//@ts-ignore
import {WebSocketServer} from 'ws';
import {prisma} from "@repo/database/client";

const app = express();

const server = app.listen(8080,()=>{
    console.log('Web socket is connected')
})

const wss = new WebSocketServer({server});

wss.on("connection",(socket)=>{
    socket.on("error",console.error);
    socket.on("message",async (data,isBinary)=>{
        const info = JSON.parse(data)
      const user =  await prisma.user.create({
            data:{
                id : info.id,
                email:info.email
            }
        })
        socket.send(user)
    })
})
