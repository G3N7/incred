import { Message } from 'discord.js';
import { UserLookupService } from '../user-lookup.service';
import { BaseAllianceMessageHandler } from '../base-alliance.message-handler';

export class HotTimeMessageHandler extends BaseAllianceMessageHandler {
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    return msg.content === '!hot';
  }
  handle(msg: Message): void {
    const erb = this.userLookup.findByUsername('ErB', '9343');
    const kerstt = this.userLookup.findByUsername('Kerstt', '1515');    
    const fourGo = this.userLookup.findByUsername('4go101', '8005');
    msg.channel.send(
      `Hey, <@!${erb.id}>, <@!${kerstt.id}>, and <@!${fourGo.id}> can you please do HOT time for ${msg.member}`
    );
  }
}
