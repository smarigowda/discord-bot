import { Client, Message } from "discord.js";
import { inject, injectable } from "inversify";
import { IMessageResponder } from "./interfaces";
import { TYPES } from "./types";


@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: IMessageResponder;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.MessageResponder) messageResponder: IMessageResponder
  ) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
  }
  public listen(): Promise<string> {
    this.client.on("message", (message: Message) => {
      if (message.author.bot) {
        console.log("Ignoring bot message !");
        return;
      }
      console.log("Message received! Content: ", message.content);
      this.messageResponder
        .handle(message)
        .then(() => {
          console.log("Response Sent !");
        })
        .catch(() => {
          console.log("Response not sent.");
        });
    });
    return this.client.login(this.token);
  }
}
