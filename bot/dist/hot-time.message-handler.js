"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_message_handler_1 = require("./base.message-handler");
class HotTimeMessageHandler extends base_message_handler_1.BaseMessageHandler {
    constructor(userLookup) {
        super();
        this.userLookup = userLookup;
    }
    selector(msg) {
        return msg.content === '!hot';
    }
    handle(msg) {
        const erb = this.userLookup.findByUsername('ErB', '9343');
        const kerstt = this.userLookup.findByUsername('Kerstt', '1515');
        msg.channel.sendMessage(`Hey, <@!${erb.id}> or <@!${kerstt.id}> can you please do HOT time for ${msg.member}`);
    }
}
exports.HotTimeMessageHandler = HotTimeMessageHandler;
