//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.HEMA2).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
const activity = new RichPresence()
.setApplicationId(config.app)
.setURL(config.url)
.setType("STREAMING")
.setName("VALORANT")
.setDetails("VALORANT")
.setStartTimestamp(Date.now())
.setAssetsLargeImage("https://cdn.discordapp.com/emojis/1216720364177068074.png")
client.user.setActivity(activity)
client.user.setPresence({ status: "online" })})

client.on("ready", () => {
//client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1230520452301197478")
if (!channel) console.log("❌ ㆍ Voice Channel", __filename)
joinVoiceChannel({
channelId: channel.id,
guildId: "1230520451852140544",
selfMute: true,
selfDeaf: false,
adapterCreator: channel.guild.voiceAdapterCreator })
} catch (error) {
console.log("❌ ㆍ No Voice Permission", __filename)}}, config.time )})

}