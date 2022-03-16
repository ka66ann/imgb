if (typeof L === 'undefined') globalThis.L = {}
if (typeof B === 'undefined') globalThis.B = {}
import "./iinl/66o"


async function errorHandler(context) {
  var { env: { N } } = context
  var { request } = context
  L = N
  try {
    //  var r = await (request.clone()).text()
    // console.info(r)
    // wait for the next function to finish
    return await context.next()
  } catch (err) {
    console.warn(err)
    // catch and report and errors when running the next function
    return new Response( { status: 200 })
  }
}

// Attach `errorHandler` to all HTTP requests
export const onRequest = errorHandler;
// const errorHandler = async ({ next }) => {
//   try {
//     return await next()
//   } catch (err) {
//     return new Response(`${err.message}\n${err.stack}`, { status: 500 })
//   }
// }

// const hello = async ({ next }) => {
//   const response = await next()
//   response.headers.set('X-Hello', 'Hello from functions Middleware!')
//   return response
// }

// export const onRequest = [
//   errorHandler,
//   hello
// ]