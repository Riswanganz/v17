const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const crypto = require('crypto')
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')

//------------------------ < S T I C K E R  W M > ------------------------\\
const Exif = require('./lib/exif');
const exif = new Exif();

//------------------------ < L I B > ------------------------\\
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { virtex, danz } = require('./lib/virtex.js')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//------------------------ < T E M P > ------------------------\\
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))

//------------------------ < C O N F I G > ------------------------\\
const setting = JSON.parse(fs.readFileSync('./config/setting.json'))
const gamesetting = JSON.parse(fs.readFileSync('./config/gamesetting.json'))
const apikey = JSON.parse(fs.readFileSync('./config/apikey.json'))
const fake = JSON.parse(fs.readFileSync('./config/fake.json'))

//------------------------ < S E T T I N G > ------------------------\\
namasession = setting.NamaSession
namaowner = setting.NamaOwner
nomorowner = setting.NomorOwner
nomorowner2 = setting.NomorOwner2
namabot = setting.NamaBot
nomorbot = setting.NomorBot
banchats = setting.BanChats
autoread = setting.AutoRead
autorecord = setting.AutoRecord
autoreply = setting.AutoReply
limit = setting.Limit
public = true
self = false

//------------------------ < G A M E  S E T T I N G > ------------------------\\
gamewaktu = gamesetting.GameWaktu
limitgame = gamesetting.LimitGame

//------------------------ < A P I K E Y > ------------------------\\
ramdaniapi = apikey.RamdaniKey
danzzapi = apikey.DanzzKey
lolapi = apikey.LolKey
lolhumanapi = apikey.LolHumanKey
vhtearapi = apikey.VhtearKey
zeksapi = apikey.ZeksKey
xteamapi = apikey.XTeamKey

//------------------------ < F A K E > ------------------------\\
fakereply = fake.FakeReply
faketroli = fake.FakeTroli
fakewm = fake.FakeWm

//------------------------ < S E T T I N G 2 > ------------------------\\
batre = 'Tidak Terdeteksi%'
petik = '```'

//------------------------ < P L U G I N S > ------------------------\\
//======================================\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\ | |
//======================================\\
//------------------------ < T O P  U P  G A M E > ------------------------\\
const { topupgame } = require('./plugins/topupgame')
const { topupmobilelegends } = require('./plugins/topupmobilelegends')
const { topupfreefire } = require('./plugins/topupfreefire')
const { topuppubg } = require('./plugins/topuppubg')
const { topuppointblank } = require('./plugins/topuppointblank')

//------------------------ < T O P  U P  S A L D O > ------------------------\\
const { topupsaldo } = require('./plugins/topupsaldo')
const { topupgopay } = require('./plugins/topupgopay')
const { topupdana } = require('./plugins/topupdana')
const { topupovo } = require('./plugins/topupovo')
const { topuppulsa } = require('./plugins/topuppulsa') 

//------------------------ < M E D I A > ------------------------\\
//======================================\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\ | |
//======================================\\
//------------------------ < F O T O > ------------------------\\
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let fakeimage = fs.readFileSync("./media/foto/thumb.jpg")
let fakeimg = fs.readFileSync("./media/foto/fakeimg.jpg")
const fakemenu = fs.readFileSync('./media/foto/menu.jpg')
const Mfake = fs.readFileSync('./media/foto/thumb.jpg')
const Mthumb = fs.readFileSync('./media/foto/thumb.jpg')

//------------------------ < A U D I O > ------------------------\\
randommp3 = ['males','buatapa','anjing','apa','araara','wataisi','arigatou','mastah']
const randomaudio = randommp3[Math.floor(Math.random() * (randommp3.length))]
const males = fs.readFileSync("./media/audio/males.mp3");
const buatapa = fs.readFileSync("./media/audio/buatapa.mp3");
const anjing = fs.readFileSync("./media/audio/anjing.mp3");
const apa = fs.readFileSync("./media/audio/apa.mp3");
const araara = fs.readFileSync("./media/audio/araara.mp3");
const wataisi = fs.readFileSync("./media/audio/wataisi.mp3");
const arigatou = fs.readFileSync("./media/audio/arigatou.mp3");
const mastah = fs.readFileSync("./media/audio/mastah.mp3");
const sendAudio = fs.readFileSync("./media/audio/audio.mp3");

//------------------------ < M E S S A G E > ------------------------\\
const { infobot, groupbot, rulesbot, beliprem, sewabot, infomenu, groupmenu, gamemenu, islammenu, downloadmenu, makermenu, sertimenu, stickermenu, soundmenu, vnmenu, statusmenu, dewasamenu, othermenu, warmenu, hiburanmenu, hewanmenu, toolsmenu, beritamenu, animemenu, randommenu, ownermenu, spammenu, searchmenu, funmenu, mememenu, asupanmenu, hentaimenu } = require('./message/help.js')
const { allmenuu } = require('./message/allmenu')
const { mess } = require('./message/mess')

