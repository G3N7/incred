import { BaseMessageHandler } from './base.message-handler';

export abstract class BaseOfficerMessageHandler extends BaseMessageHandler {
  allowedChannels = [
    'officers',
    'oldofficer',
    'general'
  ];
}
