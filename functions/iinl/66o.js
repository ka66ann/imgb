import '../po.js'
require('./console')
require('./db')
var db = require_db()
//import { bot } from "./bot"
import { upd } from "./upd"

async function handleinline(d){
  
    let inline_query_id = d.id
    let query = d.query
    let offset = d.offset.split('|')
    let res_data = []
    if(offset.length < 2){
        offset = [inline_query_id,0]
    }
    offset[1] = parseInt(offset[1])
    let hh = j//shuffle(j,offset[0]) // 随机排序
   
    if(query !== '')
        hh = hh.filter(h=>{
            return h.slug.toLowerCase().indexOf(query.toLowerCase()) > -1 || h.img.indexOf(query) > -1
        })
    for (let i = 0; i < 49; i++) {
        let h = hh[offset[1] * 49 + i]
        if(h !== undefined)
            res_data.push({
                id: (offset[1] * 49 + i).toString(),
                title: h.name+" #"+(String(h.id).padStart(3, '0')),
                description: h.ab,
                thumb_url: h.th,
                type: 'article',
                input_message_content: {
                    message_text: h.name
                }
            })
    }
    offset[1] ++
    if(res_data.length < 49) // 一次会返回 49 条 如果结果小于 49 说明翻完了，那么就不用给新的 offset 了
        offset = []
    return {
        chat_id: d.chat,
        method: "answerInlineQuery",
        inline_query_id: inline_query_id,
        cache_time: 0,
        results: JSON.stringify(res_data),
        next_offset: offset.join('|')
    }
}

globalThis.Z = async function(r) {
        try {
        await upd(r)
      //  console.info(req)
      //  
        } catch (err) {
            console.warn(err)
        }
//return console.info(r)
//if(J.indexOf(req.from) < 0) return new Response(console.warn(req), { status: 200 })
    globalThis.v = await db.get(req.from)
    B.chat_id = req.chat
      if (req.ref) {
    await db.add({ ref: req.ref }, req.from);
  }
    if (req.photo) {
    var t = ''
     if (!v.ref) t += " noRef! "
      if (!v.ll) t += " noLL! "
    B.text = t
    B.method = "sendmessage";
  }
  if (req.photo && v.ref && v.ll) {
    var t = ("%20" + v.ll + "%20" + v.ref + "%20" +  req.caption + "%20").toUpperCase().replace(/ /g, "%20").replace(/,/g, "%20");
    req.width = req.width > 960 ? req.width : 960
    var nn = `l_y_vtx3zo,x_0.17,y_0.17/`
    nn = ''
req.photo = `https://res.cloudinary.com/o6/image/fetch/w_960/g_north,l_${v.pic},y_-480/b_rgb:f5e6e4,c_fill,co_black,g_north,l_text:roboto%20mono_96_center_bold:${t},w_960/${req.photo}`
//
    //req.photo = `https://res.cloudinary.com/o6/image/fetch/w_${req.width}/fl_relative,g_north_west,h_300,l_${v.pic},w_300/b_rgb:f5e6e4,c_fit,co_rgb:21211f,fl_relative,g_north_west,l_text:Yanone%20Kaffeesatz_42_bold_center:${t},w_300,y_300/${nn}${req.photo}`;
    B.text = await fetch(`https://api.imgbb.com/1/upload?key=64baf4d50e6dc55ad766138bc68c1cf6&name=${v.ll}&image=${encodeURIComponent(req.photo)}`).then((r2) => r2.json()).then(async (r2) => {
      var i = r2.data.id;
var u = r2.data.url
      r2 = [  "ibb.co/" + i, "www.google.com/maps?q=" + v.ll].join("\n")
      var o = { id: i, date: Date.now(), url: u, ref: v.ref, ll: v.ll, from: req.from, is: 1 }
      // await L.put(i, str(o))
// await fetch(`https://iiilll.firebaseio.com/${i}.json`, {
//                         method: 'PUT',
//                         body: JSON.stringify(o)
//                     }).then(r => r.json())
      await db.put(o, i);
      return r2;
    })
    B.method = "sendmessage";
  }
  if (req.result_id) {
    await db.put({ is: -1 }, req.result_id)
  }
  if (req.location && !req.id && !req.result_id) {
    //B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&banner=${req.location}|lg-21211f-f5e6e4&type=hyb&zoom=17&size=400,400@2x&locations=${req.location}|circle-lg-21211f-f5e6e4`;
  B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=17&size=480,240@2x&locations=${req.location}|circle-lg-21211f-f5e6e4`;
    await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?upload_preset=o6oooo&file=${encodeURIComponent(B.photo)}`).then((r2) => r2.json()).then(async (r2) => {
      await db.add({ ll: req.location, pic: r2.public_id }, req.from);
    });
  B.reply_markup =   {
  "inline_keyboard": [
    [{
      "text": "L",
        "switch_inline_query": ""
    }, {
      "text": ":RE",
      "switch_inline_query_current_chat": ""
    }]
  ]
}
    B.method = "sendphoto";
  }
  if (req.type == "inline_query") {
    B = await handleinline(req)
    // var rrr = await db.list(req.query);
    // var l = rrr.length;
    // rrr = await rrr.map(({ ref, date, from, ll, id }, o) => ({
    //   type: "article",
    //   id,
    //   title: l - o + " - " + id,
    //   "description": ref,
    //   "thumb_url": `https://i.ibb.co/${id}/i.png`,
    //   "input_message_content":  {
    //    "message_text": [ref, "ibb.co/" + id, "www.google.com/maps?q=" + ll].join("\n")
    //  }
    // }));
    // B = {
    //   method: "answerInlineQuery",
    //   cache_time: 0,
    //   is_personal: true,
    //   inline_query_id: req.id,
    //   results: rrr
    // }
  }
 // if (req.message_id && !req.invoice && !req.sender_chat) await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${req.chat}&message_id=${req.message_id}`);
}