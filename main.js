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

// 2. game loop
function update () {
  draw()
  window.requestAnimationFrame(update)
}

// 3. board
const board = createBoard(BOARD_WIDTH, BOARD_HEIGHT)
board[BOARD_HEIGHT - 2].fill(9, 0, BOARD_WIDTH - 2)
board[BOARD_HEIGHT - 1].fill(9, 0, BOARD_WIDTH - 2)

function draw () {
  // todo el tablero
  context.fillStyle = '#000'
  context.fillRect(0, 0, canvas.width, canvas.height)

  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value > 0) {

        if (value === 9) context.fillStyle = 'gray'
        context.fillRect(x, y, 1, 1)
      }
    })
  })
}

update()


function createBoard (width, height) {
  return Array(height).fill().map(() => Array(width).fill(0))
}
