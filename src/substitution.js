// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const abc = ['a', 'b', 'c', 'd','e','f','g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  function substitution(input, alphabet, encode = true) {
    console.log('alphabet:', alphabet);
    //create a result ''
    let result = ''
    //check if alphabet is not 26 characters long or has repeating characters
    if(alphabet === undefined ||alphabet.length !== 26 || alphabet.split('').some((item, index) => alphabet.indexOf(item) != index)){
      //return false
      return false;
    }
    //loop through input
    for (let i = 0; i < input.length; i++){
      //create a current and ignore capital letters
      const current = input[i].toLowerCase()
      //if current is equal to a space, space should be maintained 
      if (current === ' '){
        //add space to result 
        result += ' ';
        continue
      }
       //check if encode is equal to false 
      if(!encode){
        //loop through alphabet  
        for(let k = 0; k < alphabet.length; k++){
          //create a encoded
          const letter = alphabet[k]
          //if encoded === abc[k]
          if(current === letter){
        //add to result
            result += abc[k]; 
          }
        } 
      }else{
      //loop through abc 
      for(let j = 0; j < abc.length; j++){
      //get current's letter index
        const letter = abc[j];
        //check if current is equal to letter
        if(current === letter){
          //get substitution letter index
          //add to result
          result += alphabet[j]
        }
      }
     }
    }
     return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
