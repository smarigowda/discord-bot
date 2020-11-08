import { Message } from "discord.js";

export interface IPingFinder {
  isPing(searchString: string): boolean;
}

export interface IMessageResponder {
  handle(message: Message): Promise<Message | Message[]>;
}

export interface IBot {
  listen(): Promise<string>;
}
