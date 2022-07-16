"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.config = void 0;
const bot_sdk_1 = require("@line/bot-sdk");
exports.config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
};
exports.client = new bot_sdk_1.Client(exports.config);
//# sourceMappingURL=client.js.map