const { makeid } = require('./gen-id');
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "𝚀𝚄𝙴𝙴𝙽-𝚂𝙰𝙽𝚄=" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*𝙷𝙴𝚈 𝚀𝚄𝙴𝙴𝙽 𝚂𝙰𝙽𝚄 𝚄𝚂𝙴𝚁!* 👋

Qᴜᴇᴇɴ ꜱᴀɴᴜ ꜱᴇꜱꜱɪᴏɴ  𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳  ✅* ✅


——————

*✅ 𝚂𝚃𝙰𝚈 𝚄𝙿𝙳𝙰𝚃𝙴𝙳:*  
𝙹𝙾𝙸𝙽 𝙾𝚄𝚁 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻:  
https://whatsapp.com/channel/0029VbAnyfs1NCrVt23GNa2v

*💻 Source Code:*  
𝙵𝙾𝚁𝙺 & 𝙴𝚇𝙿𝙻𝙾𝚁𝙴 𝚃𝙷𝙴 𝙿𝚁𝙾𝙹𝙴𝙲𝚃 𝙾𝙽 𝙶𝙸𝚃𝙷𝚄𝙱:  
https://github.com/Queen-sanu/QUEEN-SANU-MD

> *🌸 © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚂𝙰𝙽𝚄 🌸*
𝚂𝚃𝙰𝚈 𝙲𝙾𝙾𝙻 𝙰𝙽𝙳 𝙷𝙰𝙲𝙺 𝚂𝙼𝙰𝚁𝚃. *`;
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐍𝐔",
thumbnailUrl: "https://i.ibb.co/hFQGfphm/7091.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbAnyfs1NCrVt23GNa2v",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `𝙷𝙴𝚈 𝚀𝚄𝙴𝙴𝙽 𝚂𝙰𝙽𝚄 𝚄𝚂𝙴𝚁!* 👋

Qᴜᴇᴇɴ ꜱᴀɴᴜ ꜱᴇꜱꜱɪᴏɴ  𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳  ✅* ✅


——————

*✅ 𝚂𝚃𝙰𝚈 𝚄𝙿𝙳𝙰𝚃𝙴𝙳:*  
𝙹𝙾𝙸𝙽 𝙾𝚄𝚁 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻:  
https://whatsapp.com/channel/0029VbAnyfs1NCrVt23GNa2v

*💻 Source Code:*  
𝙵𝙾𝚁𝙺 & 𝙴𝚇𝙿𝙻𝙾𝚁𝙴 𝚃𝙷𝙴 𝙿𝚁𝙾𝙹𝙴𝙲𝚃 𝙾𝙽 𝙶𝙸𝚃𝙷𝚄𝙱:  
https://github.com/Queen-sanu/QUEEN-SANU-MD

> *🌸 © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚂𝙰𝙽𝚄 🌸*
𝚂𝚃𝙰𝚈 𝙲𝙾𝙾𝙻 𝙰𝙽𝙳 𝙷𝙰𝙲𝙺 𝚂𝙼𝙰𝚁𝚃. *`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐍𝐔",
thumbnailUrl: "https://i.ibb.co/hFQGfphm/7091.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbAnyfs1NCrVt23GNa2v",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await MALVIN_XD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
