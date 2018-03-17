import { Client, GuildChannel, TextChannel } from 'discord.js';
import { UserLookupService } from './user-lookup.service';
import { GentleArmySummonMessageHandler } from './call-response/gentle-army-summon.message-handler';
import { HotTimeMessageHandler } from './call-response/hot-time.message-handler';
import * as dotenv from 'dotenv';
import { TestMessageHandler } from './test.message-handler';
import _ = require('lodash');
import { CanIKillHandler } from './call-response/can-i-kill.message-handler';
import { IncredRosterListMessageHandler } from './roster/incred-roster-list.message-handler';
import { MessageHandlerService } from './message-handler.service';
import { KingdomRosterListMessageHandler } from './roster/kingdom-roster-list.message-handler.1';

dotenv.config();

const client = new Client();
const userLookup = new UserLookupService(client);
const handlers = [
  new GentleArmySummonMessageHandler(userLookup),
  new HotTimeMessageHandler(userLookup),
  new CanIKillHandler(userLookup),
  new IncredRosterListMessageHandler(userLookup),
  new KingdomRosterListMessageHandler(userLookup),
  new TestMessageHandler()
];
const messageHandlerService = new MessageHandlerService(handlers, client);

client.on('ready', () => {
  console.log('bot up');
  client.user.setActivity('Demi like a fiddle');
});

client.on('message', msg => {
  messageHandlerService.handle(msg);
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  let rulesChannel = client.channels
    .filter(x => (<any>x).name == 'discord-rules-info')
    .map(x => x)[0];
});

let token = (process.env.DISCORD_TOKEN || '').trim();
client.login(token);
