//// Flyweight design pattern.

function Cache() {
  this.items = {}
}

Cache.prototype.getOrCreate = function(key, createFunction) {
  var item = this.items[key]

  if (item == null) {
    // Item not yet in cache, we cache it.
    item = createFunction()
    this.items[key] = item
  }

  return item
}