import { Message, VoiceChannel, TextChannel } from "discord.js";
import { BaseOfficerMessageHandler } from "../base-officer.message-handler";
import { ClanRoles } from "../clan-roles.enum";
import { ChannelType, ChannelLookupService } from "../channel-lookup.service";

export class RosterHelpMessageHandler extends BaseOfficerMessageHandler {

    constructor(){
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
        const commandList = [
            `Commands:`,
            `\`!roster list\` - Lists all members by their rights in discord`,
            `\`!roster present\` - Captures a snapshot of who is present in General voice chat`
        ];

        msg.channel.send(commandList.join("\n"));
    }
}