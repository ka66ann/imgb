globalThis.TOKEN = "5036205639:AAH8yRMM7Hxn57neIyhb4ox_KlB-QXAWlOI"
import "./iinl/66o"
import { html } from "./iinl/html"
if (typeof L === 'undefined') globalThis.L = {}

import "./iinl/66o"

export default {
    async fetch(request, env, ctx) {
globalThis.B = {}
  if (request.method === "GET") return new Response(html(JSON.stringify(request.cf, null, 4)), {           headers: {
                'content-type': 'text/html'
            } })

        var { G } = env
L = G
      

      //  console.info(env)
        ///if (request.method != "POST") return new Response({ status: 200 })

                   try {
 
            await Z(request)

        //            B = {
        //     method: "sendmessage",
        //     chat_id: 5043676235,
        //     text: 0
        // }
           // B.text = request
        } catch (err) {
            console.warn(err)
            
        }
                       try {
 var k = await L.get(req.from)
            
            console.info(k)
        //            B = {
        //     method: "sendmessage",
        //     chat_id: 5043676235,
        //     text: 0
        // }
           // B.text = request
        } catch (err) {
            console.warn(err)
            
        }
       //                                                                                       console.info(B)
         // return new Response({status:200})
         
        return new Response(JSON.stringify(B, null, 4), {
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}

