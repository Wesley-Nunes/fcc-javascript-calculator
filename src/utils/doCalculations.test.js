import doCalculations from './doCalculations';

describe('doCalculations', () => {
  test('input: "9*5" should return "45"', () => {
    const output = doCalculations('9*5');
    expect(output).toBe('45');
  });
  test('input: "256/4" should return "64"', () => {
    const output = doCalculations('256/4');
    expect(output).toBe('64');
  });
  test('input: "1+1" should return "2"', () => {
    const output = doCalculations('1+1');
    expect(output).toBe('2');
  });
  test('input: "10-5" should return "5"', () => {
    const output = doCalculations('10-5');
    expect(output).toBe('5');
  });
  test('input: "-2/4" should return "-0.5"', () => {
    const output = doCalculations('-2/4');
    expect(output).toBe('-0.5');
  });
  test('input: "3+56" should return "59"', () => {
    const output = doCalculations('3+56');
    expect(output).toBe('59');
  });
  test('input: "59-0.5" should return "58.5"', () => {
    const output = doCalculations('59-0.5');
    expect(output).toBe('58.5');
  });
  test('input: "13+56-2/4" should return "58.5"', () => {
    const output = doCalculations('3+56-2/4');
    expect(output).toBe('58.5');
  });
  test('input: "3+5*6-2/4" should return "32.5"', () => {
    const output = doCalculations('3+5*6-2/4');
    expect(output).toBe('32.5');
  });
  test('input: "600*15%" should return "90"', () => {
    const output = doCalculations('600*15%');
    expect(output).toBe('90');
  });
  test('input: "600/15%" should return "4000"', () => {
    const output = doCalculations('600/15%');
    expect(output).toBe('4000');
  });
});
