import { Message } from "discord.js";
import { UserLookupService } from "../user-lookup.service";
import { BaseAllianceMessageHandler } from "../base-alliance.message-handler";

export class GentleArmySummonMessageHandler extends BaseAllianceMessageHandler {

    constructor(private userLookup: UserLookupService){
        super();
    }

    selector(msg: Message): boolean {
        return msg.content === 'GA go!'
    }
    handle(msg: Message): void {
        const gent = this.userLookup.findByUsername('Gent', '4068');
        const daev = this.userLookup.findByUsername('Daevien', '2530');
        msg.channel.send(`Do not fear ${msg.member} the Gentle Army is on the way, watch out <@!${daev.id}>!\n<@!${gent.id}>`);
    }
}