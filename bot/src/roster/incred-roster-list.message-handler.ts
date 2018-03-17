import { Message } from "discord.js";
import { UserLookupService } from "../user-lookup.service";
import { BaseIncredOfficerMessageHandler } from "../base-incred-officer.message-handler";
import _ = require("lodash");

export class IncredRosterListMessageHandler extends BaseIncredOfficerMessageHandler {

    constructor(private userLookup: UserLookupService){
        super();
    }

    selector(msg: Message): boolean {
        return msg.content.startsWith('roster list');
    }
    handle(msg: Message): void {
        console.log('starting roster')
        let leaders = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Incredibles-Leader'))
        .map(x => x.nickname || x.displayName);
        let captains = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Incredibles-Captain'))
        .map(x => x.nickname || x.displayName);
        let knights = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Incredibles-Knight'))
        .map(x => x.nickname || x.displayName);
        let squires = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), 'Incredibles-Squire'))
        .map(x => x.nickname || x.displayName);

        const rosterMessage = 
`**Incredibles**:
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