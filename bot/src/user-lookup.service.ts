import { Client } from "discord.js";

export class UserLookupService {
    constructor(private discordClient: Client) {}

    findByUsername(username: string, discriminator: string) {
        let member = this.discordClient.users
        .filter(x => x.username == username && x.discriminator === discriminator)
        .map(v => v);

        return member[0];
    }
}