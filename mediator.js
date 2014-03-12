function Mediator($pony) {
  // The pony we're movin' here.
  this.$pony = $pony

  // The commands stack
  this.commands = []

  this.commandFactory = new CommandFactory($pony)
}

Mediator.prototype.move = function(keyCode) {
  // Create the command, using a factory method.
  var command = this.commandFactory.createCommandFromKeyCode(keyCode)

  if (command) {
    command.run()
    this.trigger('runCommand', command)

    this.commands.push(command)
  }
}

Mediator.prototype.undo = function() {
  // Get and remove the last command from the stack
  var command = this.commands.pop()

  if (command) {
    command.undo()
    this.trigger('undoCommand', command)
  }
}

// Publisher / subscriber design pattern.
//
// Undocumented (but supported) feature of jQuery. You can bind event handlers
// to plain JS objects like so.
// Source: http://forum.jquery.com/topic/triggering-custom-events-on-js-objects

Mediator.prototype.on = function(event, callback) {
  $(this).on(event, callback)
}
Mediator.prototype.trigger = function(event, command) {
  $(this).trigger(event, command)
}
