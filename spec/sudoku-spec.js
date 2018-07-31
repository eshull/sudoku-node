import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {

  // it('should display a list of values for all rows and columns', function() {
  //   var sudoku = new Sudoku()
  //   expect(sudoku.checkPuzzle()).toEqual([[1, 6, 8, 4, 5, 7, 9, 3, 2], [5, 7, 2, 3, 9, 1, 4, 6, 8], [9, 3, 4, 6, 2, 8, 5, 1, 7], [8, 2, 9, 7, 4, 3, 1, 5, 6], [6, 5, 1, 2, 8, 9, 3, 7, 4], [7, 4, 3, 5, 1, 6, 2, 8, 9], [3, 9, 5, 8, 7, 2, 6, 4, 1], [4, 1, 7, 9, 6, 5, 8, 2, 3], [2, 8, 6, 1, 3, 4, 7, 9, 5], [1, 5, 9, 8, 6, 7, 3, 4, 2], [6, 7, 3, 2, 5, 4, 9, 1, 8], [8, 2, 4, 9, 1, 3, 5, 7, 6], [4, 3, 6, 7, 2, 5, 8, 9, 1], [5, 9, 2, 4, 8, 1, 7, 6, 3], [7, 1, 8, 3, 9, 6, 2, 5, 4], [9, 4, 5, 1, 3, 2, 6, 8, 7], [3, 6, 1, 5, 7, 8, 4, 2, 9], [2, 8, 7, 6, 4, 9, 1, 3, 5]]);
  // });

  it('should display a list of values for all rows and columns', function() {
    var sudoku = new Sudoku()
    expect(sudoku.checkPuzzle()).toEqual("You win");
  });
});
