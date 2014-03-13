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


//// The actual commands.

function MoveUpCommand($pony) {
  Command.call(this, $pony)
}

MoveUpCommand.prototype = Object.create(Command.prototype)
MoveUpCommand.prototype.constructor = MoveUpCommand

MoveUpCommand.prototype.name = 'up'

MoveUpCommand.prototype.run = function() {
  this.up()
}

MoveUpCommand.prototype.undo = function() {
  this.down()
}


function MoveDownCommand($pony) {
  Command.call(this, $pony)  
}

MoveDownCommand.prototype = Object.create(Command.prototype)
MoveDownCommand.prototype.constructor = MoveDownCommand

MoveDownCommand.prototype.name = 'down'

MoveDownCommand.prototype.run = function() {
  this.down()
}

MoveDownCommand.prototype.undo = function() {
  this.up()
}


function MoveLeftCommand($pony) {
  Command.call(this, $pony)  
}

MoveLeftCommand.prototype = Object.create(Command.prototype)
MoveLeftCommand.prototype.constructor = MoveLeftCommand

MoveLeftCommand.prototype.name = 'left'

MoveLeftCommand.prototype.run = function() {
  this.left()
}

MoveLeftCommand.prototype.undo = function() {
  this.right()
}


function MoveRightCommand($pony) {
  Command.call(this, $pony)  
}

MoveRightCommand.prototype = Object.create(Command.prototype)
MoveRightCommand.prototype.constructor = MoveRightCommand

MoveRightCommand.prototype.name = 'right'

MoveRightCommand.prototype.run = function() {
  this.right()
}

MoveRightCommand.prototype.undo = function() {
  this.left()
}

