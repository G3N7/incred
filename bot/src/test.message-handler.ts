import { Message } from "discord.js";
import { UserLookupService } from "./user-lookup.service";
import { BaseIncredMessageHandler } from "./base-incred.message-handler";

export class TestMessageHandler extends BaseIncredMessageHandler {

    selector(msg: Message): boolean {
        return msg.content === 'test'
    }
    handle(msg: Message): void {
        msg.reply('Test recieved, stop being obtuse!');
    }
}