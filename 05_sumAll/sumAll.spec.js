const sumAll = require('./sumAll')

describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
    expect(sumAll(10, Infinity)).toEqual('ERROR');
    expect(sumAll(10, false)).toEqual('ERROR');
    expect(sumAll(10, null)).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
  test('returns ERROR with faction', () => {
    expect(sumAll(1, 1/2)).toEqual('ERROR');
    expect(sumAll(1, 1/11)).toEqual('ERROR');
  });
});
