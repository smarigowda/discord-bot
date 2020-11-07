require("dotenv").config(); // recommended way of loading dotenv

import container from "./inversify.config";
import { Bot } from "./bot";
import { TYPES } from "./types";

let bot = container.get<Bot>(TYPES.Bot);

bot
  .listen()
  .then(() => {
    console.log("Logged in to discord !...");
  })
  .catch((error) => {
    console.log("On no!", error);
  });
