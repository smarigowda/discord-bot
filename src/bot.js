"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
class Bot {
    listen() {
        let client = new discord_js_1.Client();
        client.on("message", (message) => { });
        return client.login("token should be here...");
    }
}
exports.Bot = Bot;
//# sourceMappingURL=bot.js.map