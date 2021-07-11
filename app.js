import Logger from "./logger.js"

const emitter = new Logger()

emitter.on('messageLogged', (arg) => {
  console.log(arg)
})

emitter.log('hello')