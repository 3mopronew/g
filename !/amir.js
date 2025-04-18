//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.AMIR).catch(() => console.error("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => client.user.setActivity("ㅤ", { type: "STREAMING", url: config.url }))

}