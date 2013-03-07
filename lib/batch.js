var leveldown = require('leveldown')

module.exports = Batch

function Batch (db) {
  this.db = db
  this.batch = new leveldown.CBatch()
}

Batch.prototype.put = function (key, value) {
  this.batch.put(key, value)
  return this
}

Batch.prototype.del = function (key) {
  this.batch.del(key)
  return this
}

Batch.prototype.write = function (cb) {
  this.db.write(this.batch, cb)
}
