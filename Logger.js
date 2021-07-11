import EventEmitter from 'events'
import { v4 } from 'uuid'

class Logger extends EventEmitter {

  log(message) {
    console.log(message)
    // when emit is called, all listener called sync.ly.
    this.emit('messageLogged', {
      id: v4(),
      url: 'http://google.com'
    })
  }
}

export default Logger;