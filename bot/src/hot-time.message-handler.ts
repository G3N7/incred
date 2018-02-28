import { BaseMessageHandler } from './base.message-handler';
import { Message } from 'discord.js';
import { UserLookupService } from './user-lookup.service';

export class HotTimeMessageHandler extends BaseMessageHandler {
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    return msg.content === '!hot';
  }
  handle(msg: Message): void {
    const erb = this.userLookup.findByUsername('ErB', '9343');
    const kerstt = this.userLookup.findByUsername('Kerstt', '1515');
    msg.channel.sendMessage(
      `Hey, <@!${erb.id}> or <@!${kerstt.id}> can you please do HOT time for ${msg.member}`
    );
  }
}
