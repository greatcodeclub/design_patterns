var utils = {}

// JavaScript classical inheritance, in one single call!
//
// Based on the internal extend utility from Backbone (Backbone.View.extend).
utils.extend = function(prototypeProperties) {
  var parent = this,
      child

  // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent's constructor.
  if (prototypeProperties && prototypeProperties.hasOwnProperty('constructor')) {
    child = prototypeProperties.constructor
  } else {
    child = function() { return parent.apply(this, arguments) }
  }

  // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function.
  var Surrogate = function() { this.constructor = child }
  Surrogate.prototype = parent.prototype
  child.prototype = new Surrogate

  // Add prototype properties (instance properties) to the subclass,
  // if supplied.
  if (prototypeProperties) $.extend(child.prototype, prototypeProperties)

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype

  return child
}

// Partial mapping of key codes to key names
utils.keyCodeToName = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}