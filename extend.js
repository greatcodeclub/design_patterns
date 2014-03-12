// JavaScript classical inheritance, in one single call!
//
// Usage:
//
//   function Parent() {}
//   Parent.extend = extend
//
//   var Child = Parent.extend({
//     constructor: function() { ... }, // Constructor calls super if unspecified
//     otherMethod: function() { ... }
//   })
//
// Based on the internal `extend` function from Backbone (Backbone.View.extend).
function extend(prototypeProperties) {
  var parent = this, child

  // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent's constructor.
  if (prototypeProperties && prototypeProperties.hasOwnProperty('constructor')) {
    child = prototypeProperties.constructor
  } else {
    child = function() { return parent.apply(this, arguments) }
  }

  inherit(child, parent)

  // Add prototype properties (instance properties) to the subclass,
  // if supplied.
  if (prototypeProperties) $.extend(child.prototype, prototypeProperties)

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype

  return child
}


//// Adapter

// Adapt the APIs to make a child class inherit from a parent class depending
// if Object.create is available.
//
// Note: usually, it's better to use Polyfills when compensating for incomplete
// JS implementations.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
if (typeof Object.create === 'function') {
  
  // Use Object.create if available.
  var inherit = function(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.constructor = child
    return child
  }

} else {

  // Use an intermediate constructor function if no Object.create.
  // Taken from Backbone.
  var inherit = function(child, parent) {
    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function() { this.constructor = child }
    Surrogate.prototype = parent.prototype
    child.prototype = new Surrogate
    return child
  }

}