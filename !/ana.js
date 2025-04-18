//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.ANA).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
const activity = new RichPresence()
.setApplicationId(config.app)
.setURL(config.url)
.setType("PLAYING")
.setName("Visual Studio Code")
.setDetails("Editing : /src/commands/market.js")
.setState("Workspace : تشطيب وسباكه للبوت")
.setStartTimestamp(Date.now())
.setAssetsLargeImage("https://cdn.discordapp.com/emojis/1357362975224365068.png")
.setAssetsSmallImage("https://cdn.discordapp.com/emojis/1357362996439159045.png")
.addButton("Discord", "https://discord.gg/pzXwrY6mYR")
.addButton("Website", "https://onlyahmd.glitch.me")
client.user.setActivity(activity)
client.user.setPresence({ status: "dnd" })})

}