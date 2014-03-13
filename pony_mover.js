function PonyMover($pony, $log) {
  this.$pony = $pony
  this.$log = $log

  // Stack of all the commands.
  this.commands = []
}

PonyMover.prototype.createCommand = function(direction) {
  switch (direction) {
    case 'up':
      return new MoveUpCommand(this.$pony)
    case 'down':
      return new MoveDownCommand(this.$pony)
    case 'left':
      return new MoveLeftCommand(this.$pony)
    case 'right':
      return new MoveRightCommand(this.$pony)
  }
}

PonyMover.prototype.move = function(keyCode) {
  var direction = keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    var command = this.createCommand(direction)
    command.run()
    this.commands.push(command)
    this.$log.append('<li>' + direction + '</li>')
  }
}

PonyMover.prototype.undo = function() {
  // Get the last command
  var command = this.commands.pop()

  if (command) {
    command.undo()
    this.$log.find('li:last').remove()
  }
}
