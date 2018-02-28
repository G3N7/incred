import { Message } from 'discord.js';

export abstract class BaseMessageHandler {
    abstract selector(msg: Message): boolean;
    abstract handle(msg: Message): void;
}