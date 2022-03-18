
// import html from "./iinl/html"
  

export async function onRequestGet({
  env: { URLS },
  params: { slug }
}) {
//   // Contents of context object
//   const {

//     env, // same as existing Worker API
//     params
//   } = context;
//   var { URLS } = env
// var { slug } = params

  var url = await URLS.get(slug)
  //url += "-"
  
  if (!url) {
    return new Response(null, { status: 404 });
  }

  // return new Response(html(url), {
  //   headers: {
  //     'Content-type': 'text/html;charset=utf-8'
  //   }
  // })
console.info(url)
  return new Response(null, {
    status: 302,
    headers: {
      location: url,
    },
  })
};
