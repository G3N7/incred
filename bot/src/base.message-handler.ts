import { Message } from 'discord.js';

export abstract class BaseMessageHandler {
    abstract selector(msg: Message): boolean;
    abstract requiredRoles: string[];
    abstract allowedChannels: string[];
    abstract handle(msg: Message): void;
}