import { Message } from "discord.js";
import { UserLookupService } from "../user-lookup.service";
import _ = require("lodash");
import { ClanNames } from "../clan-names.enum";
import { BaseOfficerMessageHandler } from "../base-officer.message-handler";
import { RosterListService } from "../roster-list.service";
import { ClanRoles } from "../clan-roles.enum";

export class RosterListMessageHandler extends BaseOfficerMessageHandler {

    constructor(private rosterListService: RosterListService){
        super();
    }

    requiredRoles = [
        `Leader`,
        `Captain`,
        `Knight`
    ];

    selector(msg: Message): boolean {
        return msg.content.trim() === '!roster list';
    }
    handle(msg: Message): void {

        let leaders = this.rosterListService.getMembersByRole(msg, ClanRoles.Leader);
        let captains = this.rosterListService.getMembersByRole(msg, ClanRoles.Captain);
        let knights = this.rosterListService.getMembersByRole(msg, ClanRoles.Knight);
        let squires = this.rosterListService.getMembersByRole(msg, ClanRoles.Squire);
        
        const rosterMessage = 
`**${ClanNames.Incredibles}**:
**Leaders**:
${leaders.map(l => l.nickName).join('\n')}

**Captains**:
${captains.map(l => l.nickName).join('\n')}

**Knights**:
${knights.map(l => l.nickName).join('\n')}

**Squires**:
${squires.map(l => l.nickName).join('\n')}
`;
        msg.channel.send(rosterMessage);
    }
}