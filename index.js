const https = require( "https")
const express = require( "express")
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

app.get("/", (req, res) => {
  console.log("yah")
  res.sendStatus(200)
})

app.post("/webhook", (req, res) => {
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
      replyToken: req.body.events[0].replyToken,
      messages: [
        {
          "type": "text",
          "text": "Hello, user"
        },
        {
          "type": "text",
          "text": "May I help you?"
        }
      ]
    })
    
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + TOKEN
    }
    
    const webhookOptions = {
      "hostname": "api.line.me",
      "path": "/v2/bot/message/reply",
      "method": "POST",
      "headers": headers,
      "body": dataString
    }

    // リクエストの定義
    const request = https.request(
      webhookOptions,
      (res) => {
        res.on("data", (d) => {
          process.stdout.write(d)
        })
      }
    )

    // エラーをハンドル
    request.on("error", (err) => {
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
