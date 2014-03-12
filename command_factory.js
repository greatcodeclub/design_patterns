//// The command factory. Creates the commands.
function CommandFactory($pony) {
  this.$pony = $pony

  this.commandsCache = new Cache()
}

CommandFactory.prototype.createCommandFromKeyCode = function(keyCode) {
  var self = this,
      direction = keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    return this.commandsCache.getOrCreate(direction, function() {
      // Following lines are the dynamic equivalent to:
      //    window['MoveUpCommand']
      // and
      //    window.MoveUpCommand
      // and
      //    MoveUpCommand
      var capitalizedDirection = direction[0].toUpperCase() + direction.substr(1),
          commandClass = window['Move' + capitalizedDirection + 'Command']

      return new commandClass(self.$pony)
    })
  }
}
