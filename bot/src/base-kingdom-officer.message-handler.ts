import { BaseMessageHandler } from './base.message-handler';

export abstract class BaseKingdomOfficerMessageHandler extends BaseMessageHandler {
  requiredRoles = [
    'Kingdom-Leader',
    'Kingdom-Captain',
    'Kingdom-Knight',    
  ];

  allowedChannels = [
    'officers',
    'oldofficer',
    'general'
  ];
}