//------------------------ < D A T A B A S E > ------------------------\\
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let dewasa = JSON.parse(fs.readFileSync('./database/user/dewasa.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let antiwame = JSON.parse(fs.readFileSync('./database/group/antiwame.json'));
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'));

//------------------------ < G A M E > ------------------------\\
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakkimia = JSON.parse(fs.readFileSync('./database/tebakkimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//REGISTRASI
const addRegist = (registid, sender, age, time, serials) => {
const reg = { id: registid, name: sender, age: age, time: time, serial: serials }
register.push(reg)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const addSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekRegist = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}
//DEWASA

const addDewasa = (dewasaid, sender, age, time, serimek) => {

const dew = { id: dewasaid, name: sender, age: age, time: time, serimek: serimek }

dewasa.push(dew)

fs.writeFileSync('./database/user/dewasa.json', JSON.stringify(dewasa))

}

const addSerimek = (size) => {

return crypto.randomBytes(size).toString('hex').slice(0, size)

}

const cekDewasa = (sender) => {

let status = false

Object.keys(dewasa).forEach((i) => {

if (dewasa[i].id === sender) {

status = true

}

})

return status

}

module.exports = Ramdani = async (Ramdani, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~.%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~.%^&.?/\\©^z+*,;]/gi) : '.'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		isImage = (type === 'imageMessage')
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const c = args.join(' ')

        const botNumber = Ramdani.user.jid
        const ownerNumber = setting.NomorOwner2
		const ownerName = setting.NamaOwner
		const botName = setting.NamaBot
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Ramdani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Ramdani.chats.all()
		const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? Ramdani.user.jid : Ramdani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ramdani.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isBanned = ban.includes(sender)
		const isRegist = cekRegist(sender)
		const isDewasa = cekDewasa(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiWame = isGroup ? antiwame.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
		const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
		const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Ramdani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "© ʙʏ ᴡᴀɴᴢʙᴏᴛ","listType": "SINGLE_SELECT","sections": list}}, {})
            return Ramdani.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~.=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~.?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      Ramdani.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const freply = (teks) => {
Ramdani.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${faketroli}`,
                "mediaType": "10",
                "mediaUrl": `https://m.youtube.com/channel/UC4mrtQKsM0i31zFrd01OsRg`,
                "thumbnailUrl": "https://m.youtube.com/channel/UC4mrtQKsM0i31zFrd01OsRg",
                "thumbnail": fakeimg,
                "sourceUrl": `https://m.youtube.com/channel/UC4mrtQKsM0i31zFrd01OsRg`,
},mentionedJid:[sender]}, quoted : mek})
};
        const sendMess = (hehe, teks) => {
           Ramdani.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/foto/thumb.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Ramdani.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/foto/thumb.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           Ramdani.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return Ramdani.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/foto/thumb.jpg')})
        }
        const fdanz = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/foto/thumb.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Ramdani.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await Ramdani.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Ramdani.groupRemove(to, [i])
        } else {
           await Ramdani.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       Ramdani.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       Ramdani.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await Ramdani.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Ramdani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/foto/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return freply(`${err}`)
           exec(`webpmux -set exif ./media/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return freply(`${error}`)
           Ramdani.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Ramdani.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	       Ramdani.sendMessage(from, { url : link }, type, options).catch(e => {
	       freply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  freply("No target..") }
           let g = await Ramdani.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Ramdani.groupMakeAdmin(to, [i])
           freply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  freply("No target..") }
           let g = await Ramdani.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Ramdani.groupDemoteAdmin(to, [i])
           freply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'Dibuat Oleh'; if (!author) author = '© WanzBOT';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./media/sticker/${name}.exif`)) return `./media/sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./media/sticker/${name}.exif`, buffer, (err) => {	
	   return `./media/sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ🌤️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ🌃'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       freply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 500, status: 200, thumbnail: fakeimage, surface: 200, message: faketroli, orderTitle: 'Wanz', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/foto/thumb.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/foto/thumb.jpg`)},"title": `© ʙʏ ᴡᴀɴᴢʙᴏᴛ`,"description": "WanzBOT", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": "WanzBOT","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                freply(`*「 GROUP LINK DETECTOR 」*\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                Ramdani.groupRemove(from, [sender])
            }
        }
        // Anti wame
        if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(wa.me\/)/gi)) {
                freply(`*「 NOMOR LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick`)
                Ramdani.groupRemove(from, [sender])
            }
        }
        
let {
    BanChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        // SEWA TIME
             _sewa.expiredCheck(Ramdani, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(Ramdani, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await freply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await freply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                Ramdani.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await freply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await freply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await freply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await freply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await freply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await freply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await freply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await freply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await freply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakkimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await freply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await freply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await freply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await freply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                }
            }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    freply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
		const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
ramdani = await Ramdani.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: ramdani.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": fs.readFileSync('./media/foto/thumb.jpg')
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
        // Auto Read
        Ramdani.chatRead(from, "read")
        //auto vn 
        await Ramdani.updatePresence(from, Presence.recording)

       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CP ]'), color(time, 'aqua'), color(`${command} [${args.length}]`), 'pesan dari', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GC ]'), color(time, 'aqua'), color(`${command} [${args.length}]`), 'pesan dari', color(pushname), 'in', color(groupName))
  //Buat fake info bot
danzrun = process.uptime() 
           Ramdani.setStatus(`${namabot} Aktif Selama ${(danzrun)} © Creator By WanzBOT`).catch((_)=>_); 
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: troli})
}          

            switch(command){
// case awal
       case 'donasi':
       if (isBanned) return freply(mess.banned)
               txtt =`*Hai Kak* ${pushname} *Yang Baik*\n*Mau donasi?* Dikasih Syukur, Gak di kasih Gpp :)`

               buttons = [{buttonId: `${prefix}gopay`,buttonText:{displayText: 'GOPAY'},type:1},{buttonId: `${prefix}ovo`,buttonText:{displayText: 'OVO'},type:1},{buttonId: `${prefix}pulsa`,buttonText:{displayText: 'PULSA'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Donasi Seiklas nya',
               buttons: buttons,
               headerType: 1
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{})
               Ramdani.relayWAMessage(prep)
               break 
        case 'owner':
        case 'ownerbot':
        if (isBanned) return freply(mess.banned)
               sendKontak(from, `${nomorowner}`, `${namaowner}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`*Hai Kak* ${pushname}\nItu Ownerku, Mau Ngpain Yaa?`

               buttons = [{buttonId: '!youtube',buttonText:{displayText: 'yσυтυвє'},type:1},{buttonId:'!infoig',buttonText:{displayText:'ıηsтαgяαм'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Ganggu Owner Ku🗿',
               buttons: buttons,
               headerType: 1
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{})
               Ramdani.relayWAMessage(prep)
               break    
//------------------------ < ANIMEH > ------------------------\\
              case 'milf':

              if (!isNsfw) return freply('Nsfw di group ini belum aktif')
              if (isBanned) return freply(mess.banned)

              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data

              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]

              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))

		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI🤑'},type:1}]

              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage

              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,

              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}

              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})

              Ramdani.relayWAMessage(prep)

              fs.unlinkSync(`./${sender}.jpeg`)

              break
case 'hentai':

if (!isNsfw) return freply('Nsfw group belum aktif')
if (isBanned) return freply(mess.banned)
freply(mess.wait)

