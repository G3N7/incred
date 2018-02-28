import { BaseMessageHandler } from "./base.message-handler";
import { Message } from "discord.js";
import { UserLookupService } from "./user-lookup.service";

export class GentleArmySummonMessageHandler extends BaseMessageHandler {

    constructor(private userLookup: UserLookupService){
        super();
    }
    selector(msg: Message): boolean {
        return msg.content === 'GA go!'
    }
    handle(msg: Message): void {
        const gent = this.userLookup.findByUsername('Gent', '4068');
        msg.channel.sendMessage(`Gentle army on the way! <@!${gent.id}>`);
    }
}