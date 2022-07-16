"use strict"
exports.__esModule = true
var express = require("express")
var bot_sdk_1 = require("@line/bot-sdk")
var client_1 = require("./lib/client")
var app = express()
var PORT = process.env.PORT || 3000
app.get("/", function (req, res) {
  res.sendStatus(200)
})
app.post("/webhook", (0, bot_sdk_1.middleware)(client_1.config), function (req, res) {
  Promise.all(req.body.events.map(handleEvent)).then(function (result) {
    return res.json(result)
  })
})
var handleEvent = function (event) {
  if (event.type === "message") {
    var messages = []
    if (event.message.text === "予約") {
      messages.push({
        type: "text",
        text: "下記から選択してください。",
        quickReply: {
          items: [
            {
              type: "action",
              action: {
                type: "postback",
                label: "予約する",
                data: "action=buy&itemid=111",
                displayText: "予約",
              },
            },
            {
              type: "action",
              action: {
                type: "cameraRoll",
                label: "Send photo",
              },
            },
            {
              type: "action",
              action: {
                type: "camera",
                label: "Open camera",
              },
            },
          ],
        },
      })
    } else {
      messages.push({
        type: "text",
        text: "何かお困りごとはございますか?",
      })
    }
    return client_1.client.replyMessage(event.replyToken, messages)
  }
}
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT))
})
