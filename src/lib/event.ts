import { messageAction } from "./message";
import { followAction } from "./follow";
import { postbackAction } from "./postback";
import { unfollowAction } from "./unfollow";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const event = (event: any) => {
  if (event.type === "message") {
    return messageAction(event);
  }
  if (event.type === "follow") {
    return followAction(event);
  }
  if (event.type === "unfollow") {
    return unfollowAction(event);
  }
  if (event.type === "postback") {
    return postbackAction(event);
  }

  return Promise.resolve(null);
};
