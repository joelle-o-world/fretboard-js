const cycleCombinations = require('../src/cycleCombinations')

for(let outcome of cycleCombinations([1,2,3], [1,2,3], ['eggs', 'cellos']))
  console.log(outcome)
