const express = require("express")
import { Message, middleware, TemplateMessage } from "@line/bot-sdk"

import { config, client } from "./lib/client"
import { reservationRes } from "./lib/message/reservationRes"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req: any, res: { sendStatus: (arg0: number) => void }) => {
  res.sendStatus(200)
})

app.post("/webhook", middleware(config), (req: any, res: any) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result))
})

const handleEvent = (event: any) => {
  if (event.type === "message") {
    const messages: (Message | TemplateMessage)[] = []

    if (event.message.text === "予約") {
      messages.push(reservationRes)
    } else {
      messages.push({
        type: "text",
        text: "何かお困りごとはございますか?",
      })
    }

    return client.replyMessage(event.replyToken, messages)
  }
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
