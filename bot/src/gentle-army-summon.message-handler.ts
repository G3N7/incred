import { Message } from "discord.js";
import { UserLookupService } from "./user-lookup.service";
import { BaseIncredMessageHandler } from "./base-incred.message-handler";

export class GentleArmySummonMessageHandler extends BaseIncredMessageHandler {

    constructor(private userLookup: UserLookupService){
        super();
    }

    selector(msg: Message): boolean {
        return msg.content === 'GA go!'
    }
    handle(msg: Message): void {
        const gent = this.userLookup.findByUsername('Gent', '4068');
        const daev = this.userLookup.findByUsername('Daevien', '2530');
        msg.channel.sendMessage(`Do not fear ${msg.member} the Gentle Army is on the way, watch out <@!${daev.id}>!\n<@!${gent.id}>`);
    }
}