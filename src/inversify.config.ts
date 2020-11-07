import "reflect-metadata";
import { Container } from "inversify";
import { Client } from "discord.js";

import { Bot } from './bot';
import { TYPES } from "./types";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);

export default container;