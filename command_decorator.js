//// Decorator design pattern

// Decorates a command to add a feature (displaying an icon instead of a
// command name) without changing the API.
function CommandDecorator(command) {
  this.command = command
  this.name = this.icons[command.name] || command.name
}

CommandDecorator.prototype.icons = {
  left: '&larr;',
  right: '&rarr;',
  down: '&darr;',
  up: '&uarr;'
}

// Delegate other method calls to the original command
CommandDecorator.prototype.run = function() {
  this.command.run()
}

CommandDecorator.prototype.undo = function() {
  this.command.undo()
}