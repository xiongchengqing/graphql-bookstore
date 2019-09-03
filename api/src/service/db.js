const mongoose = require('mongoose')
const { DB_URL } = require('config')
mongoose.Promise = global.Promise

module.exports = {
 connect,
 ObjectId: mongoose.Types.ObjectId
};

async function connect() {
 try {
      let ret = await mongoose.connect(DB_URL, {
         useNewUrlParser: true
      })
    } catch (e) {
        console.log(e)
    }
}
