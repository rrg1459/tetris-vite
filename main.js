import './style.css'

// 1. Initialize canvas
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

// // 2. game loop
// function update() {
//   draw()
//   window.requestAnimationFrame(update)
// }

// 8. auto drop
let dropCounter = 0
let lastTime = 0

function update (time = 0) {
  const deltaTime = time - lastTime
  lastTime = time

  dropCounter += deltaTime

  if (dropCounter > 1000) {
    piece.position.y++
    dropCounter = 0

    if (checkCollision()) {
      piece.position.y--
      solidifyPiece()
      removeRows()
    }
  }

  draw()
  window.requestAnimationFrame(update)
}

// 3. board
const board = createBoard(BOARD_WIDTH, BOARD_HEIGHT)
// board[BOARD_HEIGHT - 2].fill(9, 0, BOARD_WIDTH - 2)
board[BOARD_HEIGHT - 1].fill(9, 0, BOARD_WIDTH - 2)

  // 4. pieza player
  const piece = {
    position: { x: 5, y: 5 },
    shape: [
      [2, 2],
      [2, 2]
    ]
  }

function draw() {
  // todo el tablero
  context.fillStyle = '#000'
  context.fillRect(0, 0, canvas.width, canvas.height)

  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        if (value === 2) context.fillStyle = 'green'
        if (value === 9) context.fillStyle = 'gray'
        context.fillRect(x, y, 1, 1)
      }
    })
  })

  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        context.fillStyle = 'red'
        if (value === 2) context.fillStyle = 'green'
        context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
      }
    })
  })

}

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    piece.position.x--
    if (checkCollision()) piece.position.x++
  }
  if (event.key === 'ArrowRight') {
    piece.position.x++
    if (checkCollision()) piece.position.x--
  }
  if (event.key === 'ArrowDown') {
    piece.position.y++}
    if (checkCollision()) {
      piece.position.y--
      solidifyPiece()
      removeRows()
    }
})

function checkCollision () {
  return piece.shape.find((row, y) => {
    return row.find((value, x) => {
      return value && board[y + piece.position.y]?.[x + piece.position.x] !== 0
    })
  })
}

function solidifyPiece () {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        board[y + piece.position.y][x + piece.position.x] = value
      }
    })
  })
  piece.position.x = 0
  piece.position.y = 0
}

function removeRows () {
  const rowsToRemove = []

  board.forEach((row, y) => {
    // if (row.every(value => value > 0)) { // is the same
    if (row.every(value => value)) {
      rowsToRemove.push(y)
    }
  })

  rowsToRemove.forEach(y => {
    board.splice(y, 1)
    const newRow = Array(BOARD_WIDTH).fill(0)
    board.unshift(newRow)
  })
}

update()


function createBoard(width, height) {
  return Array(height).fill().map(() => Array(width).fill(0))
}
