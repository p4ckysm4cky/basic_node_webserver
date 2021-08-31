const http = require("http")
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log("Hello World")
})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})