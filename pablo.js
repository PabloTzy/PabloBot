const CFonts = require('cfonts');
const { color } = require('./all/color');
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

function getRunningPlatform() {
  if (process.platform === 'win32') {
    return 'Windows';
  } else if (process.platform === 'darwin') {
    return 'macOS';
  } else {
    return 'Linux';
  }
}

const runningPlatform = getRunningPlatform();

CFonts.say("PabloNetwork", {
   font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta'],
});
CFonts.say(
  `PabloNetwork\nBase: WhiskeySockets\nCreatedBy: Pablo x Zyrex\nVersion: 4.0\nRunning on: ${runningPlatform}\n\n\nSc Ini Di Jual Pablo Kalo Ketauan Jual Mahal Sc inI gua Banned Nyawa Lu Jarak Jauh\n\n\n`,
  {
    colors: ["system"],
    font: "console",
    align: "center",
  },
);