function comparePitchClassSets(A, B) {
  // Does A include B?

  // Return false if B has a pitch which A doesn't.
  for(let p of B)
    if(!A.includes(p))
      return false

  // Otherwise,
  return true
}
module.exports.includes = comparePitchClassSets
