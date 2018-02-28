"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const user_lookup_service_1 = require("./user-lookup.service");
const gentle_army_summon_message_handler_1 = require("./gentle-army-summon.message-handler");
const hot_time_message_handler_1 = require("./hot-time.message-handler");
const dotenv = require("dotenv");
dotenv.config();
const client = new discord_js_1.Client();
const userLookup = new user_lookup_service_1.UserLookupService(client);
const handlers = [new gentle_army_summon_message_handler_1.GentleArmySummonMessageHandler(userLookup), new hot_time_message_handler_1.HotTimeMessageHandler(userLookup)];
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
    handlers.forEach(h => {
        if (h.selector(msg)) {
            h.handle(msg);
        }
    });
});
let token = (process.env.DISCORD_TOKEN || "").trim();
client.login(token);
