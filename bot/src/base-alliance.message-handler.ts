import { BaseMessageHandler } from './base.message-handler';

export abstract class BaseAllianceMessageHandler extends BaseMessageHandler {
  requiredRoles = [
    'Incredibles-Leader',
    'Incredibles-Squire',
    'Incredibles-Captain',
    'Incredibles-Knight',
    'Kingdom-Leader',
    'Kingdom-Squire',
    'Kingdom-Captain',
    'Kingdom-Knight'
  ];

  allowedChannels: string[] = [];
}
