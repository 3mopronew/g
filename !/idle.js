//══════[ Package ]══════

module.exports = function ({ Client, RichPresence, joinVoiceChannel, config }) {

//══════[ Login ]══════

const tokens = [

process.env.TOKEN01,
process.env.TOKEN02,
process.env.TOKEN03,
process.env.TOKEN04,

//══════════════════════════════════════════════════

process.env.TOKEN05,
process.env.TOKEN06,
process.env.TOKEN07,
process.env.TOKEN08,
process.env.TOKEN09

]

function createBot(token) {

const client = new Client({ checkUpdate: false })

client.on("ready", () => {
client.user.setStatus("idle")
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