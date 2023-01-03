/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */

//requireじゃないと本番ビルドがエラー
const express = require("express");
import { middlewareConfig } from "./lib/client";
import { event } from "./lib/event";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_: any, res: any) => {
  res.sendStatus(200);
});

app.post("/webhook", middlewareConfig, (req: any, res: any) => {
  console.log("events: ", req.body.events);

  Promise.all(req.body.events.map(event)).then((result) => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
