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
import { ChannelLookupService, ChannelType } from './channel-lookup.service';
import { ClanRoles } from './clan-roles.enum';
import { GoogleRosterListService } from './google-roster-list.service';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const client = new Client();
const userLookup = new UserLookupService(client);
const rosterListService = new RosterListService();
const handlers = [
  new GentleArmySummonMessageHandler(userLookup),
  //new HotTimeMessageHandler(userLookup),
  new MasterMessageHandler(userLookup),
  new SkynetMessageHandler(userLookup),
  new CanIKillHandler(userLookup),
  new RosterListMessageHandler(rosterListService),
  new TestMessageHandler()
];
const messageHandlerService = new MessageHandlerService(handlers, client);
const channelLookupService = new ChannelLookupService(client);
const googleRosterListService = new GoogleRosterListService();
//googleRosterListService.getClanRoster();

client.on('ready', () => {
  client.user.setActivity('revelry to muster the Gentle Army!');

  let gent = userLookup.findByUsername('Gent', '4068');
  let botChannel = channelLookupService.lookupByName<TextChannel>('bot', ChannelType.text);
  //botChannel.send(`<@!${gent.id}> I am up and running... just listening and waiting...`);

  console.log('bot up');
});

client.on('message', msg => {
  messageHandlerService.handle(msg);
});

client.on('messageReactionAdd', msg => {
  console.log('react add detected');
  console.log(msg.emoji.name);
  if (msg.emoji.name == 'mag_right' || msg.emoji.name == 'mag_left'){
    console.log('reacting to mag')
    msg.message.react("fire");
    console.log('sending message to channel')
    msg.message.channel.send(`:fire: BURN THE NON-BELIEVERS :fire:`);
  }
});


client.on('messageReactionAdd', msg => {
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