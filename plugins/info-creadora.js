//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
//Puedes editar el país,enlaces, los números se editan desde el config.js
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let pp = gataImg
const cat = `MichiBot
wa.me/56941827124
wa.me/56928561853

*---------------------*

*INSTAGRAM*
*https://www.instagram.com/ceogeripium.dzn*
*https://www.instagram.com/richetti_123*

*---------------------*

*CANAL WHATSAPP Y GRUPO OFICIAL
*https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M*
*https://chat.whatsapp.com/BEh3wICepoo9DUR3yLZwir*

*---------------------*`
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto1() : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto2() : desc2}`

nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : lenguajeGB.smsContacto3() 
description = official[0][0] == String(contact[0]) ? 'Solo temas de MichiBot' : official[1][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : desc === '' ? lenguajeGB.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? '@ceogeripium.dzn' : official[1][0] == String(contact[0]) ? '@richetti_123' : official[2][0] == String(contact[0]) ? '@ceogeripium.dzn' : mail === '' ? lenguajeGB.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '🇨🇱 Chile' : official[1][0] == String(contact[0]) ? '🇵🇪 Peru' : official[2][0] == String(contact[0]) ? '🇨🇱 Chile' : official[3][0] == String(contact[0]) ? '🇵🇪 Peru' : country === '' ? lenguajeGB.smsContacto7() : country
enlace = official[0][0] == String(contact[0]) ? 'https://www.instagram.com/ceogeripium.dzn' : official[1][0] == String(contact[0]) ? 'https://www.instagram.com/richetti_123' : official[2][0] == String(contact[0]) ? 'https://www.instagram.com/ceogeripium.dzn' : official[3][0] == String(contact[0]) ? 'https://www.instagram.com/richetti_123' : md 

lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://www.instagram.com/ceogeripium.dzn' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeGB.smsContacto8(), mail === '' ? '@ceogeripium.dzn' : mail, lenguajeGB.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendFile(m.chat, pp, 'lp.jpg', cat, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: wm, previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb.getRandom()}}})
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador|contactos?|contacts?)$/i

export default handler
