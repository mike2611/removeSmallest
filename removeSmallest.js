function removeSmallest(numbers) {

  const indexMin = numbers.indexOf(Math.min(...numbers))
 
  
  return numbers.slice(0, indexMin).concat(numbers.slice(indexMin + 1, numbers.length))
}