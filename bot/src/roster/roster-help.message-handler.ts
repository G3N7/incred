import { Message, VoiceChannel, TextChannel } from "discord.js";
import { BaseOfficerMessageHandler } from "../base-officer.message-handler";
import { ClanRoles } from "../clan-roles.enum";
import { ChannelType, ChannelLookupService } from "../channel-lookup.service";

export class RosterHelpMessageHandler extends BaseOfficerMessageHandler {

    constructor(private channelLookupService: ChannelLookupService){
        super();
    }

    requiredRoles = [
        ClanRoles.Leader,
        ClanRoles.Elder,
        ClanRoles.Captain,
        ClanRoles.Knight
    ];

    selector(msg: Message): boolean {
        return msg.content.trim() === '!roster help' || msg.content.trim() === '!roster';
    }
    handle(msg: Message): void {
        msg.channel.send(`Commands:\n\`!roster list\`\n\`!roster present\``);
    }
}