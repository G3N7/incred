import { BaseMessageHandler } from './base.message-handler';

export abstract class BaseIncredMessageHandler extends BaseMessageHandler {
    requiredRoles = ['Leader', 'Squire', 'Captain', 'Knight']
}
