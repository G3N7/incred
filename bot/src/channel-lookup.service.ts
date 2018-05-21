import { Client, TextChannel, VoiceChannel } from "discord.js";

export class ChannelLookupService {
    constructor(private client: Client) { }

    lookupByName(name: string, type: ChannelType) {
        let relevantChannel = this.client.channels
        .filter(x => x.type == type && (<any>x).name == name);
        let foundChannel = relevantChannel && relevantChannel.array().length > 0;
        return foundChannel ? relevantChannel[0]: null;
    }
}

export enum ChannelType {
    text = 'text',
    voice = 'voice'
}