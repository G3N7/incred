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
      'stripclub',
      'tp',
      'defiance',
      'myself',
      'everybody',
      'tech',
      'goldenrose',
      'winterfell',
      'tek',
      'nath',
      'tekniques'
    ];

    let normalized = msg.content.toLocaleLowerCase().trim();
    var clanName = normalized
      .replace('can i kill', '')
      .replace(/\s/g, '')
      .trim();

    if (clanName.includes('gent')) {
      msg.reply('Absolutely not!');
      return;
    }
    if (clanName.includes('nath')) {
      msg.reply('Absolutely not!');
      return;
    }
    if (clanName.includes('demi')) {
      msg.reply('Outside Channel 1 of course you can!!');
      return;
    }
    if (clanName.includes('bb')) {
      msg.reply('Outside Channel 1 of course you can!!');
      return;
    }
    if (clanName.includes('brigade')) {
      msg.reply('Outside Channel 1 of course you can!!');
      return;
    }
    if (clanName.includes('incred')) {
      msg.reply('I will give static your address');
      return;
    }
    let staticRage = this.userLookup.findByUsername('Kyoubou', '0234');
    if (msg.member.id == staticRage.id) {
      let foxy = this.userLookup.findByUsername('Foxy', '0400');
      msg.reply(`you need to ask an adult like <@!${foxy.id}>`);
      return;
    }

    if (ally.filter(x => x == clanName).length > 0) {
      msg.channel.send(`Hey, ${msg.member} You cannot kill ${clanName}`);
    } else {
      msg.channel.send(
        `Hey, ${msg.member} Party on! Kill Kill Kill ${clanName} Remember Chan 2 only`
      );
    }
  }
}
