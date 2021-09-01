const http = require("http")
const fs = require("fs")

// if process.env.PORT exists it will use that instead
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")


    let path = "public/"
    switch(req.url) {
        case "/":
            path += "index.html"
            res.statusCode = 200
            break
        case "/about":
            path += "about.html"
            res.statusCode = 200
            break
        case "/contact-me":
            path += "contact-me.html"
            res.statusCode = 200
            break
        default:
            path += "404.html"
            res.statusCode = 404
            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.write(data)
            res.end()
        }


    })

})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})