function PonyMover($pony, $log) {
  this.$pony = $pony
  this.$log = $log

  // Stack of all the commands.
  this.commands = []

  this.commandFactory = new CommandFactory($pony)
}

PonyMover.prototype.move = function(keyCode) {
  var command = this.commandFactory.createCommandFromKeyCode(keyCode)

  if (command) {
    command.run()
    this.commands.push(command)
    this.$log.append('<li>' + command.name + '</li>')
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
