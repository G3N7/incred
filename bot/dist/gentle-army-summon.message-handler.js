"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_message_handler_1 = require("./base.message-handler");
class GentleArmySummonMessageHandler extends base_message_handler_1.BaseMessageHandler {
    constructor(userLookup) {
        super();
        this.userLookup = userLookup;
    }
    selector(msg) {
        return msg.content === 'GA go!';
    }
    handle(msg) {
        const gent = this.userLookup.findByUsername('Gent', '4068');
        msg.channel.sendMessage(`Gentle army on the way! <@!${gent.id}>`);
    }
}
exports.GentleArmySummonMessageHandler = GentleArmySummonMessageHandler;
