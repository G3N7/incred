import { Client } from 'discord.js';
import { UserLookupService } from './user-lookup.service';
import { GentleArmySummonMessageHandler } from './gentle-army-summon.message-handler';
import { HotTimeMessageHandler } from './hot-time.message-handler';
import * as dotenv from 'dotenv';
import { TestMessageHandler } from './test.message-handler';
import _ = require('lodash');

dotenv.config();

const client = new Client();
const userLookup = new UserLookupService(client);
const handlers = [
  new GentleArmySummonMessageHandler(userLookup),
  new HotTimeMessageHandler(userLookup),
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
