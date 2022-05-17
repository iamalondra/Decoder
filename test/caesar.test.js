// Write your tests here!
const {caesar} = require('../src/caesar');
const expect = require('chai').expect;
describe ('caesar', () => {
  
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
  
  const input = 'thinkful';
  
  const shift = 3;
  
  const encode = true;
  
  it('should check if shift is greater than 0, less than 25, and greater than -25', () => {
    const expected = 'wklqnixo';
    const actual = caesar(input, shift)
    expect(actual).to.eql(expected);
  })
  
  it ('Should return false if shift is not greater than 0, less than 25, or greater than -25', () => {
    const expected = false; 
    const actual = caesar (input)
    expect(actual).to.eql(expected)
  })
  
 it('Should maintain spaces and nonalphabetic symbols', () => {
   const expected = 'khoor zruog';
   const actual= caesar('hello world', shift);
   expect(actual).to.eql(expected)
 })
  
 it ('Should ignore cpaital letters', () => {
   const expected = 'wklqnixo'
   const actual = caesar('Thinkful', shift);
   expect(actual).to.eql(expected)
 })
  it ('Should wrap around to the front of the alphabet', () =>{
    const expected = 'cheud';
    const actual = caesar('zebra', shift);
    expect(actual).to.eql(expected);
  })
})











