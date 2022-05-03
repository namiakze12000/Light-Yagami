/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hilight",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/2vaQy0JsCuMAAAPo/death-note.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `★彡[ᴄᴀɴ ɪ ʜᴀᴠᴇ ʏᴏᴜʀ ᴀᴜᴛᴏɢʀᴀᴘʜ? ᴍʏ ɴᴀᴍᴇ ɪꜱ ʟɪɢʜᴛ ʏᴀɢᴀᴍɪ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴅᴇꜱɪɢɴᴇᴅ ʙʏ ʟᴏʀᴅ ᴀᴋᴀꜱʜɪ ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴀᴅᴅ ᴍᴇ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ ᴛʜᴇɴ ᴛʏᴘʀ "?ᴍᴏᴅꜱ" ᴀɴᴅ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴍᴀꜱᴛᴇʀ.]彡★ *${this.client.config.prefix}help* list if you want anything. \n`,
			}
		);
	};
}
