// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
  
  function caesar(input, shift, encode = true) {
    //create a result array 
    const result = []
    //check if shift isn't present, or equal to 0, or less than -25, or greater than 25
    if(shift === undefined || shift === 0 || shift < -25 || shift > 25){
       //return false 
      return false;
    }
    
    if (encode === false){
      shift = shift * -1
    }
    
    // loop through input
    for(let i = 0; i < input.length; i++){
      //create a current input 
      const current = input[i].toLowerCase();
      //loop through alphabet 
      for (let j = 0; j < alphabet.length; j++){
        //create a current alphabet i + toLowerCase
        const letter = alphabet[j].toLowerCase();
        //check if current is a nonalphabetic symbol
        if(j > 25){
          result.push(current)
          break;
        }
        if (current === letter){
         //if letter is shifted off, let it wrap back to the begining
          let index = j + shift;
          
          if(j + shift >= 26){
            index = j + shift - 26;  
          }
          
          if (j + shift < 0){
            index = j + shift + 26
          }
           //push to result 
          const encodedWord = alphabet[index];
        result.push(encodedWord)
        break;
        }
      } 
    }
     //return result joined by ''
    return result.join('').toLowerCase();
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
