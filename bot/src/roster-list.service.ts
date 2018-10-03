import { Message } from "discord.js";
import _ = require("lodash");
import { ClanRoles } from "./clan-roles.enum";
import { ClanMember } from "./clan-member.interface";

export class RosterListService {
    getMembersByRole(msg: Message, clanRole: ClanRoles) {
        let discordMembers = msg.guild.members
            .filter(x => _.includes(x.roles.map(r => r.name), clanRole))
            .map(x => x);

        let clanMembers = discordMembers.map(l => {
            let member: ClanMember = {
                nickName: l.nickname || l.displayName,
                friendlyRole: clanRole,
                discordRoles: l.roles.map(r => r.name)
            };
            return member;
        });

        return clanMembers;
    }
}