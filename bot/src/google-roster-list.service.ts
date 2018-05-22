import { Message } from "discord.js";
import { ClanNames } from "./clan-names.enum";
import { ClanMember } from "./clan-member.interface";
import {google} from 'googleapis';

export class GoogleRosterListService {
    getClanRoster(): ClanMember[] {
        const sheets = google.sheets({ version: 'v4', auth: null });
        sheets.spreadsheets.values.get({
            spreadsheetId: '1Z3mRlmVK2Xwoyf1v_8MKhdJknLZ99zyAbu3kL21OhOI',
            range: 'Cp!A4:A',
            auth: null
        }, (err, { data }) => {
            if (err) return console.log('The API returned an error: ' + err);
            const rows = data.values;
            if (rows.length) {
                console.log('Player Name');
                // Print columns A and E, which correspond to indices 0 and 4.
                rows.map((row) => {
                    console.log(`${row[0]}`);
                });
            } else {
                console.log('No data found.');
            }
        });
        return [];
    }


}