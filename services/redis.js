const { createClient } = require('redis')

class RedisStore {

    client

    constructor() {
        this.client = createClient()
    }

    connect = async () => {
        this.client.connect().then(data => console.log(`Redis server connected`)).catch(err => console.log(err, 'Redis servier connection error'))
    }

}

module.exports = new RedisStore()