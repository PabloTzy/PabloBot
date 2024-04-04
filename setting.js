/* SC BOT WL
BASE : PABLO NETWORK
RECODE : PABLO X ZYREX
CREACOT : PABLO X ZYREX
*/

const fs = require('fs')
const chalk = require('chalk')

//—————「 Set Host Untuk Koneksi ke Server WL 」—————//
global.host = 'HOST_SFTP_LU' // HOST SFTP
global.port = 'PORT_SFTP_LJ' // PORT SFTP
global.username = 'USERNAME' //USERNAME SFTP
global.password = 'PASSWORD' //PASSWORD SFTP
global.sftppath = '/scriptfiles/whitelist/' //UBAH MENJADI PATH TEMPAT FILE WHITELIST KALIAN BERADA

//—————「 Setting Samp Query 」—————//
global.IpServer = 'IP_SERVER_LU' //UBAH MENJADI IP SERVER KALIAN
global.PortServer = 'PORT_SERVER_LU' // UBAH MENJADI PORT SERVER KALIAN
global.NameServerLite = 'SINGKATAN_NAMA_SERVER_LU' // UBAH MENJADI NAMA SINGKATAN SERVER RP KALIAN CONTOH ALVEOULUS ROLEPLAY JADI ALRP
global.NameServerFull = 'NAMA_SERVER_LU' // UBAH MENJADI NAMA SERVER KALIAN

//—————「 Setting Bot 」—————//
global.owner = "6285755251934"
global.namabot = "PabloNetwork"
global.botname = "PabloNetwork"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'PabloRawr' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Pablo🥵"

//—————「 Setting Nama Store 」—————//
global.namastore = "PabloNetwork"
global.nodana = "085755251934"
global.nogopay = "-"
global.shopepay = "limit"
global.qris = "-"

//—————「 Setting Create Panel 」—————//
global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//—————「 Setting Anti Link 」—————//
global.antilink = false

const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "Berhasil ✓",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Raihan Art Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu",
       admin: "Ga Usah Pake Fitur Ini Asu",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
