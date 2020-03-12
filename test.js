const request = require("request")
const fs = require("fs")
const token = fs.readFileSync("token", "utf8")

request({
    url: `https://sync.afraid.org/u/${token}/`
}, (error, response, body) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(body)
})