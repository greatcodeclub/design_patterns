var ModernUtilsAdapter = {
  inherit: function(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
  }
}

var FallbackUtilsAdapter = {
  inherit: function(child, parent) {
    var F = function() {}
    F.prototype = parent.prototype
    child.prototype = new F
    child.prototype.constructor = child
  }
}

var utils

// Pick the proper adapter. Fallback if on IE
if (~window.navigator.userAgent.indexOf("MSIE")) {
  utils = FallbackUtilsAdapter
} else {
  utils = ModernUtilsAdapter
}


// The proper solution: Use a Polyfill for Object.create
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill

// if (typeof Object.create !== 'function') {
//   Object.create = function(object) {
//     var F = function() {}
//     F.prototype = object
//     return new F
//   }
// }