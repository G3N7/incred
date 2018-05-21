import { Client, TextChannel, VoiceChannel } from "discord.js";

export class ChannelLookupService {
    constructor(private client: Client) { }

    lookupByName<T extends TextChannel | VoiceChannel>(name: string, type: ChannelType): T {
        let relevantChannel = this.client.channels
            .filter(x => x.type == type && (<any>x).name == name)
            .array();
        let foundChannel = relevantChannel && relevantChannel.length > 0;
        return foundChannel ? relevantChannel[0] as T : null;
    }
}

export enum ChannelType {
    text = 'text',
    voice = 'voice'
}