import { BaseMessageHandler } from './base.message-handler';
import { ClanRoles } from './clan-roles.enum';

export abstract class BaseAllianceMessageHandler extends BaseMessageHandler {
  requiredRoles = [
    ClanRoles.Leader,
    ClanRoles.Squire,
    ClanRoles.Captain,
    ClanRoles.Knight,
    ClanRoles.Elder
  ];

  allowedChannels: string[] = [];
}
