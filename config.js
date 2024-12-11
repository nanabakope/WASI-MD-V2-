//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "233202539768@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "233202539768";
global.sudo = process.env.SUDO || "233202539768,233202539768";
global.owner = process.env.OWNER_NUMBER || "233202539768";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tUaDd4dmJqTkJQcGlUSTRhWElNMFZsOW9HZ29DNHhEN3c5anhjV3JWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2VLY3FtWjdzNzhwSFR5SldhNzJwdW5uSlpLYUNMTFQ5eGgwaFR6QjJ4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRWxQYlc4blRjSktqZFZpUldzdExNSDhveFJ4a3RBSVlxRncxekRyVUZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodVNCSSt3Z1ZNU0dKdVZNUUFMdEpaR25SNElOcER4SUxVSXgvTmhsaWg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROcXJ6bVNCL1JMazMrVHRhNDZXUnNWbVdNSGZ4UmtPaGw2ZTB6aVB4MXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZPUmNQc0xQREFPTFd6bE43SkdvaDdxYkhCaUkvRDlqdzZtU3lybTdpVVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFtSktuWXptQnRSR3ZIalk3b2VqbXBRV1lZTjN1UWlINCtub095eW5tST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzgrbXFDNUE0Qlh1cWVNK2I3VW5ibFo3OTd2TUZKeTkwaW9iYS9SblRsRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlnRWYzY0cwNlZIdFBBbDU5eGdGRnA3bi9XT3N2MDUxNDdqVVl4Wmdrcnh3WTdDSy9BMy9ZL3hOUi95UllWam03Y3p2Vk1kTjd1Z3dOSkU5QTN2YmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiI3b1Z0Z3lzdFB2dmFrTGFQd1kwL3JDTlhNUkcvVk16aVhna1pSdXdZQ25NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzIwMjUzOTc2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUYwQTRGREU3OEREOUNCNkYzRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzODk2Nzk0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3RXZRdHViclRibUZfbGxZS3dMWk53IiwicGhvbmVJZCI6ImUwOTE4ZmQ4LThjZWYtNDhkOS05ZDgwLWI1NzBhMGViMjdlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUmlaTTkvaC9qOXhHR1dRTFNCU2NUbUduVUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWY4MUpBbVAxeUNjRzVJOE5IZDBxREtXYXljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZUSFdLQ01QIiwibWUiOnsiaWQiOiIyMzMyMDI1Mzk3Njg6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4aGV4aC14aCK4aGD4KGa4KCi4KCY4LuIIOK4neC7iOCgoeCgo+Ggit+v4aCG4KCj4KCY4aGB4KCj4KCY4aCKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT2t3b1FNRU1uVTVMb0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJER1ZQcWdLb2NTOWg4bGhSRzJaNFRteGtRZGVaYTNNUjIvMnRUY3lMR3hBPSIsImFjY291bnRTaWduYXR1cmUiOiIwVFI0cERqaDRwSHhtcVpPUmozM2VkUWIzTmxoNXdhT29aSzdZTTBlV3VRZVkrL2VlWG5Rbzk5Vkg0THIydU9PQ1lkalpOa2grUVh2eDRYWDBsclBodz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVkxRaXByWnozWTFNME9ET3dOSlkvb2VvdVViams3SzRwWGxxU1M2QXFlaCtkODBiZWFrYzlrOGhvaG5hWmt3UlpCQUJ6dVRkOVI1VzlNaXU0VE00Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyMDI1Mzk3Njg6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXhsVDZvQ3FIRXZZZkpZVVJ0bWVFNXNaRUhYbVd0ekVkdjlyVTNNaXhzUSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzODk2NzkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl6bCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-FADA-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FADA-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "233202539768",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
