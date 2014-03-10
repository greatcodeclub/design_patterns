function CommandFactory($puppy) {
  this.$puppy = $puppy
}

// The command factory method. Creates a command based on the key code.
CommandFactory.prototype.createCommandFromKeyCode = function(keyCode) {
  var direction = utils.keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    // Following lines are the dynamic equivalent to:
    //    window['MoveUpCommand']
    // and
    //    window.MoveUpCommand
    // and
    //    MoveUpCommand
    var capitalizedDirection = direction[0].toUpperCase() + direction.substr(1),
        commandClass = window['Move' + capitalizedDirection + 'Command']

    return new commandClass(this.$puppy)
  }
}


// The base class for all commands
function Command($puppy) {
  this.$puppy = $puppy
}

// Some helper methods we'll use later to move the puppy.
Command.prototype.up = function() {
  this.$puppy.animate({'top': '-=30px'})
}
Command.prototype.down = function() {
  this.$puppy.animate({'top': '+=30px'})
}
Command.prototype.left = function() {
  this.$puppy.animate({'left': '-=30px'})
}
Command.prototype.right = function() {
  this.$puppy.animate({'left': '+=30px'})
}

// Enabled using Command.extend({ prototype properties }) instead of the usual
// inheritance boilerplate code. 
Command.extend = utils.extend


// The actual commands.

MoveUpCommand = Command.extend({
  name: 'up', // Used only for logging.
  run:  function() { this.up() },
  undo: function() { this.down() }
})

MoveDownCommand = Command.extend({
  name: 'down',
  run:  function() { this.down() },
  undo: function() { this.up() }
})

MoveLeftCommand = Command.extend({
  name: 'left',
  run:  function() { this.left() },
  undo: function() { this.right() }
})

MoveRightCommand = Command.extend({
  name: 'right',
  run:  function() { this.right() },
  undo: function() { this.left() }
})
