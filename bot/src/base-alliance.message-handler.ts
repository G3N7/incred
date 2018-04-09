import { BaseMessageHandler } from './base.message-handler';

export abstract class BaseAllianceMessageHandler extends BaseMessageHandler {
  requiredRoles = [
    'Leader',
    'Squire',
    'Captain',
    'Knight'    
  ];

  allowedChannels: string[] = [];
}
