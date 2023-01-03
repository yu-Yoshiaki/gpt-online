import { Client, middleware } from "@line/bot-sdk";
/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const channelAccessToken = process.env.LINE_ACCESS_TOKEN as string;
const channelSecret = process.env.LINE_CHANNEL_SECRET as string;

export const client = new Client({ channelAccessToken });
export const middlewareConfig = middleware({ channelSecret });
