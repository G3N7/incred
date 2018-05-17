import { Client, GuildChannel, TextChannel } from 'discord.js';
import { UserLookupService } from './user-lookup.service';
import { GentleArmySummonMessageHandler } from './call-response/gentle-army-summon.message-handler';
import { HotTimeMessageHandler } from './call-response/hot-time.message-handler';
import * as dotenv from 'dotenv';
import { TestMessageHandler } from './test.message-handler';
import _ = require('lodash');
import { CanIKillHandler } from './call-response/can-i-kill.message-handler';
import { RosterListMessageHandler } from './roster/roster-list.message-handler';
import { MessageHandlerService } from './message-handler.service';
import { ClanNames } from './clan-names.enum';
import { RosterListService } from './roster-list.service';
import { MasterMessageHandler } from './call-response/master.message-handler';
import { SkynetMessageHandler } from './call-response/skynet.message-handler';

dotenv.config();

const client = new Client();
const userLookup = new UserLookupService(client);
const rosterListService = new RosterListService();
const handlers = [
  new GentleArmySummonMessageHandler(userLookup),
  new HotTimeMessageHandler(userLookup),
  new MasterMessageHandler(userLookup),
  new SkynetMessageHandler(userLookup),
  new CanIKillHandler(userLookup),
  new RosterListMessageHandler(rosterListService),
  new TestMessageHandler()
];
const messageHandlerService = new MessageHandlerService(handlers, client);

client.on('ready', () => {
  console.log('bot up');
  client.user.setActivity('Fazu like an accordion');
});

client.on('message', msg => {
  messageHandlerService.handle(msg);
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  let rulesChannel = client.channels
    .filter(x => (<any>x).name == 'rules-info')
    .map(x => x)[0];

  let wasSquire = false;
  if (oldMember && oldMember.roles) wasSquire = oldMember.roles.filter(x => x.name == 'Squire').map(x => x).length > 0;
  let isSquire = false;
  if (newMember && newMember.roles) isSquire = newMember.roles.filter(x => x.name == 'Squire').map(x => x).length > 0;

  if (!wasSquire && isSquire){
    newMember.send(`Welcome to the Clan, please take a look at <#${rulesChannel.id}>`)
  }  
});

let token = (process.env.DISCORD_TOKEN || '').trim();
client.login(token);
