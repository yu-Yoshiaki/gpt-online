/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";

import { middlewareConfig } from "./lib/client";
// import { handleEvent } from "./lib/handleEvent";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.status(200).json("okke");
});

app.post("/webhook", middlewareConfig, (req, res) => {
  // const events = req.body.events;
  // Promise.all(events.map(handleEvent)).then((result) => res.json(result));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
