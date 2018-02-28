"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserLookupService {
    constructor(discordClient) {
        this.discordClient = discordClient;
    }
    findByUsername(username, discriminator) {
        let member = this.discordClient.users
            .filter(x => x.username == username && x.discriminator === discriminator)
            .map(v => v);
        return member[0];
    }
}
exports.UserLookupService = UserLookupService;
