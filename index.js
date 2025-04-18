require("events").EventEmitter.defaultMaxListeners = 9999

setTimeout(() => console.log("✅ ㆍ Started"), 2000 )

//══════[ Package ]══════

const axios = require("axios")

const fs = require("fs")

const path = require("path")

const { Client, RichPresence } = require("./libs/pkg/load")

const { joinVoiceChannel } = require("@discordjs/voice")

//══════[ Config ]══════

const config = {
app: "1168902518537977996",
url: "https://twitch.tv/#",
time: 10000,
channel: "1320682749484597258",
message: "**AaBbCcDdFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789٠١٢٣٤٥٦٧٨٩**"
}

//══════[ Load ]══════

const FOLDER = path.join(__dirname, "!")

const FILES = fs.readdirSync(FOLDER).filter(file => file.endsWith(".js"))

for (const file of FILES) {
const PATH = path.join(FOLDER, file)
try {
const command = require(PATH)
if (typeof command === "function") {
command({ Client, RichPresence, joinVoiceChannel, config })}
} catch (error) { return; }}

//══════[ Errors ]══════

process.on("multipleResolves", () => { })

process.on("rejectionHandled", () => { })

process.on("uncaughtException", () => { })

process.on("unhandledRejection", () => { })

process.on("uncaughtExceptionMonitor", () => { })

//══════[ Errors Log ]══════

const webhookURL = "https://discord.com/api/webhooks/1321816109497847869/xFG-vzbW3omYZdUYVbajA1xp-rYkQUzyYSfvX6GINXLypLR8ZwB7k-7vT2mBwZ_WX3Iw"

async function sendToDiscord(message) {
try {
await axios.post(webhookURL, { content: message })
} catch (error) { return; }}

console.log = function (...args) {
console.info(...args)
const message = args.join(" ")
sendToDiscord(`**\`\`\`
${message}
\`\`\`**`)}

console.warn = console.log

console.error = console.log