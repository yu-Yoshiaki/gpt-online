const https = require("https")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const TOKEN = process.env.LINE_ACCESS_TOKEN
// const SECRET = process.env.LINE_CHANNEL_SECRET


//ミドルウェア設定
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (req, res) => {
  res.sendStatus(200)
})

app.post("/webhook", (req, res)=> {
  res.send("HTTP POST request sent to the webhook URL!")

  const event = req.body.events[0]
  console.log("--------",event);
  // ユーザーがボットにメッセージを送った場合、返信メッセージを送る
  if (event.type === "message") {
    const messages = ()=>{ 
      if(event.message.text==="予約"){
        return [
          {
            "type":"text",
            "text": "予約受け付けました。"
          }
        ]
      }
      
      return [
      {
        "type": "text",
        "text": "Hello, user"
      },
      {
        "type": "text",
        "text": "May I help you?"
      }
    ]
  }

    // リクエストに渡すオプション
    const webhookOptions = {
      "hostname": "api.line.me",
      "path": "/v2/bot/message/reply",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + TOKEN
      },
      "body": JSON.stringify({
        replyToken: event.replyToken,
        messages
      })
    }

    // リクエストの定義
    const request = https.request(webhookOptions, (res) => {
      res.on("data", (d) => {
        process.stdout.write(d)
      })
    })

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
