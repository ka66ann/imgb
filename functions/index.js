const { ViberClient } = require('messaging-api-viber')
const { k } = require('./%')
const AUTH_TOKEN = '4ada74e3b527de8d-e3695a52a9a8b46b-cd6f1e1296677bb5';

const client = ViberClient.connect(AUTH_TOKEN)


exports.W2B  = async update => {
    
if(update.message){
         if(update.message.text){


var from = update.sender || update.user
var USER_ID = from.id
var txt = update.message.text || 0
var txt = txt < 2 ? txt : txt > 1 ? 0 : 0

client.sendCarouselContent(USER_ID, k[txt])
         }}
    
}