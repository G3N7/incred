import { ClanNames } from "./clan-names.enum";
import { Message } from "discord.js";
import _ = require("lodash");

export class RosterListService {
    getClanRoster(msg: Message, clanName: ClanNames): ClanRoster {
        let leaders = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), `${clanName}-Leader`))
        .map(x => x);
        let captains = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), `${clanName}-Captain`))
        .map(x => x);
        let knights = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), `${clanName}-Knight`))
        .map(x => x);
        let squires = msg.guild.members
        .filter(x=> _.includes(x.roles.map(r => r.name), `${clanName}-Squire`))
        .map(x => x);

        let leaderMembers = leaders.map(l => {
            let member: ClanMember = {
                nickName: l.nickname || l.displayName,
                clanName: clanName,
                friendlyRole: ClanRoles.Leader,
                discordRoles: l.roles.map(r => r.name)
            };            
            return member;
        });

        let captainsMembers = captains.map(l => {
            let member: ClanMember = {
                nickName: l.nickname || l.displayName,
                clanName: clanName,
                friendlyRole: ClanRoles.Captain,
                discordRoles: l.roles.map(r => r.name)
            };            
            return member;
        });

        let knightsMembers = knights.map(l => {
            let member: ClanMember = {
                nickName: l.nickname || l.displayName,
                clanName: clanName,
                friendlyRole: ClanRoles.Captain,
                discordRoles: l.roles.map(r => r.name)
            };            
            return member;
        });

        let squiresMembers = squires.map(l => {
            let member: ClanMember = {
                nickName: l.nickname || l.displayName,
                clanName: clanName,
                friendlyRole: ClanRoles.Squire,
                discordRoles: l.roles.map(r => r.name)
            };            
            return member;
        });

        return {allMembers: leaderMembers
            .concat(captainsMembers)
            .concat(knightsMembers)
            .concat(squiresMembers)};
    }
}

export class ClanRoster {
    allMembers: ClanMember[];    
}

export class ClanMember {
    nickName: string;
    clanName: ClanNames;
    friendlyRole: ClanRoles;
    discordRoles: string[];
}

export enum ClanRoles {
    Squire = 'Squire',
    Leader = 'Leader',
    Captain = 'Captain',
    Knight = 'Knight'
}