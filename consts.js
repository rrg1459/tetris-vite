export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp'
}

export const PIECES = [
  [ // la pieza amarilla
    [2, 2],
    [2, 2]
  ],
  [
    [3, 3, 3, 3]
  ],
  [ // es la pieza lila
    [0, 4, 0],
    [4, 4, 4]
  ],
  [ // la pieza verde
    [5, 5, 0],
    [0, 5, 5]
  ],
  [
    [0, 6, 6],
    [6, 6, 0]
  ],
  [
    [7, 0],
    [7, 0],
    [7, 7]
  ],
  [
    [0, 8],
    [0, 8],
    [8, 8]
  ]
]
