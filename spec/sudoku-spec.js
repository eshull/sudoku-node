import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {

  it('should display a list of values for all rows and columns', function() {
    var sudoku = new Sudoku()
    expect(sudoku.checkPuzzle()).toEqual(9);
  });

});
