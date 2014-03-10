var Commands = {}

Commands.keys = {
  37: 'Left',
  38: 'Up',
  39: 'Right',
  40: 'Down'
}

// Factory method. Creates a command based on the key code.
Commands.createCommandFromKeyCode = function(keyCode, $puppy) {
  var direction = this.keys[keyCode] // Convert key code to direction name

  if (direction) {
    var commandClass = this['Move' + direction + 'Command'] // Eg.: Commands['MoveUpCommand']

    return new commandClass($puppy)
  }
}


// The base class for all commands
Commands.Command = function($puppy) {
  this.$puppy = $puppy
}

// Some helper methods we'll use later to move the puppy.
Commands.Command.prototype.up = function() {
  this.$puppy.animate({'top': '-=30px'})
}
Commands.Command.prototype.down = function() {
  this.$puppy.animate({'top': '+=30px'})
}
Commands.Command.prototype.left = function() {
  this.$puppy.animate({'left': '-=30px'})
}
Commands.Command.prototype.right = function() {
  this.$puppy.animate({'left': '+=30px'})
}


// The command to move the puppy up.
Commands.MoveUpCommand = function() {
  Commands.Command.apply(this, arguments) // Call the super constructor
  this.name = 'MoveUpCommand' // The name is only used in the log
}

// Inherit from Commands.Command
Commands.MoveUpCommand.prototype = Object.create(Commands.Command.prototype)
Commands.MoveUpCommand.prototype.constructor = Commands.MoveUpCommand

// Running the command moves it up. Undoing does the inverse operation.
Commands.MoveUpCommand.prototype.run  = function() { this.up() }
Commands.MoveUpCommand.prototype.undo = function() { this.down() }


// Code for the other commands is the same. Only the `run` and `undo` methods
// change to move in the correction directions.

Commands.MoveDownCommand = function() {
  Commands.Command.apply(this, arguments)
  this.name = 'MoveDownCommand'
}
Commands.MoveDownCommand.prototype = Object.create(Commands.Command.prototype)
Commands.MoveDownCommand.prototype.constructor = Commands.MoveDownCommand

Commands.MoveDownCommand.prototype.run  = function() { this.down() }
Commands.MoveDownCommand.prototype.undo = function() { this.up() }


Commands.MoveLeftCommand = function() {
  Commands.Command.apply(this, arguments)
  this.name = 'MoveLeftCommand'
}
Commands.MoveLeftCommand.prototype = Object.create(Commands.Command.prototype)
Commands.MoveLeftCommand.prototype.constructor = Commands.MoveLeftCommand

Commands.MoveLeftCommand.prototype.run  = function() { this.left() }
Commands.MoveLeftCommand.prototype.undo = function() { this.right() }


Commands.MoveRightCommand = function() {
  Commands.Command.apply(this, arguments)
  this.name = 'MoveRightCommand'
}
Commands.MoveRightCommand.prototype = Object.create(Commands.Command.prototype)
Commands.MoveRightCommand.prototype.constructor = Commands.MoveRightCommand

Commands.MoveRightCommand.prototype.run  = function() { this.right() }
Commands.MoveRightCommand.prototype.undo = function() { this.left() }
