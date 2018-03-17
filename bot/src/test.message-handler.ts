import { Message } from "discord.js";
import { UserLookupService } from "./user-lookup.service";
import { BaseAllianceMessageHandler } from "./base-alliance.message-handler";

export class TestMessageHandler extends BaseAllianceMessageHandler {

    selector(msg: Message): boolean {
        return msg.content === 'test'
    }
    handle(msg: Message): void {
        msg.reply('Test recieved, stop being obtuse!');
    }
    
    allowedChannels = ['officers'];
}