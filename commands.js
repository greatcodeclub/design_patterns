//// The base class for all commands
function Command($pony) {
  this.$pony = $pony
}

// Some helper methods we'll use later to move the pony.
Command.prototype.up = function() {
  this.$pony.animate({'top': '-=30px'})
}
Command.prototype.down = function() {
  this.$pony.animate({'top': '+=30px'})
}
Command.prototype.left = function() {
  this.$pony.animate({'left': '-=30px'})
}
Command.prototype.right = function() {
  this.$pony.animate({'left': '+=30px'})
}

// Enabled using Command.extend({ prototype properties }) instead of the usual
// inheritance boilerplate code. 
Command.extend = extend


//// The actual commands.

var MoveUpCommand = Command.extend({
  name: 'up', // Used only for logging.
  run:  function() { this.up() },
  undo: function() { this.down() }
})

var MoveDownCommand = Command.extend({
  name: 'down',
  run:  function() { this.down() },
  undo: function() { this.up() }
})

var MoveLeftCommand = Command.extend({
  name: 'left',
  run:  function() { this.left() },
  undo: function() { this.right() }
})

var MoveRightCommand = Command.extend({
  name: 'right',
  run:  function() { this.right() },
  undo: function() { this.left() }
})
