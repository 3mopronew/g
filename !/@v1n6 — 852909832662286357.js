//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT10).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
const activity = new RichPresence()
.setApplicationId(config.app)
.setURL(config.url)
.setType("STREAMING")
.setName("Monaco Shop")
.setDetails("Monaco Shop")
.setState("Server $hop — 1.5k Soon ...")
.setStartTimestamp(Date.now())
.setAssetsLargeImage("https://cdn.discordapp.com/emojis/1361083751332974632.png")
//.setAssetsSmallImage("https://cdn.discordapp.com/emojis/1357362996439159045.png")
.addButton("Monaco Shop", "https://discord.gg/HHj4G7gV4W")
client.user.setActivity(activity)
client.user.setPresence({ status: "online" })})

client.on("ready", () => {
//client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1361078773486981191")
if (!channel) console.log("❌ ㆍ Text Channel", __filename)
channel.send(config.message)
} catch (error) {
console.log("❌ ㆍ No Text Permission", __filename)}}, config.time )})

client.on("ready", () => {
//client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1360716402272502093")
if (!channel) console.log("❌ ㆍ Voice Channel", __filename)
joinVoiceChannel({
channelId: channel.id,
guildId: "851403177437823037",
selfMute: true,
selfDeaf: false,
adapterCreator: channel.guild.voiceAdapterCreator })
} catch (error) {
console.log("❌ ㆍ No Voice Permission", __filename)}}, config.time )})

}