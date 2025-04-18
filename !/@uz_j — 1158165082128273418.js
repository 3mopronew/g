//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT09).catch(() => console.error("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
const activity = new RichPresence()
.setApplicationId(config.app)
.setURL(config.url)
.setType("WATCHING")
.setName("My Future")
.setDetails("My Future")
.setState("Doing Nothing")
.setStartTimestamp(Date.now())
.setAssetsLargeImage("https://cdn.discordapp.com/emojis/1360691310108872874.png")
.setAssetsSmallImage("https://cdn.discordapp.com/emojis/1360691359455121519.png")
client.user.setActivity(activity)
client.user.setPresence({ status: "idle" })})

client.on("ready", () => {
//client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1360640954561986722")
if (!channel) console.error("❌ ㆍ Text Channel", __filename)
channel.send(config.message)
} catch (error) {
console.error("❌ ㆍ No Text Permission", __filename)}}, config.time )})

client.on("ready", () => {
//client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1357395445869056130")
if (!channel) console.error("❌ ㆍ Voice Channel", __filename)
const VoiceConnection = joinVoiceChannel({
channelId: channel.id, 
guildId: "1357394997053362326", 
selfMute: true,
selfDeaf: false,
adapterCreator: channel.guild.voiceAdapterCreator })
} catch (error) {
console.error("❌ ㆍ No Voice Permission", __filename)}}, config.time )})

}