import { Message } from 'discord.js';
import { UserLookupService } from '../user-lookup.service';
import { BaseIncredMessageHandler } from '../base-incred.message-handler';

export class CanIKillHandler extends BaseIncredMessageHandler {
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    let normalized = msg.content.toLocaleLowerCase().trim();
    return normalized.startsWith('can i kill');
  }
  handle(msg: Message): void {
    var ally = [
      'kingdom',
      'churn',
      'teaparty',
      'tea party',
      'tp',
      'defiance',
      'tekniques'
    ];

    let normalized = msg.content.toLocaleLowerCase().trim();
    var clanName = normalized.replace('can i kill', '').trim();

    if (ally.filter(x => x == clanName).length > 0) {
      msg.channel.send(`Hey, ${msg.member} You cannot kill ${clanName}`);
    } else {
      msg.channel.send(`Hey, ${msg.member} Party on! Kill Kill Kill`);
    }
  }
}
