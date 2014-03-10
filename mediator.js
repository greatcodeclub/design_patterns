function Mediator($puppy) {
  // The puppy we're movin' here.
  this.$puppy = $puppy

  // The commands stack
  this.commands = []
}

Mediator.prototype.move = function(keyCode) {
  // Create the command, using a factory method.
  var command = Commands.createCommandFromKeyCode(keyCode, this.$puppy)

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

  } else {
    // No commands to undo!
    alert("Nothing to undo")
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
