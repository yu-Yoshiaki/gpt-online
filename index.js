const https = require("https")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000
const TOKEN = process.env.LINE_ACCESS_TOKEN

app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

app.get("/",(req,res)=>{
  res.statusCode(200)
})

app.listen(PORT,()=>{
  console.log(`Example app listening at http://localhost:${PORT}`);
})

app.post("/webhook",function(req,res){
  res.send("HTTP POST request sent to the webhook URL!")

  if(req.body.events[0].type === "message"){

    const dataString = JSON.stringify({
      replyToken: req.body.events[0].replyToken,
      message:[
        {
          "type": "text",
          "text": "Hello, User."
        },
        {
          "type": "text",
          "text": "May I help you."
        }
      ]
    })

    // リクエストヘッダー
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + TOKEN
    }

    // リクエストに渡すオプション
    const webhookOptions = {
      "hostname": "api.line.me",
      "path": "/v2/bot/message/reply",
      "method": "POST",
      "headers": headers,
      "body": dataString
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

