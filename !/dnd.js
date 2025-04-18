//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const tokens = [

process.env.ANA,

//══════════════════════════════════════════════════

process.env.TOKEN10,
process.env.TOKEN11,
process.env.TOKEN12,
process.env.TOKEN13,
process.env.TOKEN14

]

function createBot(token) {

const client = new Client({ checkUpdate: false })

client.on("ready", () => {
client.user.setStatus("dnd")
setInterval(() => {
try {
const channel = client.channels.cache.get(config.channel)
if (!channel) console.log("❌ ㆍ Text Channel", __filename)
channel.send(config.message)
} catch (error) {
console.log("❌ ㆍ No Text Permission", __filename)}}, config.time )})

client.login(token).catch(() => console.log(`❌ ㆍ ${token}`, __filename))}

tokens.forEach(token => createBot(token))

}