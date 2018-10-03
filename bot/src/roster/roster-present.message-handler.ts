import { Message, VoiceChannel, TextChannel } from "discord.js";
import { BaseOfficerMessageHandler } from "../base-officer.message-handler";
import { ClanRoles } from "../clan-roles.enum";
import { ChannelType, ChannelLookupService } from "../channel-lookup.service";

export class RosterPresentMessageHandler extends BaseOfficerMessageHandler {

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
        return msg.content.trim() === '!roster present';
    }
    handle(msg: Message): void {
        const generalVoiceChannel = <VoiceChannel>msg.guild.channels
        .filter(c=> c.name == "General" && c.type == "voice")
        .map(c => c)[0];
               
        const memberNames = generalVoiceChannel.members.map(x => {
            return `${x.nickname}${x.deaf ? ' 🎧' : ''}`
        });
               
        const officerChannel = this.channelLookupService.lookupByName<TextChannel>("officers", ChannelType.text);

        const today = new Date().toLocaleDateString("en-US");
        const messageLines = [
            `Present in voice on ${today}:`,
            ...memberNames
        ];

        officerChannel.sendMessage(messageLines.join(`\n`));
    }
}