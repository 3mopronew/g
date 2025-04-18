//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const client = new Client({ checkUpdate: false })

client.login(process.env.CLIENT03).catch(() => console.log("❌ ㆍ TOKEN", __filename))

//══════[ Code ]══════

client.on("ready", () => {
client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1360640954561986722")
if (!channel) console.log("❌ ㆍ Text Channel", __filename)
channel.send(config.message)
} catch (error) {
console.log("❌ ㆍ No Text Permission", __filename)}}, config.time )})

}