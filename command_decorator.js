// Decorator design pattern

function CommandDecorator(command) {
  this.name = this.icons[command.name]
}

CommandDecorator.prototype.icons = {
  left: '&larr;',
  right: '&rarr;',
  down: '&darr;',
  up: '&uarr;'
}
