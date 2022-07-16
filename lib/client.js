"use strict"
exports.__esModule = true
exports.client = exports.config = void 0
var bot_sdk_1 = require("@line/bot-sdk")
exports.config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
}
exports.client = new bot_sdk_1.Client(exports.config)
