import { Message } from 'discord.js';
import { UserLookupService } from '../user-lookup.service';
import { BaseIncredMessageHandler } from '../base-incred.message-handler';

export class CanIKillHandler extends BaseIncredMessageHandler {
  constructor(private userLookup: UserLookupService) {
    super();
  }
  selector(msg: Message): boolean {
    return msg.content.startsWith("Can I Kill");
  }
  handle(msg: Message): void {
    var Ally = ["Kingdom", "Churn", "TeaParty", "Tea Party", "Defiance", "Tekniques"];

    var ClanName;
    ClanName = msg.content.replace("Can I Kill ",'');

    if (Ally.filter(x=> x == ClanName).length > 0) {
      msg.channel.send(
        `Hey, ${msg.member} You cannot kill ${ClanName}`
    );
}
    else{
        msg.channel.send(
        `Hey, ${msg.member} Party on! Kill Kill Kill`
    );
  }


  }
  
}