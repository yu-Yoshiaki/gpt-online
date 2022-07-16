const https = require("https")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const TOKEN = process.env.LINE_ACCESS_TOKEN
// const SECRET = process.env.LINE_CHANNEL_SECRET

//ミドルウェア設定
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req: any, res: { sendStatus: (arg0: number) => void }) => {
  console.log("yah")
  res.sendStatus(200)
})

app.post("/webhook", (req: { body: { events: any[] } }, res: { send: (arg0: string) => void }) => {
  res.send("HTTP POST request sent to the webhook URL!")

  const event = req.body.events[0]
  console.log("-----------",event);
  // const messages = []
  // ユーザーがボットにメッセージを送った場合、返信メッセージを送る
  if (event.type === "message") {
    // if (event.message.text === "予約") {
    //   messages.push({
    //     type: "text",
    //     text: "予約受け付けました。",
    //   })
    // } else {
    //   messages.push(
    //     {
    //       type: "text",
    //       text: "Hello, user",
    //     },
    //     {
    //       type: "text",
    //       text: "May I help you?",
    //     }
    //   )
    // }
    // console.log("============", messages)

    const dataString = JSON.stringify({
      replyToken: event.replyToken,
      messages:[
        {
          type: "text",
          text: "Hello, user",
        },
        {
          type: "text",
          text: "May I help you?",
        }
      ],
    })

    // リクエストに渡すオプション
    const webhookOptions = {
      hostname: "api.line.me",
      path: "/v2/bot/message/reply",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: dataString,
    }

    // リクエストの定義
    const request = https.request(
      webhookOptions,
      (res: { on: (arg0: string, arg1: (d: any) => void) => void }) => {
        res.on("data", (d: string | Uint8Array) => {
          process.stdout.write(d)
        })
      }
    )

    // エラーをハンドル
    request.on("error", (err: any) => {
      console.error(err)
    })

    // データを送信
    request.write(dataString)
    request.end()
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
