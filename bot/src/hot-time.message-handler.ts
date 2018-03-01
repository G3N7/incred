import { Message } from 'discord.js';
import { UserLookupService } from './user-lookup.service';
import { BaseIncredMessageHandler } from './base-incred.message-handler';

export class HotTimeMessageHandler extends BaseIncredMessageHandler {
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    return msg.content === '!hot';
  }
  handle(msg: Message): void {
    const erb = this.userLookup.findByUsername('ErB', '9343');
    const kerstt = this.userLookup.findByUsername('Kerstt', '1515');
    msg.channel.send(
      `Hey, <@!${erb.id}> or <@!${kerstt.id}> can you please do HOT time for ${msg.member}`
    );
  }
}
