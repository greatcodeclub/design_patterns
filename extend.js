// JavaScript classical inheritance, in one single call!
//
// Replaces:
//
//   function Parent() {}
//
//   function Child() {
//     Parent.call(this)
//   }
//   
//   Child.prototype = Object.create(Parent.prototype)
//   Child.prototype.constructor = Child
//
// Usage:
//
//   function Parent() {}
//   Parent.extend = extend
//
//   var Child = Parent.extend({
//     constructor: function() { ... }, // If constructor is unspecified, calls super
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

  // Make child inherit from parent
  child.prototype = Object.create(parent.prototype)
  child.constructor = child

  // Add prototype properties (instance properties) to the subclass,
  // if supplied.
  if (prototypeProperties) $.extend(child.prototype, prototypeProperties)

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype

  return child
}
