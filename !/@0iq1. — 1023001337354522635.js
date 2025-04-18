//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT02).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1344250574337609798")
if (!channel) console.log("❌ ㆍ Voice Channel", __filename)
joinVoiceChannel({
channelId: channel.id, 
guildId: "899437386205921292", 
selfMute: true,
selfDeaf: false,
adapterCreator: channel.guild.voiceAdapterCreator })
} catch (error) {
console.log("❌ ㆍ No Voice Permission", __filename)}}, config.time )})

}