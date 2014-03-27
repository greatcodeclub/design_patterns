//// The command factory. Creates the commands.
function CommandFactory($pony) {
  this.$pony = $pony
}

CommandFactory.prototype.createCommandFromKeyCode = function(keyCode) {
  var direction = keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    // Following lines are the dynamic equivalent to:
    //    window['MoveUpCommand']
    // and
    //    window.MoveUpCommand
    // and
    //    MoveUpCommand
    var capitalizedDirection = direction[0].toUpperCase() + direction.slice(1),
        commandClass = window['Move' + capitalizedDirection + 'Command']

    return new commandClass(this.$pony)
  }
}