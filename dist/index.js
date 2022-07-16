"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bot_sdk_1 = require("@line/bot-sdk");
const client_1 = require("./lib/client");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.sendStatus(200);
});
app.post("/webhook", (0, bot_sdk_1.middleware)(client_1.config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result));
});
const handleEvent = (event) => {
    if (event.type === "message") {
        const messages = [];
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
            });
        }
        else {
            messages.push({
                type: "text",
                text: "何かお困りごとはございますか?",
            });
        }
        return client_1.client.replyMessage(event.replyToken, messages);
    }
};
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map