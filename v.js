const { W2B } = require('./index.js')

export async function onRequestPost(context) {
  var { request } = context

  var url = new URL(request.url)
    var { pathname } = url
   pathname = pathname.replace("/", "")
    const params = {}
    const queryString = url.search.slice(1).split('&')
    queryString.forEach(item => {
        const [key, value] = item.split('=')
        if (key) params[key] = value || true
    })

    
    

    
      if(params.t) globalThis.TOKEN = params.t



  try {
    
  globalThis.B = {}
   //await Z(request)
   request = await request.json()
   await W2B(request)
   console.info(B)
         return new Response(JSON.stringify(B, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
    //var j = await L.get("J")
   // console.info(j)
  } catch (err) {
    console.warn(err)
    return new Response({ status: 200 })
  }
  // return new Response({ status: 200 })
  //request = await request.json()
  //   finally {
  //     return new Response(JSON.stringify(B, null, 4), {
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // })
  // }
  // await Z(request)

}

async function vib(re) {

B = await (re.clone()).json()


// re.T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs"
// B = await fetch(
//       `https://ii.1l.workers.dev`,
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify(re)
//       }
//     ).then( r => r.json() )


    //            await fetch("https://gleb.1l.workers.dev", {
    //             method: 'POST',
    //             headers: {
          
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //             body: JSON.stringify({location:ll,geo:null})
    //         })

    // const newRequestInit = {
    //     method: "POST",
    //     body: JSON.stringify(re),
    //     redirect: 'content-type': 'application/json'
    // }
    // const url = new URL("https://gleb.1l.workers.dev")
    // const newRequest = new Request(
    //     url.toString(),
    //     new Request(request, newRequestInit),
    // )
    // try {
    //     return await fetch(newRequest)
    // } catch (e) {
    //     console.warn(e)
    //     return new Response({ status: 200 })
    // }
}

