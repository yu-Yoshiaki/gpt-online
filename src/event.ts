import { message } from "./message";
import { follow } from "./follow";
import { poctback } from "./postback";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const event = (event: any) => {
  if (event.type === "message") {
    return message(event);
  }
  if (event.type === "follow") {
    return follow(event);
  }
  if (event.type === "postback") {
    return poctback(event);
  }

  return Promise.resolve(null);
};
