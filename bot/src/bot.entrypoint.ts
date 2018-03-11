import { Client } from 'discord.js';
import { UserLookupService } from './user-lookup.service';
import { GentleArmySummonMessageHandler } from './call-response/gentle-army-summon.message-handler';
import { HotTimeMessageHandler } from './call-response/hot-time.message-handler';
import * as dotenv from 'dotenv';
import { TestMessageHandler } from './test.message-handler';
import _ = require('lodash');
import { CanIKillHandler } from './call-response/can-i-kill.message-handler';

dotenv.config();

const client = new Client();
const userLookup = new UserLookupService(client);
const handlers = [
  new GentleArmySummonMessageHandler(userLookup),
  new HotTimeMessageHandler(userLookup),
  new CanIKillHandler(userLookup),
  new TestMessageHandler()
];

client.on('ready', () => {
  client.user.setActivity("Demi like a fiddle");  
});

client.on('message', msg => {
  
  handlers.forEach(h => {
    if (h.selector(msg)) {
      let relevantRoles = msg.member.roles
        .filter(
          r =>
            h.requiredRoles.filter(rr => rr == r.name).length > 0
        )
        .map(r => r);
      if (relevantRoles.length > 0) {
        h.handle(msg);
      }
    }
  });
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  let rulesChannel = client.channels
  .filter(x => (<any>x).name == 'discord-rules-info')
  .map(x => x)[0];
  
});

let token = (process.env.DISCORD_TOKEN || '').trim();
client.login(token);
