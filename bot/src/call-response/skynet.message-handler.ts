import { Message } from 'discord.js';
import { UserLookupService } from '../user-lookup.service';
import { BaseAllianceMessageHandler } from '../base-alliance.message-handler';

export class SkynetMessageHandler extends BaseAllianceMessageHandler {
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    return msg.content.toLocaleLowerCase().includes('skynet');
  }
  handle(msg: Message): void {
    const gentle = this.userLookup.findByUsername('Gent', '4068');
    
    msg.channel.send(
      `<@!${gentle.id}> is it time?`
    );
  }
}
