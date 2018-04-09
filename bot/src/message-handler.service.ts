import { Message, Client, TextChannel } from "discord.js";
import { BaseMessageHandler } from "./base.message-handler";
import _ = require("lodash");

export class MessageHandlerService {
    constructor(private handlers: BaseMessageHandler[], private client: Client){ }

    handle(msg: Message){
        this.handlers.forEach(h => {
            let channelId = msg.channel.id;
        
            // find the channel, for these we only care about text channels
            let relevantChannel = this.client.channels
              .filter(x => x.type == 'text' && x.id == channelId)
              .map(x => <TextChannel>x)
              .map(x => x.name);
        
            // if we couldnt find a text channel with that id nothing to do
            if (relevantChannel.length < 1) return;
            let channelName = relevantChannel[0];
            
            // dump out if this handler is does not apply to this channel.
            let allowedChannels: string[] = h.allowedChannels || [];
            let isAllowedInAllowedChannel =
                allowedChannels.length == 0 ||
                allowedChannels.filter(ac => ac == channelName).length > 0;
            if (isAllowedInAllowedChannel == false) return;
        
            // lets see if the person has the correct roles to invoke this command.
            let rolesMemberHas = msg.member && msg.member.roles ? msg.member.roles.map(r => r.name) : [];
            let rolesRequired = h.requiredRoles || [];
            let userHasRequiredRoles = rolesRequired.length == 0 ||
            _.intersection(rolesMemberHas, rolesRequired).length > 0;  
        
            // now lets run the selector and make sure this handler is meant for this message
            let handlerMeantForThisMessage = h.selector(msg);
            if (handlerMeantForThisMessage == false) return;
        
        
            if (userHasRequiredRoles) {
              h.handle(msg);
              console.log(`Handled`);
            }
          });
    }
}