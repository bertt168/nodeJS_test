import http from "http"
import {fileURLToPath} from "url"
import path from "path"
import fs from "fs/promises"
const __filename = fileURLToPath(import.meta.url)
const DIST = path.join(__filename, "../",  "../", "public")
console.log("DIST:", DIST)



const server = http.createServer((req, res) => {

  console.log(req.url)
    var filePath = '.' + req.url
    var extname = path.extname(filePath)

  if (req.url === "/") {
    fs.readFile(path.join(DIST, "index.html"))
      .then((content, err) => {
        if (err) {
          console.log(err)
          return
        }
        res.writeHead(200, {
          "Content-Type": "text/html"
        })
        res.end(content)
      })
  }

  if (extname === ".jpg") {
      fs.readFile(path.join(DIST, req.url))
          .then((content, err) => {
          if(err){
              console.log(err);
              return ;
          }
          res.writeHead(200, {
              "Content-Type": "image/jpg"
          })
          res.end(content)
      })
  }

  if (req.url === "/about") {
    fs.readFile(path.join(DIST, "about.html"))
      .then((content, err) => {
        if (err) {
          console.log(err)
          return
        }
        res.writeHead(200, {
          "Content-Type": "text/html"
        })
        res.end(content)
      })
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "A", age: 18 },
      { name: "B", age: 20 },
      { name: "C", age: 23 }
    ]

    res.writeHead(200, {
      "Content-Type": "application/json"
    })

    res.end(JSON.stringify(users))
  }

  if (req.url === "/css/style.css") {
    fs.readFile(path.join(DIST, "/css/style.css"))
      .then((content, err) => {
        if (err) {
          console.log(err)
          return
        }
        res.writeHead(200, {
          "Content-Type": "text/css"
        })
        res.end(content)
      })
  }
})

const PORT = process.env.PORT || 5000
server.listen(PORT,
  () => console.log(`Server running on PORT ${PORT}....`))