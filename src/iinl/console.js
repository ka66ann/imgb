
var A = x => x[0] ? (x[1] ? [...x] : [...x][0]) : ""
var fe = async (z = "NOTEXT", id = "-1001651961839", T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs", str = '') => {
    z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
    z = z.substring(0, 4090)
    return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}` + str)
        .then(r => r.json())
        .catch(async err => {
            err = err.stack || err
            await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`)
            return err.stack
        })
        .then(async r => {
            if (r.description) return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`)
            return r.result.message_id || r
        })
}
var warn = console.warn
console.warn = async function() {
    var er = [...arguments][0]
    return await fe((er.stack || er), "-770608664")
}
var info = console.info
console.info = async function() {
    return await fe(A([...arguments]))

}
