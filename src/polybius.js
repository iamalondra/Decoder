// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
const cypher = [
    ['a','b','c','d','e'],
    ['f','g','h','i,j','k'],
    ['l','m','n','o','p'],
    ['q','r','s','t','u'],
    ['v','w','x','y','z']
  ];
  function polybius(input, encode = true) {
    //create result ''
    let result = ''
    let even = false;
   
    //check if input.length is odd 
    if(!encode && input.split(/\s+/).join('').length % 2 > 0){
      return false
    }
     // loop through input 
    for (let i = 0; i < input.length; i++){
      //create a current 
      const current = input[i].toLowerCase();
//       console.log('current:', current) 
      
      //check id current is a space 
      console.log(current);
      if (current === ' '){
        //add space to result 
        even = !even;
        result += ' ';
        continue
      }
       //check if encode === false 
      if(!encode){
          //check if i/2 has a remainder > 0
        if( i % 2 > 0 ){
          //create indexs i and i-1 
          const secondIndex = i + (even ? 1 : 0);
          const firstIndex = i - (even ? 0 : 1);
          const xAxis = parseInt(input[firstIndex]) - 1 ;       
          const yAxis = parseInt(input[secondIndex]) - 1;       
          const row = cypher[yAxis];
          const column = row[xAxis];
          console.log('column:', column);
          result += column
          continue 
        }
      }
      //check if letter is 42
          if (current === 'i' || current === 'j'){
            //add 42 to result
            result += 42;
            continue
          }
      //loop through input
        //get values for every two loops 
      //loop through cypher => get array
      for (let j = 0; j < cypher.length; j++){
      //create current row 
        const row = cypher[j];
        //loop through row 
        for(let k = 0; k < row.length; k++){
          //create a current letter 
          const letter = row[k];
//           console.log('letter:', letter)
          //cheeck if current is equal to letter
          if(current === letter){
            //add numbers to string
            result += `${k + 1}${j + 1}`; 
//             console.log('result:', result)
          }
        }
      }
    }
    //return result
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
