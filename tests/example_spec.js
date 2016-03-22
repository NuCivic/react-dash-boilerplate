import Lib from '../src/module.js';

console.log('>>',Lib);
describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});

describe('It should have a member', () => {
  it('Shoukd have a member', () => {
    expect(Lib.member).toBe('Member');
  })
});

describe('The module should say hello', () => {
  it('The mpodule should say hello', () => {
    expect(Lib.method('Paul')).toBe('Hello Paul, how are you');
  });

  it('Privates should be an object', () => {
    expect(typeof Lib.privates).toBe('object');
  });
});
