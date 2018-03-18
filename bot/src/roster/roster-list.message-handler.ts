import { Message } from "discord.js";
import { UserLookupService } from "../user-lookup.service";
import _ = require("lodash");
import { ClanNames } from "../clan-names.enum";
import { BaseOfficerMessageHandler } from "../base-officer.message-handler";
import { RosterListService, ClanRoles } from "../roster-list.service";

export class RosterListMessageHandler extends BaseOfficerMessageHandler {

    constructor(private rosterListService: RosterListService, private clan: ClanNames){
        super();
    }

    requiredRoles = [
        `${this.clan}-Leader`,
        `${this.clan}-Captain`,
        `${this.clan}-Knight`
    ];

    selector(msg: Message): boolean {
        return msg.content.startsWith('roster list');
    }
    handle(msg: Message): void {

        let roster = this.rosterListService.getClanRoster(msg, this.clan);
        let leaders = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Leader);
        let captains = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Captain);
        let knights = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Knight);
        let squires = roster.allMembers.filter(m => m.friendlyRole == ClanRoles.Squire);
        
        const rosterMessage = 
`**${this.clan}**:
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