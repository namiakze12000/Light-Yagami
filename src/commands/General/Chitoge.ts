/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "Light",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/H37ktE73aVkAAAPo/loufy42-light.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🌟 *ＬＩＧＨＴ�ＹＡＧＡＭＩ* 🌟\n\n🍀 *Description: A WhatsApp Bot With Rich Anime Features by akashi if you wanna add me in your group type "?mods" and contact my boss.*\n\n🌐 *URL: https://github.com/namiakze/Light-Yagami* \n\n 📒 *Guide: https://github.com/ShineiIchijo/Chitoge-Guides* \n`,
			}
		);
	};
}
