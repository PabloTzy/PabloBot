const CFonts = require('cfonts');
const color = require('chalk');

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
  `PabloNetwork\nBase: WhiskeySockets\nCreatedBy: Pablo × Zyrex\ncampuran\nRunning on: ${runningPlatform}\n\n\nSc Ini Di Jual Pablo Kalo Ketauan Jual Mahal Sc inI gua Banned Nyawa Lu Jarak Jauh\n\n\n`,
  {
    colors: ["system"],
    font: "console",
    align: "center",
  },
);
console.log(color(`INFO:`, "red"), color(`\n𖦹`, "yellow"), color(`Jika code tidak muncul enter 1-2x lagi`, "green"), color(`\n𖦹`, "yellow"), color(`Type nomor harus 62xxx bukan 08xxx\n`, "green"))
