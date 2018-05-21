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
        return msg.content.startsWith('roster list');
    }
    handle(msg: Message): void {

        let roster = this.rosterListService.getClanRoster(msg, ClanNames.Incredibles);
        let leaders = this.rosterListService.getMembersByRole(msg, ClanRoles.Leader);
        let captains = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Captain);
        let knights = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Knight);
        let squires = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Squire);
        
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