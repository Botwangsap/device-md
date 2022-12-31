module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await conn.sendMessage(
			msg.from,
			{
				image: { url: config.thumb },
				footer: config.namebot,
				// Gausah di ubah kontol najis modal copas sana sini ubah source cih
				caption: `Bot ini menggunakan script VIP,kalo mau scnya chat ownerbot aja🐸`,
				templateButtons: [
					{ urlButton: { displayText: "Script Bot", url: "https://github.com/Botwangsap" } },
				],
			},
			{ quoted: msg }
		);
	},
};
