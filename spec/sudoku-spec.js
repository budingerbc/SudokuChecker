var SudokuChecker = require('./../js/sudokuChecker.js').sudokuModule;

describe('SudokuChecker', function() {

  var sudokuChecker;

  beforeEach(function() {
    sudokuChecker = new SudokuChecker();
  });

  it('should show the first row of the sudoku board', function() {
    expect(sudokuChecker.getRow(1)).toEqual([1,5,2,4,6,9,3,7,8]);
  });

  it('should show the first column of the sudoku board', function () {
    expect(sudokuChecker.getColumn(1)).toEqual([1,7,4,6,9,8,5,2,3]);
  });

  it('should show the sorted row lists 1-9 only once', function() {
    expect(sudokuChecker.checkRow(1)).toEqual(true);
  });

  it('should check the column and return true if it matches', function() {
    expect(sudokuChecker.checkColumn(3)).toEqual(true);
  });
});
