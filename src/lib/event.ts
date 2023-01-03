import { messageAction } from "./message";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const event = (event: any) => {
  if (event.type === "message") {
    return messageAction(event);
  }

  return Promise.resolve(null);
};
