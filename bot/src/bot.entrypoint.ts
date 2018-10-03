import { Client, TextChannel } from 'discord.js';
import { UserLookupService } from './user-lookup.service';
import { GentleArmySummonMessageHandler } from './call-response/gentle-army-summon.message-handler';
import * as dotenv from 'dotenv';
import { TestMessageHandler } from './test.message-handler';
import { CanIKillHandler } from './call-response/can-i-kill.message-handler';
import { RosterListMessageHandler } from './roster/roster-list.message-handler';
import { MessageHandlerService } from './message-handler.service';
import { RosterListService } from './roster-list.service';
import { MasterMessageHandler } from './call-response/master.message-handler';
import { SkynetMessageHandler } from './call-response/skynet.message-handler';
import { ChannelLookupService, ChannelType } from './channel-lookup.service';
import { ClanRoles } from './clan-roles.enum';
import { GoogleRosterListService } from './google-roster-list.service';
import { RosterPresentMessageHandler } from './roster/roster-present.message-handler';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const client = new Client();
const userLookup = new UserLookupService(client);
const rosterListService = new RosterListService();
const channelLookupService = new ChannelLookupService(client);
const handlers = [
  new GentleArmySummonMessageHandler(userLookup),
  //new HotTimeMessageHandler(userLookup),
  new MasterMessageHandler(userLookup),
  new SkynetMessageHandler(userLookup),
  new CanIKillHandler(userLookup),
  new RosterListMessageHandler(rosterListService),
  new RosterPresentMessageHandler(channelLookupService),
  new TestMessageHandler()
];
const messageHandlerService = new MessageHandlerService(handlers, client);

//googleRosterListService.getClanRoster();

client.on('ready', () => {
  client.user.setActivity('revelry to muster the Army!');

  //botChannel.send(`<@!${gent.id}> I am up and running... just listening and waiting...`);

  console.log('bot up');
});

client.on('message', msg => {
  messageHandlerService.handle(msg);
});

client.on('messageReactionAdd', msg => {
  console.log(msg.emoji);
  if (msg.emoji.name == '🔍' || msg.emoji.name == '🔎'){
    msg.message.react('🔥');
    msg.message.channel.send(`:fire: BURN THE NON-BELIEVERS :fire:`);
  }
});

client.on('messageReactionAdd', () => {
  console.log('react remove detected');
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let generalChannel = channelLookupService.lookupByName<TextChannel>('general', ChannelType.text);;

  if (oldMember.serverMute != newMember.serverMute && newMember.serverMute) {
    generalChannel.send(`<@!${newMember.id}> you have been Server muted.  Please fix you mic, mute when your chatting to someone outside discord or ask why.  You will be automatically unmuted in 3min.`);
    setTimeout(() => {
      newMember.setMute(false);
      generalChannel.send(`<@!${newMember.id}> you have been unmuted.  Welcome back!`);
    }, 180000);
  }
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  let rulesChannel = channelLookupService.lookupByName<TextChannel>('rules-info', ChannelType.text);

  let wasSquire = false;
  if (oldMember && oldMember.roles) wasSquire = oldMember.roles.filter(x => x.name == ClanRoles.Squire).map(x => x).length > 0;
  let isSquire = false;
  if (newMember && newMember.roles) isSquire = newMember.roles.filter(x => x.name == ClanRoles.Squire).map(x => x).length > 0;

  if (!wasSquire && isSquire) {
    newMember.send(`Welcome to the Clan, please take a look at <#${rulesChannel.id}>`)
  }
});

let token = (process.env.DISCORD_TOKEN || '').trim();
client.login(token);