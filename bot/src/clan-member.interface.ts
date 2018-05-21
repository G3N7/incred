import { ClanNames } from "./clan-names.enum";
import { ClanRoles } from "./clan-roles.enum";

export interface ClanMember {
    nickName: string;
    friendlyRole: ClanRoles;
    discordRoles: string[];
}