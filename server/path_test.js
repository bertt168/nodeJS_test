import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)

console.log("Given filename =", __filename)
console.log(`basename is ${path.basename(__filename)}.`)
console.log(`dirname is ${path.dirname(__filename)}`)
console.log(`extension is ${path.extname(__filename)}`)
console.log(`After path.parse we got`, path.parse(__filename))

console.log(`Now testing path.join, with 'secret' and 'first.src':`,
    path.join(path.dirname(__filename), 'secret', 'first.src'))