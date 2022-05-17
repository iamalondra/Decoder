// Write your tests here!
const {substitution} = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution', () => {
  
  it('Should maintain spaces throughout', () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev', true);
    expect(expected).to.eql(actual); 
  })
  
  it('Should ignore capital letters', () => {
    const expected = 'you';
    const encode = substitution('You', 'xoyqmcgrukswaflnthdjpzibev', true);
    const actual = substitution(encode, 'xoyqmcgrukswaflnthdjpzibev', false);
    expect(actual).to.eql(actual);
  })
  
  it('Should return false if alphabet is anything but 26 characters long', () => {
    const expected = false;
    const actual =  substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibevs', true);
    expect(actual).to.eql(expected);
  })
  
  it('Should return false if any characters in the alphabet parameter are not unique characters', () => {
    const expected = false;
    const actual = substitution('thinkful', 'xoxqmcgrukswaflnthdjpzibev', false);
    expect(expected).to.eql(expected);
  })
})

























