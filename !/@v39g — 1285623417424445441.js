//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT11).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1358089921658884104")
if (!channel) console.log("❌ ㆍ Text Channel", __filename)
channel.send(config.message)
} catch (error) {
console.log("❌ ㆍ No Text Permission", __filename)}}, config.time )})

client.on("ready", () => {
client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1360648762879639812")
if (!channel) console.log("❌ ㆍ Voice Channel", __filename)
joinVoiceChannel({
channelId: channel.id,
guildId: "1358085740134797535",
selfMute: true,
selfDeaf: false,
adapterCreator: channel.guild.voiceAdapterCreator })
} catch (error) {
console.log("❌ ㆍ No Voice Permission", __filename)}}, config.time )})

}