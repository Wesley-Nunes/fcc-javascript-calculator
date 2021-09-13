/**
 * handleMath make math operations based on string(math symbol) or number inputed
 *
 * @param  {object} values
 *           {string} values.history - memorized math expression
 *           {string} values.current - the current math expression
 * @param  {string || number} input  - numbers[0-9] or math symbols( / * - + % . = )
 * @return {object} internalValue object(string) with two keys: [history, current]
 * updated with  the input
 */
function handleMath(values, input) {
  const inpuIsNumber = /[0-9]/.test(input);
  const isValidSymbol = /[C*%+/-=.]/.test(input);
  let internalValue = {
    current: values.current,
    history: values.history,
  };

  function handleNumbers() {
    if (internalValue.current === '0') {
      internalValue.current = `${input}`;
    } else {
      internalValue.current = `${internalValue.current}${input}`;
    }
  }

  function handleSymbols() {
    const symbols = [{
      name: 'C',
      action: internalValue = {
        current: '0',
        history: '',
      },
    }];

    function action(name) {
      const filtered = symbols.filter((s) => s.name === name);
      return filtered[0].action;
    }

    action(input);
  }

  if (inpuIsNumber) {
    handleNumbers();
  } else if (isValidSymbol) {
    handleSymbols();
  }

  return internalValue;
}

export default handleMath;
