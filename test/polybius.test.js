// Write your tests here!
const {polybius} = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () => {
  const cypher = [
    ['a','b','c','d','e'],
    ['f','g','h','i,j','k'],
    ['l','m','n','o','p'],
    ['q','r','s','t','u'],
    ['v','w','x','y','z']
  ];
  
  it('should retrun a srting', () => {
    const expected = 'thi,jnkful';
    const actual = polybius('4432423352125413', false);
    expect(actual).to.have.string(expected); 
  }); 
  
  it ('Should maintain spaces', () => {
    const expected = 'hello world'
    const actual = polybius('3251131343 2543241341', false);
    expect(actual).to.eql(expected);
  });
  
  it('Should return a string when encoding', () => {
    const expected = '4432423352125413'
    const actual = polybius('thinkful', true);
    expect(actual).to.eql(expected);
  })
  
  it('Should ignore capital letters', () => {
    const expected = 'thi,jnkful'
    const encoded = polybius('Thinkful', true);
    const actual = polybius(encoded, false);
    expect(expected).to.eql(actual);
  });
  
  it('Should return  "42"  for  "i"  and  "j"  when encoding', () => {
    const expected = '42'
    const actual = polybius('i', true); 
    expect(actual).to.eql(actual); 
  })
   
  it('Should return  "i"  or  "j" for  "42"  when decoding', () => {
    const expected = 'i,j'
    const actual = polybius('42', false);
    expect(actual).to.eql(expected);
  })
})















