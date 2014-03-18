//// The base class for all commands
function Command($pony) {
  this.$pony = $pony
}

// Some helper methods we'll use later to move the pony.
Command.prototype.move = function(direction) {
  switch (direction) {
    case 'up':
      this.$pony.animate({'top': '-=30px'})
      break
    case 'down':
      this.$pony.animate({'top': '+=30px'})
      break
    case 'left':
      this.$pony.animate({'left': '-=30px'})
      break
    case 'right':
      this.$pony.animate({'left': '+=30px'})
      break
  }
}


//// The actual commands.

function MoveUpCommand($pony) {
  Command.call(this, $pony)
}

utils.inherit(MoveUpCommand, Command)

MoveUpCommand.prototype.run = function() {
  this.move('up')
}

MoveUpCommand.prototype.undo = function() {
 this.move('down')
}


function MoveDownCommand($pony) {
  Command.call(this, $pony)  
}

utils.inherit(MoveDownCommand, Command)

MoveDownCommand.prototype.run = function() {
  this.move('down')
}

MoveDownCommand.prototype.undo = function() {
  this.move('up')
}


function MoveLeftCommand($pony) {
  Command.call(this, $pony)  
}

utils.inherit(MoveLeftCommand, Command)

MoveLeftCommand.prototype.run = function() {
  this.move('left')
}

MoveLeftCommand.prototype.undo = function() {
  this.move('right')
}


function MoveRightCommand($pony) {
  Command.call(this, $pony)  
}

utils.inherit(MoveRightCommand, Command)

MoveRightCommand.prototype.run = function() {
  this.move('right')
}

MoveRightCommand.prototype.undo = function() {
  this.move('left')
}
