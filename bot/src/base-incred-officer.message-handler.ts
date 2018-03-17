import { BaseMessageHandler } from './base.message-handler';

export abstract class BaseIncredOfficerMessageHandler extends BaseMessageHandler {
  requiredRoles = [
    'Incredibles-Leader',
    'Incredibles-Captain',
    'Incredibles-Knight',    
  ];

  allowedChannels = [
    'officers',
    'oldofficer',
    'general'
  ];
}
