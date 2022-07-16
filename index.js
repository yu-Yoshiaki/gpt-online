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

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + TOKEN
}

app.get("/", (req, res) => {
  console.log("yah")
  res.sendStatus(200)
})

app.post("/webhook", (req, res) => {
  res.send("HTTP POST request sent to the webhook URL!")

  const event = req.body.events[0]
  const messages = []
  // ユーザーがボットにメッセージを送った場合、返信メッセージを送る
  console.log(event);
  if (event.type === "message") {
    switch(event.message.text){
      case "予約":
        messages.push({
          type:"text",
          text: "下記から選択してください。",
          quickReply: {
            items:[
              {
                "type": "action",
                "action": {
                  "type": "postback",
                  "label": "予約する"
                }
              },
              {
                "type": "action",
                "action": {
                  "type": "cameraRoll",
                  "label": "Send photo"
                }
              },
              {
                "type": "action",
                "action": {
                  "type": "camera",
                  "label": "Open camera"
                }
              }
            ]},
          })
        
        break

      default:
        messages.push(
          {
            type: "text",
            text: "何かお困りごとはございますか?",
          }
        )
    }

    const dataString = JSON.stringify({
      replyToken: req.body.events[0].replyToken,
      messages
    })
    
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

  else if(event.type === "postback"){
    const dataString = JSON.stringify({
      replyToken: req.body.events[0].replyToken,
      messages:[
        {
          type: "text",
          text: event.message.text,
        }
      ]
    })
    
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
