var J = ["jirrj", "wo_va", "shas4a", "rul0n"]

require('./console')
var db = require('./db')
import { bot } from "./bot"
import { upd } from "./upd"



globalThis.Z = async function(r) {


        try {

            
        await upd(r)
       // console.info(req)
      //  
         
        } catch (err) {
            console.warn(err)
        }
//return console.info(r)


if(J.indexOf(req.from) < 0) return new Response(console.warn(req), { status: 200 })

    globalThis.v = await db.get(req.from)
    B.chat_id = req.chat
    
        if (req.ref) {

        await db.add({ ref: req.ref }, req.from)
}
//     if (req.entities && req.text) {
//         req.entities.forEach((element) => {
//             if (element.type === "text_link") {
//                 req.url = element.url
//             } else {
//                 req[element.type] = req.text.substring(element.offset, (element.offset + element.length))
//                 if (req.text === req[element.type]) {
//                     delete req.text
//                 }
//             }
//         })
//         delete req.entities
//         await L.put(req.from, Date.now())

//     }

    if (req.photo) {

       var t = (v.ref+'%20'+req.caption).toUpperCase().replace(/ /g, '%20').replace(/,/g, '%20')
//console.info(req)
        // if(req.caption) t += `b_rgb:21211f,c_fit,co_white,fl_relative,g_north,l_text:Yanone%20Kaffeesatz_50_center:${req.caption.toUpperCase().replace(/ /g, '%20').replace(/,/g, '%20')},w_960/`
//t = `b_rgb:33ff00,c_fit,co_black,fl_relative,g_north_west,l_text:ubuntu%20mono_36_bold_center:${t},w_400/fl_relative,l_7,x_0.16,y_0.17/`
req.width = req.width > 960 ? req.width : 960
        req.photo = `https://res.cloudinary.com/o6/image/fetch/w_${req.width}/fl_relative,g_north_west,h_400,l_${v.pic},w_400/b_rgb:ffffff,c_fit,co_black,fl_relative,g_north_west,l_text:Yanone%20Kaffeesatz_48_center:${t},w_400,y_400/fl_relative,l_7,x_0.16,y_0.17/${req.photo}`
     // console.info(req.photo)
          //     req.photo = `https://res.cloudinary.com/o6/image/fetch/w_960/fl_relative,g_north_west,l_${v.pic},w_320,h_320/${t}${req.photo}`
 ///console.info(req.photo)
        //  if (req.type == "reply") ERR//req.photo = `https://res.cloudinary.com/o6/image/fetch/c_scale,q_auto,w_960/fl_relative,g_north,l_inbn1vg4vn8ohj2rqrcx,w_1.0,y_-240/b_rgb:000000,c_fit,co_white,fl_relative,g_north,l_text:Yanone%20Kaffeesatz_48_center:${req.caption},w_1.0/${req.photo}`
        B.text = await fetch(`https://api.imgbb.com/1/upload?key=61d5447ecc57bd825f97775369be81f5&name=${v.ll}&image=${encodeURIComponent(req.photo)}`).then(r => r.json()).then( async r => {
            var i = r.data.id
            r = [req.caption.toLowerCase(),"ibb.co/" + i, v.ref , "www.google.com/maps?q=" + v.ll].join("\n")
           // var o = {}
            var o = { id: i, date: Date.now(), ref: [req.caption.toLowerCase(), v.ref ].join("\n"), ll: v.ll, from: req.from }
         //   console.info(o)
await db.put(o,i)
return r
        })
        //await db.get(req.from)
        B.method = "sendmessage"
              // B.text =  await db.list()
        //    console.info(rrr)
        //  B.text = 'View all posts: [GovTech Blog](https://blog.gds-gov.tech/)'
      //  B.parse_mode = 'Markdown'
        // }        
    }
        if (req.result_id) {
     
await db.put({date: -1}, req.result_id)
    }
    if (req.location && !req.id && !req.result_id) {
      
        B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&banner=${req.location}|000000-ffffff-lg&type=hyb&zoom=18&size=400,400@2x&locations=${req.location}|circle-lg-000000-ffffff`//`https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=17&size=960,340@2x&locations=${req.location}|circle-sm-000000-f7f63f`
        await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?upload_preset=o6oooo&file=${encodeURIComponent(B.photo)}`).then(r => r.json()).then(async r => {
            // B.caption = r.public_id
            await db.add({ ll: req.location, pic: r.public_id }, req.from)
        })
        B.method = "sendphoto"
      //  B.caption = "iinl.ml?l=" + req.chat
        // B.reply_markup = {
        //     inline_keyboard: [
        //         [ {
        //             "text": "▶️",
        //             "switch_inline_query_current_chat": ""
        //         },{
        //             "text": "➖",
        //             "switch_inline_query_current_chat": "-"
        //         }, {
        //             "text": "➕",
        //             "switch_inline_query_current_chat": "+"
        //         }],[ {
        //             "text": "-",
        //              "callback_data": "-"
        //         }, {
        //             "text": "👁‍🗨",
        //             "url": "https://gre4a.4l.workers.dev"
        //         }]
        //     ]
        // }
    }
    if (req.type == "inline_query") {
              var rrr = await db.list()
              var l = rrr.length
                rrr = await rrr.map(({ ref,date,from,ll,id }, o) => ({
          type: "article",
          id,
          title: (l-o) + " - " + id,
                          'description': ref,
                'thumb_url': `https://i.ibb.co/${id}/i.png`,
                'input_message_content': {
                    'message_text': [ref , "ibb.co/" + id,  "www.google.com/maps?q=" + ll].join("\n")
                }
         // caption: ref,
        //  thumb_url: url,
         // photo_url: url,
        //  photo_height: 100
        }))//.slice(0, 49)
        B = {
            method: "answerInlineQuery",
            //    switch_pm_text:"🚩"+ll,
            cache_time: 0,
            is_personal: true,
            //     switch_pm_parameter: ll,
            inline_query_id: req.id,
            results: rrr
            //  [{
            //     'type': 'article',
            //     'id': 'ec',
            //     'title': 'Edison Chee on Medium',
            //     'description': 'UX Research. UI Design. Web Development',
            //     'thumb_url': 'http://edisonchee.com/img/favicon.ico',
            //     'input_message_content': {
            //         'message_text': 'Featured article: [Rethinking top-level navigation labels](https://blog.gds-gov.tech/rethinking-top-level-navigation-labels-75c9759613af#.ke516y2qw)',
            //         'parse_mode': 'Markdown',
            //         'disable_web_page_preview': false
            //     }
            // }, {
            //     'type': 'article',
            //     'id': 'gt',
            //     'title': 'Singapore GovTech Blog',
            //     'description': 'Be Happy, Be Awesome!',
            //     'thumb_url': 'https://cdn-images-1.medium.com/max/82/1*hB4KIovectkFlSXV3NhHUQ.png',
            //     'input_message_content': {
            //         'message_text': 'View all posts: [GovTech Blog](https://blog.gds-gov.tech/)',
            //         'parse_mode': 'Markdown',
            //         'disable_web_page_preview': false
            //     }
            // }]
        }
        
    }
   
    // if (B.method == "sendphoto") {
    //     B.caption = Object.values(v).join("\n")
    // }
    // else {
    //     B.text = Object.values(v).join("\n")
    // }
    // if (!B.method) {
    //     B.parse_mode = 'HTML'
    //     B.method = "sendmessage"
    //      if (!B.text && v.pic) B.text = "<code>" + (Object.values(v).sort().join("\n")) + "</code>"
    //     if (v.pic) {
    //         B.photo = "https://res.cloudinary.com/o6/" + v.pic
    //         B.caption = B.text
    //         B.method == "sendphoto"
    //     }
    //     //"copy ```re```".push("```").unshift("```")
    // }

        try {

            
          if (!B.method && !B.photo && !B.cache_time) await bot(req)
        } catch (err) {
            console.warn(err)
        }

    if (req.message_id) await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${req.chat}&message_id=${req.message_id}`)
}