export function Sudoku() {
  this.x1 = [1, 6, 8, 4, 5, 7, 9, 3, 2];
  this.x2 = [5, 7, 2, 3, 9, 1, 4, 6, 8];
  this.x3 = [9, 3, 4, 6, 2, 8, 5, 1, 7];
  this.x4 = [8, 2, 9, 7, 4, 3, 1, 5, 6];
  this.x5 = [6, 5, 1, 2, 8, 9, 3, 7, 4];
  this.x6 = [7, 4, 3, 5, 1, 6, 2, 8, 9];
  this.x7 = [3, 9, 5, 8, 7, 2, 6, 4, 1];
  this.x8 = [4, 1, 7, 9, 6, 5, 8, 2, 3];
  this.x9 = [2, 8, 6, 1, 3, 4, 7, 9, 5];
  this.y1 = [1, 5, 9, 8, 6, 7, 3, 4, 2];
  this.y2 = [6, 7, 3, 2, 5, 4, 9, 1, 8];
  this.y3 = [8, 2, 4, 9, 1, 3, 5, 7, 6];
  this.y4 = [4, 3, 6, 7, 2, 5, 8, 9, 1];
  this.y5 = [5, 9, 2, 4, 8, 1, 7, 6, 3];
  this.y6 = [7, 1, 8, 3, 9, 6, 2, 5, 4];
  this.y7 = [9, 4, 5, 1, 3, 2, 6, 8, 7];
  this.y8 = [3, 6, 1, 5, 7, 8, 4, 2, 9];
  this.y9 = [2, 8, 7, 6, 4, 9, 1, 3, 5];
}

Sudoku.prototype.checkPuzzle = function() {
  // var allArrays = [[this.x1], [this.x2], [this.x3], [this.x4], [this.x5], [this.x6], [this.x7], [this.x8], [this.x9], [this.y1], [this.y2], [this.y3], [this.y4], [this.y5], [this.y6], [this.y7], [this.y8], [this.y9]]
  var allArrays = 9
  var result = [];

  for (var i = 0; i < allArrays.length; i++) {
    if (i.includes(1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9))
    {
      result.push("Sudoku successfully completed");
    }
    else {
      result.push("Incorrect solution");
    }
    return result;
    }

  //   if result.includes("Incorrect solution")
  //   {
  //     return false;
  //   }
  //   else {
  //     return true;
  // }
  return allArrays
}

// Sudoku.prototype.combineArrays = function() {
//     allArrays = [this.x1, this.x2, this.x3, this.x4, this.x5, this.x6, this.x7, this.x8, this.x9, this.y1, this.y2, this.y3, this.y4, this.y5, this.y6, this.y7, this.y8, this.y9]
//     return allArrays
// }

// x1, x2, x3, x4, x5, x6, x7, x8, x9, y1, y2, y3, y4, y5, y6, y7, y8, y9
