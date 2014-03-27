//// The command factory. Creates the commands.
function CommandFactory($pony) {
  this.$pony = $pony
}

CommandFactory.prototype.createCommandFromKeyCode = function(keyCode) {
  var direction = keyCodeToName[keyCode] // Convert key code to direction name

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