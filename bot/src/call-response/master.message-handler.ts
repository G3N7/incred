import { Message } from 'discord.js';
import { UserLookupService } from '../user-lookup.service';
import { BaseMessageHandler } from '../base.message-handler';

export class MasterMessageHandler extends BaseMessageHandler {
  requiredRoles: string[];
  allowedChannels: string[];  
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    return msg.content === '!who-is-your-master';
  }
  handle(msg: Message): void {
    const gentle = this.userLookup.findByUsername('Gent', '4068');
    
    msg.channel.send(
      `<@!${gentle.id}> is my master`
    );
  }
}
