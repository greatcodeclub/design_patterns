function PuppyMover($puppy, $log) {
  this.$puppy = $puppy
  this.$log = $log

  this.moves = []
}

PuppyMover.prototype.moveDirection = function(direction) {
  switch (direction) {
    case 'up':
      this.$puppy.animate({'top': '-=30px'})
      break
    case 'down':
      this.$puppy.animate({'top': '+=30px'})
      break
    case 'left':
      this.$puppy.animate({'left': '-=30px'})
      break
    case 'right':
      this.$puppy.animate({'left': '+=30px'})
      break
  }
}

PuppyMover.prototype.move = function(keyCode) {
  var direction = utils.keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    this.moveDirection(direction)
    this.moves.push(direction)
    this.$log.append('<li>' + direction + '</li>')
  }
}

PuppyMover.prototype.oppositeDirections = {
  'up': 'down',
  'down': 'up',
  'left': 'right',
  'right': 'left'
}

PuppyMover.prototype.undo = function() {
  var direction = this.moves.pop()

  if (direction) {
    var oppositeDirection = this.oppositeDirections[direction]

    this.moveDirection(oppositeDirection)
    this.$log.find('li:last').remove()
  }
}
