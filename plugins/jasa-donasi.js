let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / OVO / DANA / GOPAY :
├ • *088804947282*
│
├ SAWERIA
├ _https://saweria.co/humanzboti_
│
├ Ownerku
├ _wa.me/6288804947282_
│
╰───「 HumanzBotzMD 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
