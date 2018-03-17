import { Message } from "discord.js";
import { UserLookupService } from "../user-lookup.service";
import { BaseKingdomOfficerMessageHandler } from "../base-kingdom-officer.message-handler";
import _ = require("lodash");

export class KingdomRosterListMessageHandler extends BaseKingdomOfficerMessageHandler {

    constructor(private userLookup: UserLookupService){
        super();
    }

    selector(msg: Message): boolean {
        return msg.content.startsWith('roster list');
    }
    handle(msg: Message): void {
        let leaders = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Kingdom-Leader'))
        .map(x => x.nickname || x.displayName);
        let captains = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Kingdom-Captain'))
        .map(x => x.nickname || x.displayName);
        let knights = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Kingdom-Knight'))
        .map(x => x.nickname || x.displayName);
        let squires = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Kingdom-Squire'))
        .map(x => x.nickname || x.displayName);

        const rosterMessage = 
`**Kingdom**:
**Leaders**:
${leaders.join('\n')}

**Captains**:
${captains.join('\n')}

**Knights**:
${knights.join('\n')}

**Squires**:
${squires.join('\n')}
`;
        msg.channel.send(rosterMessage);
    }
}