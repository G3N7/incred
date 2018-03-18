import { Message } from 'discord.js';
import { UserLookupService } from '../user-lookup.service';
import { BaseAllianceMessageHandler } from '../base-alliance.message-handler';

export class CanIKillHandler extends BaseAllianceMessageHandler {
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
      'stripclub',
      'tp',
      'defiance',
      'myself',
      'everybody',
      'goldenrose',
      'winterfell',
      'everyone'
    ];

    let normalized = msg.content.toLocaleLowerCase().trim();
    var clanName = normalized
      .replace('can i kill', '')
      .replace(/\s/g, '')
      .trim();

    let foxy = this.userLookup.findByUsername('Foxy', '0400');
    if (msg.member.id == foxy.id) {
      msg.reply(`the goddess doesn't need permission...`);
      return;
    }

    if (clanName.includes('demi')) {
      msg.reply('Absolutely, fucking kill them all!');
      return;
    }
    if (clanName.includes('gent')) {
      msg.reply('Absolutely not!');
      return;
    }
    if (clanName.includes('incred')) {
      msg.reply('I will give static your address');
      return;
    }
    if (clanName.includes('tech')) {
      msg.reply(`Hey, ${msg.member} You cannot kill ${clanName}`);
      return;
    }
    let staticRage = this.userLookup.findByUsername('Kyoubou', '0234');
    if (msg.member.id == staticRage.id) {
      msg.reply(`whats the point in asking...`);
      return;
    }

    if (ally.filter(x => x == clanName).length > 0) {
      msg.channel.send(`Hey, ${msg.member} You cannot kill ${clanName}`);
    } else {
      msg.channel.send(
        `Hey, ${
          msg.member
        } Party on! Kill Kill Kill ${clanName} Remember Chan 2 only`
      );
    }
  }
}
