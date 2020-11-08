import "reflect-metadata";
import { Container } from "inversify";
import { Client } from "discord.js";

import { Bot } from "./bot";
import { TYPES } from "./types";
import { PingFinder } from "./services/ping-finder";
import { MessageResponder } from "./services/message-responder";
import { IBot, IMessageResponder, IPingFinder } from "./interfaces";

let container = new Container();

container.bind<IBot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<IPingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();
container
  .bind<IMessageResponder>(TYPES.MessageResponder)
  .to(MessageResponder)
  .inSingletonScope();

export default container;
