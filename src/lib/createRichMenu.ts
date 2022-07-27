import { RichMenu } from "@line/bot-sdk";
import { createReadStream } from "fs";
// import { join } from "path";
import { client } from "./client";

export const createRichMenu = async (richMenuData: RichMenu) => {
  const id = await client.createRichMenu(richMenuData);
  return id;
};

export const setRichMenuImage = async ({
  richMenuId,
  url,
}: {
  richMenuId: string;
  url: string;
}) => {
  // const path = join(__dirname, url);
  const buffer = createReadStream(url);
  await client.setRichMenuImage(richMenuId, buffer);
};

export const deleteRichMenu = (richMenuId: string) => {
  client.deleteRichMenu(richMenuId);
};

export const setDefaultMenu = (richMenuId: string) => {
  client.setDefaultRichMenu(richMenuId);
};
