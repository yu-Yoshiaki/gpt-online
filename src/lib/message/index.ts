/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../client";
import { Message } from "@line/bot-sdk";
import { openai } from "../openai";

export const messageAction = async (event: any) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: event.message.text,
    max_tokens: 200,
    temperature: 0,
  });

  const text: Message = {
    type: "text",
    text: response.data.choices[0].text || "",
  };

  return client.replyMessage(event.replyToken, text);

  // const response = await openai.createImage({
  //   prompt: eventText,
  //   n: 1,
  //   size: "512x512",
  // });

  // const text: Message = {
  //   type: "image",
  //   originalContentUrl: response.data.data[0].url || "",
  //   previewImageUrl: response.data.data[0].url || "",
  // };

  // console.log("----", response);

  // return client.replyMessage(event.replyToken, text);
};
