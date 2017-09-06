function SudokuChecker() {

   this.board = [[1,5,2,4,6,9,3,7,8],
                [7,8,9,2,1,3,4,5,6],
                [4,3,6,5,8,7,2,9,1],
                [6,1,3,8,7,2,5,4,9],
                [9,7,4,1,5,6,8,2,3],
                [8,2,5,9,3,4,1,6,7],
                [5,6,7,3,4,8,9,1,2],
                [2,4,8,6,9,1,7,3,5],
                [3,9,1,7,2,5,6,8,4]];
}

SudokuChecker.prototype.getRow = function(row) {
  return this.board[row-1];
};

SudokuChecker.prototype.getColumn = function(col) {

  var columnArray = [];
  for (i = 0; i < 9; i++) {
    columnArray.push(this.board[i][col - 1]);
  }
  return columnArray;
};

SudokuChecker.prototype.checkRow = function(row) {

  var sortedRow = this.getRow(row).sort();
  for(i = 0; i < sortedRow.length; i++)
  {
    if(i+1 !== sortedRow[i])
    {
      return false;
    }
  }
  return true;
};

SudokuChecker.prototype.checkColumn = function(col) {

  var sortedColumn = this.getColumn(col).sort();
  for(i = 0; i < sortedColumn.length; i++) {
    if(i+1 !== sortedColumn[i]) {
      return false;
    }
  }
  return true;
};

// Commented out - work on later
// SudokuChecker.prototype.getSquare = function(square) {
//
//     var squareArray = [];
//     if(square === 1 || square === 2 || square === 3) {
//       i = 0;
//     } else if (square === 4 || square === 5 || square === 6) {
//       i = 3;
//     }
//
//     for (i = 0; i < 3; i++) {
//
//     }
// }

exports.sudokuModule = SudokuChecker;
