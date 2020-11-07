import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { PingFinder } from "./ping-finder";

@injectable()
export class MessageResponder {
  private pingFinder: PingFinder;
  constructor(@inject(TYPES.PingFinder) pingFinder: PingFinder) {
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
