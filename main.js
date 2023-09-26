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

function draw () {
  // todo el tablero
  console.log('xxx KABUMMM');
  context.fillStyle = '#000'
  context.fillRect(0, 0, canvas.width, canvas.height)
}

update()
