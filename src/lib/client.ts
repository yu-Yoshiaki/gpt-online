import { Client } from "@line/bot-sdk";

export const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN as string,
  channelSecret: process.env.LINE_CHANNEL_SECRET as string,
};

export const client = new Client(config);
