//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT07).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
const activity = new RichPresence()
.setApplicationId(config.app)
.setURL(config.url)
.setType("PLAYING")
.setName("Dive into the darkness")
.setDetails("マインクラフト")
.setState("憎しみ")
.setStartTimestamp(Date.now())
.setAssetsLargeImage("https://cdn.discordapp.com/emojis/1347547861767946320.png")
.setAssetsSmallImage("https://cdn.discordapp.com/emojis/1297126980810182769.gif")
.addButton("Shadow Garden", "https://discord.gg/shg")
client.user.setActivity(activity)
client.user.setPresence({ status: "idle" })})

}