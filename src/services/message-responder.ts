import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { IMessageResponder, IPingFinder } from '../interfaces';

@injectable()
export class MessageResponder implements IMessageResponder {
  private pingFinder: IPingFinder;
  constructor(@inject(TYPES.PingFinder) pingFinder: IPingFinder) {
    this.pingFinder = pingFinder;
  }
  handle(message: Message): Promise<Message | Message[]> {
    if (this.pingFinder.isPing(message.content)) {
      return message.reply("Pong !");
    } else {
      return Promise.reject();
    }
  }
}
