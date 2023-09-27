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
function update() {
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
  if (event.key === 'ArrowLeft') piece.position.x--
  if (event.key === 'ArrowRight') piece.position.x++
  if (event.key === 'ArrowDown') piece.position.y++
})

update()


function createBoard(width, height) {
  return Array(height).fill().map(() => Array(width).fill(0))
}
