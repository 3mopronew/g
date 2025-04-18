//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT01).catch(() => console.error("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1360675708019544297")
if (!channel) console.error("❌ ㆍ Text Channel", __filename)
channel.send(config.message)
} catch (error) {
console.error("❌ ㆍ No Text Permission", __filename)}}, config.time )})

}