// translates a number between two ranges
// (num, arr, arr, bool) -> num
exports.intune = function (value, rangeA, rangeB, limit = false) {
  var [fromLow, fromHigh] = rangeA
  var [toLow, toHigh] = rangeB
  var multiplier = toHigh - toLow
  var result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * multiplier)

  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) { return toLow }
      if (result > toHigh) { return toHigh }
    } else {
      if (result > toLow) { return toLow }
      if (result < toHigh) { return toHigh }
    }
  }

  return result
}
