import { ClanNames } from "./clan-names.enum";
import { Message } from "discord.js";
import _ = require("lodash");
import { ClanRoles } from "./clan-roles.enum";
import { ClanMember } from "./clan-member.interface";
import { ClanRoster } from "./clan-roster.interface";

export class RosterListService {
    getClanRoster(msg: Message, clanName: ClanNames): ClanRoster {
        let leaderMembers = this.getMembersByRole(msg, ClanRoles.Leader);
        let elderMembers = this.getMembersByRole(msg, ClanRoles.Elder);
        let captainsMembers = this.getMembersByRole(msg, ClanRoles.Captain);
        let knightsMembers = this.getMembersByRole(msg, ClanRoles.Knight);
        let squiresMembers = this.getMembersByRole(msg, ClanRoles.Squire);

        return {
            allMembers: [
                ...leaderMembers,
                ...elderMembers,
                ...captainsMembers,
                ...knightsMembers,
                ...squiresMembers]
        };
    }

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