anu = await fetchJson(`https://api-ramdaniofficial-docs.herokuapp.com/api/nsfw/hentai?apikey=Ramdaniofficial`)

oke = await getBuffer(anu.result)

Ramdani.sendMessage(from, oke, image, {quoted: mek, caption: '*Dosa tanggung sendiri nyet*'})

break
       
//------------------------ < SUBSCRIBE RAMDANI OFFICIAL > ------------------------\\
        case 'menu':
        case 'help':
        case 'm':
        case 'h':
        case 'bot':
        if (isBanned) return freply(mess.banned)
        freply(mess.wait)
        menu =`*Hai Kak👋 ${pushname} ${ucapanWaktu}*

    『 *BOT INFO* 』

⛱ *Device* : xiaomi redmi 4A
🗺 *Wa Version* : 2.22.3.77
💬 *OS Version* : 10
🌐 *Platfrom* : android/pc
📳 *Mode* : > public mode <
☢ *Prefix* : > multi prefix <
🔋 *baterai bot* : ${baterai}
👨💻 *Name Creator* : WanzBOT


       『 *USER INFO* 』
       
🏅 *Status* : ${isOwner ? 'Owner' : 'Free use'}
⏳ *Limit* : ${limit}
🎎 *Nama* : ${pushname}
🎿 *Bio* : [object Object]
☎ *Nomor* : @${sender.split('@')[0]}
🔋 *Baterai* : ${batre}
⏰ *Waktu* : ${moment().utcOffset('+0700').format('HH:mm')}
📅 *Tanggal* : ${moment.tz('Asia/Jakarta').format('DD/MM')}
`
               buttons = [{buttonId: `${prefix}allmenu`,buttonText:{displayText: 'ᴀʟʟᴍᴇɴᴜ'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: 'ᴅᴏɴᴀsɪ'},type:1},{buttonId: `${prefix}rules`,buttonText:{displayText: 'ʀᴜʟᴇs'},type:1}]

               imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: 'ᴊɪᴋᴀ ᴛᴏᴍʙᴏʟ ᴅɪ ʙᴀᴡᴀʜ ᴇʀʀᴏʀ sɪʟᴀʜᴋᴀɴ ᴋᴇʟɪᴋ .ᴀʟʟᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ\n© ʙʏ ᴡᴀɴᴢʙᴏᴛ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
               Ramdani.relayWAMessage(prep)
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
        case 'allmenu':
        if (isBanned) return freply(mess.banned)
        freply(mess.wait)
        allmenu =`*hallo kak👋 ${pushname} ${ucapanWaktu}*
━━━━━ *INFO USER* ━━━━━
❏ NAMA : *${pushname}*
❏ API : *wa.me/${sender.split('@')[0]}*
❏ STATUS : *${isOwner ? 'Owner' : 'Free use'}*
❏ LIMIT : *${limit}*

━━━━━ *INFO BOT* ━━━━━
❏ NAMA : *${namabot}*
❏ API : *wa.me/${botNumber}*
❏ OWNER : *${namaowner}*
❏ API : *wa.me/${nomorowner}*
❏ AKTIF : *${runtime(process.uptime())}*
❏ BATERAI : *${baterai}*
❏ PREFIX : *『> multi prefix <』*
❏ TOTAL FITUR : *400+*

   ━━━━━ *ALLMENU* ━━━━━

*⌜ Info Menu⌟*
>  ${prefix}update
>  ${prefix}level
>  ${prefix}rules
>  ${prefix}profile
>  ${prefix}waktu
>  ${prefix}botstat
>  ${prefix}sewabot
>  ${prefix}listsewa
>  ${prefix}owner
>  ${prefix}ping
>  ${prefix}runtime
>  ${prefix}donasi
>  ${prefix}leaderboard
>  ${prefix}setpp
>  ${prefix}report *keluhan atau pertanyaan*


*⌜ Group Menu ⌟*    
>  ${prefix}groupsetting
>  ${prefix}afk *alasan*
>  ${prefix}infogrup
>  ${prefix}antilink enable/disable
>  ${prefix}antiwame enable/disable
>  ${prefix}welcome enable/disable
>  ${prefix}nsfw enable/disable
>  ${prefix}promote
>  ${prefix}demote
>  ${prefix}listonline
>  ${prefix}tagall *teks*
>  ${prefix}leave
>  ${prefix}kick *reply*
>  ${prefix}add *+62xxxxxx*
>  ${prefix}setdeskgc
>  ${prefix}sider *reply chat bot*
>  ${prefix}hidetag *teks/reply teks*
>  ${prefix}linkgc


*⌜ Game Menu ⌟* 
>  ${prefix}limitgame
>  ${prefix}slot
>  ${prefix}gelud *@tag*
>  ${prefix}tictactoe *@tag*
>  ${prefix}suit *batu/kertas/gunting*


*⌜ Download Menu ⌟*
>  ${prefix}fbdl 
>  ${prefix}igdl 
>  ${prefix}igdl2 
>  ${prefix}twitter 
>  ${prefix}tiktok 
>  ${prefix}play 
>  ${prefix}ythd 
>  ${prefix}ytmp3 
>  ${prefix}ytmp4 
>  ${prefix }soundcloud 
>  ${prefix}tiktoknowm 
>  ${prefix}tiktokaudio
>  ${prefix}mediafire 


*⌜ Sticker Menu ⌟*
>  ${prefix}doge
>  ${prefix}patrick
>  ${prefix}gura
>  ${prefix}stickeranime
>  ${prefix}sticker *reply foto/video*
>  ${prefix}toimg


*⌜ Vn Menu ⌟*
>  ${prefix}tupai


*⌜ Other Menu ⌟*
>  ${prefix}ssweb *query*
>  ${prefix}ytsearch *query*


*⌜ Wibu Menu ⌟*
>  ${prefix}milf


*⌜ Random Menu ⌟*
>  ${prefix}tourl
>  ${prefix}artimimpi


*⌜ Search Menu ⌟*
>  ${prefix}ytsearch *query*
>  ${prefix}ssweb *query*
>  ${prefix}image *query*


*⌜ Fun Menu ⌟*
>  ${prefix}mining
>  ${prefix}cekmati [nama]
>  ${prefix}wangy [nama]
>  ${prefix}toxic
>  ${prefix}truth
>  ${prefix}dare
>  ${prefix}apakah
>  ${prefix}bisakah
>  ${prefix}kapankah
>  ${prefix}rate
>  ${prefix}jadian
>  ${prefix}cantik
>  ${prefix}ganteng
>  ${prefix}beban
>  ${prefix}babi
>  ${prefix}cekganteng
>  ${prefix}cekcantik


*⌜ Owner Menu ⌟*
>  ${prefix}bc
>  ${prefix}leave
>  ${prefix}join *link gc*
>  ${prefix}shutdown
>  ${prefix}addupdate *fiturnya*
>  ${prefix}exif *nama|author*
>  ${prefix}delete
>  ${prefix}block
>  ${prefix}unblock
>  ${prefix}setppbot
>  ${prefix}self
>  ${prefix}public
>  ${prefix}restart
>  ${prefix}leaveall
>  ${prefix}join
>  ${prefix}banned
>  ${prefix}unbanned
>  ${prefix}reset


`
               buttons = [{buttonId: `${prefix}infobot`,buttonText:{displayText: 'ɪɴғᴏʙᴏᴛ'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: 'ᴅᴏɴᴀsɪ'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText: 'ᴏᴡɴᴇʀ'},type:1}]

               imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${allmenu}`,
               footerText: '© ʙʏ ᴡᴀɴᴢʙᴏᴛ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
              Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              break           
//------------------< case nya >------------------ 
case 'infobot':
if (isBanned) return freply(mess.banned)
freply(`━━━━━ *INFO BOT* ━━━━━
• *NAMA BOT :* VIE BOT
• *NOMOR BOT :* 6283830086398
• *NAMA OWNER :* WANZBOT
• *NOMOR OWNER :* 6283804343232
• *LINK :* wa.me/6283804343232
• *CREATOR :* WANZBOT
• *BASE ORI :* WANZBOT
• *TYPE SC :* nodejs
• *PREFIX :* MULTI PREFIX
• *FITUR :* 500+
• *VERSION :* 17.0.0
• *DI BUAT PADA :* sel, 29, mart, 2022
• *GITHUB CREATOR :* https://github.com/Riswanganz
• *YT CREATOR :* https://m.youtube.com/channel/UC4mrtQKsM0i31zFrd01OsRg
• *NOTES :* DONASI NYA TUAN:)
*━━━━━━━━━━━━━━━━━━━━*`)
randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'script': case 'sc':
if (isBanned) return freply(mess.banned)
freply(`━━━━━ *SCRIPT* ━━━━━
❏ LINK VIA GITHUB : https://mynamelink.blogspot.com/2022/03/script-base-bot-whatsapp-md.html
❏ BASE ORI : WanzBOT
❏ TYPE SC : nodejs
❏ DI BUAT PADA : sel, 29, mart, 2022
*━━━━━━━━━━━━━━━━━━━━*`)
break

//----------------<store menu>----------------
               case 'store menu':
               case 'storemenu':
               case 'sm':
               if (isBanned) return freply(mess.banned)
               list = []
               liststore = [`sewabot`,`jasaup`,`jasarun`,`buyprem`,`buysc`,`topupgame`,`topupsaldo`]
               liststoree= [`Sewa Bot`,`Jasa Up`,`Jasa Run`,`Buy Prem`,`Buy Script`,`Topup Game`,`Topup Saldo`]
               nombor = 1
               startnum = 0
               for (let x of liststore) {
               const yy = {title: 'Store' + nombor++,
                    rows: [
                       {
                        title: `${liststoree[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Gamenya Disini`, list)
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
               break
               case 'topupgame':
               if (isBanned) return freply(mess.banned)
               list = []
               liststore = [`topupff`,`topupml`,`topuppubg`,`topuppb`,`topupssm`]
               liststoree= [`Top Up Free Fire`,`Top Up Mobile Legends`,`Top Up Pubg`,`Top Up Point Blank`,`Topup Sausage Man`]
               nombor = 1
               startnum = 0
               for (let x of liststore) {
               const yy = {title: 'Top Up' + nombor++,
                    rows: [
                       {
                        title: `${liststoree[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Gamenya Disini`, list)
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
               break
case 'topupsaldo':
               if (isBanned) return freply(mess.banned)
               freply(mess.wait)
               list = []
               liststore = [`topupgopay`,`topupdana`,`topupovo`,`topuppulsa`]
               liststoree= [`Top Up Gopay`,`Top Up Dana`,`Top Up Ovo`,`Top Up Pulsa`]
               nombor = 1
               startnum = 0
               for (let x of liststore) {
               const yy = {title: 'Top Up' + nombor++,
                    rows: [
                       {
                        title: `${liststoree[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Gamenya Disini`, list)
               break
//THANKS TO
case 'thanksto': //DI HAPUS? KETAHUAN AWAS LUH GUA GABAKAL NGEBOT LAGI
case 'tqto':
case 'tqtq':
if (isBanned) return freply(mess.banned)
freply(`• *BIG THANKS TO*
• WANZBOT (ME)
• RAMDANI OFFICIAL (MASTAH)
• ARUL
• MHANKBARBAR
• APRILIA
• ZEEONE OFC
• DIKA ARDNT
• RIMURUBOTZ
• KAHFZXZY
• LEXXY OFFICIAL
• HERMAN CHANNEL
• ABIL BOT
• KURR XD OFFICIAL
• DIKA XD
• SIEGRIN
• KANNABOT
• YANZ BOT`)
randomaudi = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
Ramdani.sendMessage(from, randomaudi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
break

//JASA
//JASA RUN HEROKU
case 'jasarunheroku':
case 'jasarun':
if (isBanned) return freply(mess.banned)
freply(`*SILAHLAN HUBUNGI*\nhttp://wa.me/6283804343232?text=bang+mau+order+jasa+run+heroku:v`)
break
//JASA UP HEROKU
case 'jasaupgithub':
case 'jasaup':
if (isBanned) return freply(mess.banned)
freply(`*SILAHLAN HUBUNGI*\nhttp://wa.me/6283804343232?text=bang+mau+order+jasa+up+github:v`)
break
//STORE MENU//
//TOP UP GAME
case 'topupgame2':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupgame(prefix), MessageType.text, {quoted: troli})
break
case 'topupfreefire':
case 'topupff':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupfreefire(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topupmobilelegends':
case 'topupml':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupmobilelegends(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topuppubg':
case 'topuppapji':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppubg(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topuppointblank':
case 'topuppb':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppointblank(prefix, nomorowner), MessageType.text, {quoted: troli})
break
//TOP UP SALDO
case 'topupsaldo':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupsaldo(prefix), text)
break
case 'topupgopay':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupgopay(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topupdana':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupdana(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topupovo':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupovo(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topuppulsa':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppulsa(prefix, nomorowner), MessageType.text, {quoted: troli})
break
                
//payment                
           case 'gopay':
           if (isBanned) return freply(mess.banned)
             freply(`*GOPAY :* 083804343232`)
             break
         case 'ovo':
         if (isBanned) return freply(mess.banned)
             freply(`*OVO :* 083804343232`)
             break  
         case 'pulsa':
         if (isBanned) return freply(mess.banned)
             freply(`*PULSA :* 083804343232`)
             break    
// SOSMET          
      case 'infoig':
      if (isBanned) return freply(mess.banned)
             freply(`Follow Instagram Owner Ya : https://www.instagram.com/memes.lucu01`)
             break
       case 'youtube': 
       if (isBanned) return freply(mess.banned)
              freply(`*Subcribe YT Owner :*\n https://m.youtube.com/channel/UC4mrtQKsM0i31zFrd01OsRg`)
              break
//casee nya
case 'grupbot':
case 'groupbot':
if (isBanned) return freply(mess.banned)
       freply(`*Nih Group Bot:* \nhttps://chat.whatsapp.com/J4ii7zkiySP9s6xdlZDggp\n\n*NOTE :* GROUP BEBAS, TAPI SOPAN, JANGAN SPAM`)
break
case 'rules':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, rulesbot(prefix), MessageType.text, {quoted: troli})
break      
case 'owner':
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, owner(prefix), MessageType.text, {quoted: troli})
break
//------------------< Game >------------------
        case 'limitgame': 
        case 'balance': 
        if (isBanned) return freply(mess.banned)
               const balance = atm.checkATMuser(sender, _uang)
               textImg(`Limit Game : ${cekGLimit(sender, glimit, glimit)}/${limit}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isBanned) return freply(mess.banned)
               if (isGame(sender, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
               if (!isGroup) return freply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return freply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return freply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return freply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               Ramdani.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
        if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               freply('Berhasil Menghapus Sesi Gelud')
               } else {
               freply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isTTT) return freply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               freply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (!isGroup) return freply(mess.only.group)
              if (args.length < 1) return freply('Tag Lawan Anda! ')
              if (isTTT) return freply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Ramdani.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'slot':
              if (isBanned) return freply(mess.banned)
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit':
              if (isBanned) return freply(mess.banned)
              if (!q) return freply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return freply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              freply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              freply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              freply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              freply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              freply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              freply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              freply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
case 'bayar':
if (isBanned) return freply(mess.banned)
gopeynya = 'https://i.ibb.co/kynNYTh/Ramdani2.jpg'
teksnya = `*[ PAYMENT ]*
*Gopay :* 083804343232
*Pulsa :* 083804343232
*Ovo :* 083804343232
*[ © ʙʏ ᴡᴀɴᴢʙᴏᴛ ]*`
        Ramdani.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: teksnya })
              break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (isBanned) return freply(mess.banned)
              if (isQuotedSticker) {
              if (!q) return freply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              freply('tag stickenya')
}
              break
       case 'delcmd':
              if (isBanned) return freply(mess.banned)
              if (!isQuotedSticker) return freply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              if (isBanned) return freply(mess.banned)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       case 'igdl':
       case 'instagram':
              if (isBanned) return freply(mess.banned)
              try {
              if (!q) return freply('Linknya?')
              freply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${zeksapi}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Username : ${res.data.owner}\`\`\`
\`\`\`• Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              freply(String(e))
}
              break
       case 'scplay': 
       case 'soundcloud':
              if (isBanned) return freply(mess.banned)
              if (!q) return freply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return freply(mess.error.Iv)
              freply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${lolhumanapi}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { freply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (isBanned) return freply(mess.banned)
              if (args.length < 1) return freply('Apa Yang Mau Dicari?')
              freply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return freply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
              if (isBanned) return freply(mess.banned)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res[0].judul}\`\`\`
\`\`\`• Ext : MP3\`\`\`
\`\`\`• Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
              if (isBanned) return freply(mess.banned)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res[0].judul}\`\`\`
\`\`\`• Ext : MP4\`\`\`
\`\`\`• Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
              if (isBanned) return freply(mess.banned)
            if (args.length === 0) return freply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return freply(mess.error.Iv)
            try {
            freply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${title}\`\`\`
\`\`\`• Kualitas* : 720p\`\`\`
\`\`\`• Size* : ${filesizeF}\`\`\`
\`\`\`• Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${title}\`\`\`
\`\`\`• Kualitas : 720p\`\`\`
\`\`\`• Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => freply(mess.error.api))
})		
})
              } catch (err) {
              freply(`eror`)
}
              break
        case 'mediafire':
              if (isBanned) return freply(mess.banned)
               if (args.length < 1) return freply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return freply(mess.error.Iv)
               freply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Nama : ${res[0].nama}\`\`\`
\`\`\`• Ukuran : ${res[0].size}\`\`\`
\`\`\`• Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             freply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
       case 'tiktok': 
       case 'ttdl':
              if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!q.includes('tiktok')) return freply(mess.error.Iv)
             freply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { freply(String(err)) })
             break
      case 'ttnowm': 
      case 'tiktoknowm':
              if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!q.includes('tiktok')) return freply(mess.error.Iv)
             freply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { freply(String(err)) })
             break
case 'tiktok':
              if (isBanned) return freply(mess.banned)
              if (!isRegister) return freply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ramdaniofficial.github.io`)
              if (!q) return freply('Linknya?')
              if (!q.includes('tiktok')) return freply(mess.error.Iv)
              buttons = [{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/thumb.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/thumb.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Subscribe Yt Ramdani Official\n Help 1k subscriber', imageMessage: imageMsg,
              contentText:`Silahkan pilihan media yg mau di download kak:v`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Ramdani.relayWAMessage(prep)
              break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhumanapi}&url=${ini_link}`)
             Ramdani.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
      case 'fb':
      case 'facebook':
              if (isBanned) return freply(mess.banned)
             if (!q) return
             freply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             freply(`${e}`)
}
             break
      case 'twitter':
              if (isBanned) return freply(mess.banned)
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return freply(mess.Iv)
             if (!q) return freply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
case 'ssweb':
case 'ssurl':
case 'sslink':
case 'ss':
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Urlnya nya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buffungu = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buffungu, image, {quoted: troli, caption : teks})
break
//DOWNLOAD MENU
case 'play':
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Apa Yang Mau Dicari?')
teks = args.join(' ')
freply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
freply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
freply(`[ *YOUTUBE PLAY* ]
*Judul :* ${res.all[0].title}
*Link Video :* https://youtu.be/${res.all[0].videoId}
*Link Channel :* ${res.all[0].author.url}

_*Tunggu sebentar, bot sedang mengirim file*_`)
res = await y2mateA(res.all[0].url).catch(e => {
freply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
freply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
freply(`[ *YOUTUBE PLAY* ]
*Judul :* ${res.all[0].title}
*Link Video :* https://youtu.be/${res.all[0].videoId}
*Link Channel :* ${res.all[0].author.url}

_*Tunggu sebentar, bot sedang mengirim file*_`)
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
freply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'mp4':
if (isBanned) return freply(mess.banned)
freply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${args.join(" ")}`)
mp4 = await getBuffer(ini.result.url_video)
Ramdani.sendMessage(from, mp4, video)
break
case 'mp3':
if (isBanned) return freply(mess.banned)
freply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${args.join(" ")}`)
mp3 = await getBuffer(ini.result.url_audio)
Ramdani.sendMessage(from, mp3, audio)
break
        case 'yts':
       case 'ytsearch':
              if (isBanned) return freply(mess.banned)
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`• Title : ${i.title}\`\`\`
\`\`\`• Views : ${i.views}\`\`\`
\`\`\`• Upload : ${i.ago}\`\`\`
\`\`\`• Durasi : ${i.timestamp}\`\`\`
\`\`\`• Channel : ${i.author.name}\`\`\`
\`\`\`• Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
              if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               freply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await Ramdani.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               freply(res)
               } else {
               freply('kirim/reply gambar/video')
}
               break
//------------------< Level >-------------------
       case 'leaderboard': //Cek Leaderboard
       case 'lb':
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isLevelingOn) return await freply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              freply(leaderboard)
              } catch (err) {
              console.error(err)
              freply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< media/sticker/Tools >-------------------

      case 'doge':
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
              if (isBanned) return freply(mess.banned)
		      if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                freply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            freply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            freply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                freply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    
      case 'toimg':
              if (isBanned) return freply(mess.banned)
              if (!isQuotedSticker) return freply('reply stickernya')
              freply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return freply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
//KODE MENU
case 'kodebahasa':                  
if (isBanned) return freply(mess.banned)
freply(`id = Indonesia
en = English
jp = Japan`)
break 
//------------------<WAR MENU>---------------    
case 'p': // TROLLI
if (!isOwner) return  freply(mess.only.owner)
if (isBanned) return freply(mess.banned)
buf = Mfake
imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Ramdani.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 2022,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "LOL",
"message":"Di Pilih Barang Nya",
"sellerJid": "6289512545999p.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}}) 

Ramdani.relayWAMessage(res)
break     
//------------------< Ingfo Bot >-------------------
      case 'runtime':
if (isBanned) return freply(mess.banned)
              textImg(`${runtime(process.uptime())}`)
              break
        case 'masukandata': 
        if (isBanned) return freply(mess.banned)
             freply(`*「BOT MELAYANI」*\n\n━━━━━━━━━━━━━━━━━━━━\n\nMASUKKANA DATA BERIKUT\n*•NAMA GAME:*\n*•ID GAME:*\n*•USER NAME:*\n━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\n*1.* _JANGAN LUPA BUKTI SCREENSHOT NYA_\n*2.* _OTOMATIS PESANAN_\n_LANSUNG DI PROSES_\n*3.* _PESANAN ANDA DI PROSES_\n_OLEH_\n\n   *© ʙʏ ᴡᴀɴᴢʙᴏᴛ*\n\n_JIKA PESANAN ANDA LOW_\n_PROSES MOHON BERSABAR_\nwa.me/6283804343232`)
              break
      case 'ping':
      case 'speed': 
       if (isBanned) return freply(mess.banned)
              timestampe = speed();
              latensie = speed() - timestampe
              freply(`「 *VIE BOTZ* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat': 
              if (isBanned) return freply(mess.banned)
              groups = Ramdani.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = Ramdani.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await Ramdani.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`• Group Chats : ${groups.length}\`\`\`
\`\`\`• Private Chats : ${privat.length}\`\`\`
\`\`\`• Total Chats : ${totalChat.length}\`\`\`
\`\`\`• Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`• Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`• Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`• Ram Usage : ${ram2}\`\`\`
\`\`\`• Platform : ${os.platform()}\`\`\`
\`\`\`• Hostname : ${os.hostname()}\`\`\`
\`\`\`• Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`• Wa Version: ${Ramdani.user.phone.wa_version}\`\`\`
\`\`\`• Os Version: ${Ramdani.user.phone.os_version}\`\`\`
\`\`\`• Device Manufacturer: ${Ramdani.user.phone.device_manufacturer}\`\`\`
\`\`\`• Device Model: ${Ramdani.user.phone.device_model}\`\`\`
\`\`\`• Os Build Number: ${Ramdani.user.phone.os_build_number}\`\`\``
             freply(teks)
             break  
//------------------< Owner Menu >-------------------
      case 'bc':
      case 'broadcast': 
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             if (args.length < 1) return freply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 SIARAN VIE BOTZ」*\n\n*NAME :* *WanzBOT*\n*NOMER :* *wa.me/${sender.split('@')[0]}*\n*ISI PESAN :* ${body.slice(4)}`,
			"footerText": '© ʙʏ ᴡᴀɴᴢʙᴏᴛ',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             freply('Suksess broadcast')
}
             break
                 case 'block': 
                 if (isBanned) return freply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 Ramdani.chatRead (from)
					if (!isGroup) return freply(mess.only.group)
					if (!isOwner) return freply(mess.only.ownerB)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock': 
                    if (isBanned) return freply(mess.banned)
					if (!isGroup) return freply(mess.only.group)
					if (!isOwner) return freply(mess.only.ownerB)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot': 
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply('*Only Owner bot*')
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return freply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					freply('Done')
					break 
					case 'public': 
                if (isBanned) return freply(mess.banned)
                if (!mek.key.fromMe && !isOwner) return freply('Fitur Khusus Owner!!')
                if (BanChats === false) return
                setting.BanChats = false
                BanChats = false
                fs.writeFileSync('./config/setting.json', JSON.stringify(setting, null, 2))
                freply(`「 *PUBLIC-MODE* 」`)
                break
        case 'self': 
               if (isBanned) return freply(mess.banned)
                if (!mek.key.fromMe && !isOwner) return freply('Fitur Khusus Owner!!')
                if (setting.BanChats === true) return
                setting.BanChats = true
                uptime = process.uptime()
                BanChats = true
                fs.writeFileSync('./config/setting.json', JSON.stringify(setting, null, 2))
                freply(`「 *SELF-MODE* 」`)
                break
                    case 'ban':
                    case 'banned':
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					freply(`Nomor wa.me/${bnnd} telah dibanned !`)
	                break
                    case 'unban':
                    case 'unbanned':
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					freply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return freply(mess.banned)
        if (!isOwner) return freply(mess.only.ownerB)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
      case 'addupdate': 
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return freply(mess.only.owner)
             if (!q) return freply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             freply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update': 
             if (isBanned) return freply(mess.banned)
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset': 
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return freply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/limit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif': 
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             if (!q) return freply(mess.wrongFormat)
             if (!arg.split('|')) return freply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             freply('sukses')
             break      
      case 'join':  
             if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!isOwner) return freply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return freply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Ramdani.query({ json: ['action', 'invite', link],
             expect200: true })
             freply('Berhasil Masuk Grup')
             break
      case 'restart': 
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return 
             freply(mess.wait)
             exec(`node main`)
             freply('_Restarting Bot Success_')
             break
      case 'leaveall': 
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Owner suruh aku keluar dari semua grup, dadah semuanya', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
//-----------< vn menu >-----------\\
                    case 'tupai': 
                    if (isBanned) return freply(mess.banned)
				    freply('PROSES')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return freply('Error!')
						hah = fs.readFileSync(ran)
						Ramdani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: troli})
						fs.unlinkSync(ran)
					})
				break 
//------------------< G R U P >-------------------
case 'linkgc': 
             if (isBanned) return freply(mess.banned)
				if (!isGroup) return freply(mess.only.group)
				linkgc = await Ramdani.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				Ramdani.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick': 
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (!isGroup) return freply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add': 
             if (isBanned) return freply(mess.banned)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             Ramdani.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupAdd(from, [entah])
}
             break
      case 'promote': 
             if (isBanned) return freply(mess.banned)
             freply('Selamat ya dah di promote')
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Ramdani.groupMakeAdmin(from, mems_ids)
             } else {
             Ramdani.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupMakeAdmin(from, [entah])
}
             break
      case 'demote': 
             if (isBanned) return freply(mess.banned)
             freply('Selamat ya dah di demote')
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Ramdani.groupDemoteAdmin(from, mems_ids)
             } else {
             Ramdani.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupDemoteAdmin(from, [entah])
}
             break
       case 'setdesc': 
             if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (args.length == 0)  return freply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
       case 'setppgc': 
             if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              } else {
              freply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'afk':  
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (isAfkOn) return freply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `*AFK MODE ON!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              freply(aluty)
              break
       case 'infogc':
       case 'grupinfo':
       case 'groupinfo': 
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(mess.only.group)
              try {
              var pic = await Ramdani.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiWame :* ${isAntiWame ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Nsfw :* ${isNsfw ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Ramdani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall': 
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n*NAME :* *${pushname}* \n*NOMER :* *wa.me/${sender.split('@')[0]}* \n*ISI PESAN :* ${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'leave': 
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              setTimeout( () => {
              Ramdani.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              freply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             freply(`${e}`)
}
             break
      case 'hidetag': 
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider': 
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             if(!isGroup) return freply(mess.only.group)
             try {
             infom = await Ramdani.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             freply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
             if (isBanned) return freply(mess.banned)
              if (!q) return
              qq = q.toUpperCase()
              makasih = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              freply(makasih)
              break
       case 'mining':
             if (isBanned) return freply(mess.banned)
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await freply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
             if (isBanned) return freply(mess.banned)
              freply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
             if (isBanned) return freply(mess.banned)
              if (!q) return freply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              freply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'toxic':
             if (isBanned) return freply(mess.banned)
              Toxic().then(toxic => {
              freply(toxic)
})
              break
//seru seruan
       case 'apakah':
             if (isBanned) return freply(mess.banned)
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
             if (isBanned) return freply(mess.banned)
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
             if (isBanned) return freply(mess.banned)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
             if (isBanned) return freply(mess.banned)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'bisakah':
             if (isBanned) return freply(mess.banned)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
             if (isBanned) return freply(mess.banned)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
       case 'truth':
             if (isBanned) return freply(mess.banned)
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Ramdani.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
             if (isBanned) return freply(mess.banned)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
             if (isBanned) return freply(mess.banned)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
             if (isBanned) return freply(mess.banned)
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
             if (isBanned) return freply(mess.banned)
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
             if (isBanned) return freply(mess.banned)
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
             if (isBanned) return freply(mess.banned)
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
      case 'get':
      case 'fetch':
             if (isBanned) return freply(mess.banned)
             if (!/^https?:\/\//.test(q)) return freply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             freply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
      case 'caripesan':
             if (isBanned) return freply(mess.banned)
             if (args.length < 1) return freply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return freply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return freply('Maks 30!')
             freply(mess.wait)
             cok = await Ramdani.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return freply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) freply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             Ramdani.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return freply(String(e))
}
             } else {
             freply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
             if (isBanned) return freply(mess.banned)
              if (args.length < 1) return freply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              Ramdani.sendMessage(from, teks, text, {quoted: troli})
              break
       case 'report':
              if (isBanned) return freply(mess.banned)
              if (args.length < 1) return freply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              freply('GUNAKAN REPORT SEBAIK MUNGKIN, MISAL MENANYAKAN TENTANG BOT ATAU MELAPORKAN BUG BOT')
              Ramdani.sendMessage('6283804343232@s.whatsapp.net',`*REPORT*\n*Nomer Pelaku:* *wa.me/${sender.split('@')[0]}* \n*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              if (isBanned) return freply(mess.banned)
              totalchat.map( async ({ jid }) => {
              await Ramdani.chatRead(jid)
})
              freply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	
              
//------------------< enable/disable>-------------------
              case 'antiwame':
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
              if (args.length < 1) return freply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiWame) return freply(`Udah aktif`)
              antiwame.push(from)
		      fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
		      freply('*「 ANTIWAME DI AKTIFKAN 」*\n\nYang Ngirim Link wa.me Bakal Ke Kick!')
               } else if (args[0].toLowerCase() === 'disable'){
               let anu = antiwame.indexOf(from)
               antiwame.splice(anu, 1)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
               freply('*「 ANTIWAME DI NONAKTIFKAN 」*')
                } else {
                freply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
}
                break
                case 'nsfw':
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
              if (args.length < 1) return freply(`Pilih enable atau disable\nContoh : ${prefix}nsfw enable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isNsfw) return freply(`Udah aktif`)
                    nsfw.push(from)
					fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
					freply('Nsfw aktif')
                } else if (args[0].toLowerCase() === 'disable'){
                    let anu = nsfw.indexOf(from)
                    nsfw.splice(anu, 1)
                    fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                    freply('Nsfw nonaktif')
                } else {
                    freply(`Pilih enable atau disable\nContoh : ${prefix}nsfw enable`)
                }
                break
              case 'leveling':
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return freply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              freply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              freply('Fitur leveling berhasil dimatikan.')
              } else {
              freply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
              if (!q) return freply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return freply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              freply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              freply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              freply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (isBanned) return freply(mess.banned)
               if (!isGroupAdmins) return freply(mess.only.admin)
               if (!isGroup) return freply(mess.only.group)
               if (args.length < 1) return freply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return freply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               freply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               freply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               freply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isGroupAdmins) return freply(mess.only.admin)
               if (args.length < 1) return freply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return freply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               freply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${namabot}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               freply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${namabot}*_`)
               } else {
               freply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'setgc':
        case 'gcsetting':
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isGroupAdmins) return freply(mess.only.admin)
               list = []
               com = [`group buka`,`leveling enable`,`welcome enable`,`antiwame enable`,`antilink enable`,`nsfw enable`,`mute enable`]
               comm = [`group tutup`,`leveling disable`,`welcome disable`,`antiwame disable`,`antilink disable`,`nsfw disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`AntiWame enable/disable`,`Antilink enable/disable`,`Nsfw enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`AntiWame`,`Antilink`,`Nsfw`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Click di bawah ini, dan atur sesuka mu`, list)
        
             break
 		case 'group':
              if (isBanned) return freply(mess.banned)
					if (!isGroup) return freply(ind.groupo())
					if (!isGroupAdmins) return freply(ind.admin())
					if (!isBotGroupAdmins) return freply(ind.badmin())
					if (args[0] === 'buka') {
					    freply(`*BERHASIL MEMBUKA GROUP*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						freply(`*BERHASIL MENUTUP GROUP*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break   
//--------------<soundnya vang:v>-----------------
             case 'sound1':
satu = fs.readFileSync('./media/audio/sound1.mp3');
Ramdani.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
   
//══════════[ FITUR MAKER ]══════════//
case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/${command}?apikey=${ramdaniapi}&text=${teks}`)
oke = await getBuffer(anu.result)
Ramdani.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break

//--------------<fitur tambahan>--------------
case 'tes':
if (isBanned) return freply(mess.banned)
freply(`*_BOT ONLINE_*`)
break
case 'totalfitur':
freply(`*TOTAL FITUR SAAT INI : 500+*`)
break
//--------------<new fitur>--------------


//--------------------------< T E R A K H I R >--------------------------\\
default:
if (fs.existsSync(`./database/game/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return freply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   Ramdani.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./database/game/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Ramdani.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/game/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Ramdani.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Ramdani.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ramdani.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Ramdani.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ramdani.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Ramdani.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
freply(e)
}
}
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
freply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
freply('_' + err + '_\n\n' + js)
}
                  }


		if (budy.includes(`bot`)) {

                  freply(`Saya mendengar ada yang memanggil saya?`)

                  }



		if (budy.includes(`wan`)) {

                  freply(`Jangan manggil manggil owner ku!`)

                  }
                  
                  
        if (budy.includes(`hai`)) {

                  freply(`hallo`)

                  }


		if (budy.includes(`Assalamualaikum`)) {

                  freply(`Waalaikumsalam ${pushname}`)

                  }


		if (budy.includes(`P`)) {

                  freply(`Pa pe pa pe, Sopan sedikit bisa kan?`)

                  }


		if (budy.includes(`Kontol`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Ngentod`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Kntl`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Memek`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`memek`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`jembut`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`kontol`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`anj`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Anjg`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Bacot`)) {

                  freply(`Iyaa sama kek lu bacod juga`)

                  }
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
Ramdani.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/foto/emror.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','aqua'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'aqua'))
        }
	}
}



