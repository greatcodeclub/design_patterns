function PonyMover($pony, $log) {
  this.$pony = $pony
  this.$log = $log

  this.moves = []
}

PonyMover.prototype.moveDirection = function(direction) {
  switch (direction) {
    case 'up':
      this.$pony.animate({'top': '-=30px'})
      break
    case 'down':
      this.$pony.animate({'top': '+=30px'})
      break
    case 'left':
      this.$pony.animate({'left': '-=30px'})
      break
    case 'right':
      this.$pony.animate({'left': '+=30px'})
      break
  }
}

PonyMover.prototype.move = function(keyCode) {
  var direction = keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    this.moveDirection(direction)
    this.moves.push(direction)
    this.$log.append('<li>' + direction + '</li>')
  }
}

PonyMover.prototype.oppositeDirections = {
  'up': 'down',
  'down': 'up',
  'left': 'right',
  'right': 'left'
}

PonyMover.prototype.undo = function() {
  var direction = this.moves.pop()

  if (direction) {
    var oppositeDirection = this.oppositeDirections[direction]

    this.moveDirection(oppositeDirection)
    this.$log.find('li:last').remove()
  }
}
