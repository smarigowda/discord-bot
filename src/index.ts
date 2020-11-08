require("dotenv").config(); // recommended way of loading dotenv

import container from "./inversify.config";
import { TYPES } from "./types";
import { IBot } from "./interfaces";

let bot = container.get<IBot>(TYPES.Bot);

bot
  .listen()
  .then(() => {
    console.log("Logged in to discord !...");
  })
  .catch((error) => {
    console.log("On no!", error);
  });
