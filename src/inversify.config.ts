import "reflect-metadata";
import { Container } from "inversify";
import { Client } from "discord.js";

import { Bot } from "./bot";
import { PingFinder } from "./services/ping-finder";
import { TYPES } from "./types";
import { MessageResponder } from "./services/message-responder";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();
container
  .bind<MessageResponder>(TYPES.MessageResponder)
  .to(MessageResponder)
  .inSingletonScope();

export default container;
