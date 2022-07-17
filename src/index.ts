/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express = require("express");

import { middlewareConfig } from "./lib/client";
import { handleEvent } from "./lib/handleEvent";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_: any, res: { sendStatus: (arg0: number) => void }) => {
  res.sendStatus(200);
});

app.post("/webhook", middlewareConfig, (req: any, res: any) => {
  console.log("events-----", req.body.events);
  Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
