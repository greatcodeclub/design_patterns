function CommandLogSubscriber(publisher, $log) {
  this.$log = $log

  var self = this

  // Subscribe to the publisher's events we're interested in.
  publisher.on('runCommand',  function(e, command) { self.onRunCommand(command) })
  publisher.on('undoCommand', function(e, command) { self.onUndoCommand(command) })
}

CommandLogSubscriber.prototype.onRunCommand = function(command) {
  this.$log.append('<li>' + command.name + '</li>')
}

CommandLogSubscriber.prototype.onUndoCommand = function(command) {
  this.$log.find('li:last').remove()
}