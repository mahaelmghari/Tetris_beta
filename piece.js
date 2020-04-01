class Piece {
  x;
  y;
  color;
  shape;
  ctx;
  typeId;

  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }

  /**
   * Genera il tetronimo
   *
   * @memberof Piece
   */
  spawn() {
    this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
    this.shape = SHAPES[this.typeId];
    this.color = COLORS[this.typeId];
    this.x = 0;
    this.y = 0;
  }

  /**
   * Disegna il tetronimo nella board di gioco.
   *
   * @memberof Piece
   */
  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  /**
   * Muove il tetronimo nella board di gioco
   *
   * @param {Object} p Tetronimo da spostare
   * @memberof Piece
   */
  move(p) {
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

  /**
   * Imposta la posizione di partenza in base al tetronimo generato.
   *
   * @memberof Piece
   */
  setStartingPosition() {
    this.x = this.typeId === 4 ? 4 : 3;
  }

  /**
   * Genera un numero random in base al parametro fornito
   *
   * @param {Number} noOfTypes Numero massimo da generare
   * @returns {Number} Il numero random.
   * @memberof Piece
   */
  randomizeTetrominoType(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes + 1);
  }
}