// Observe the commands and updates the log on events.
function CommandLogger(publisher, $log) {
  var self = this

  // Subscribe to the events we're interested in.
  publisher.on('runCommand',  function(e, command) { self.onRunCommand(command) })
  publisher.on('undoCommand', function(e, command) { self.onUndoCommand(command) })

  this.$log = $log
}

CommandLogger.prototype.onRunCommand = function(command) {
  var command = new CommandDecorator(command)
  
  this.$log.append('<li>' + command.name + '</li>')
}

CommandLogger.prototype.onUndoCommand = function(command) {
  this.$log.find('li:last').remove()
}