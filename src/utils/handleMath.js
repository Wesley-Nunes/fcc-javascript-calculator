import doCalculations from './doCalculations';

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
  const isValidSymbol = /[C*%+/\-.]/.test(input);
  const internalValue = {
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

  function handleDuplicates() {
    const lastValueIsOperator = /[*%+/-]/.test(internalValue.current[internalValue.current.length - 1]);
    if (lastValueIsOperator) {
      internalValue.current = internalValue.current.slice(0, -1);
    }
  }

  function handleSymbols() {
    const symbols = [
      {
        name: 'C',
        action: '0',
      },
      {
        name: '+/-',
        action: internalValue.current > 0 ? `-${internalValue.current}` : internalValue.current.slice(1),
      },
      {
        name: '%',
        action: `${internalValue.current}%`,
      },
      {
        name: '+',
        action: `${internalValue.current}+`,
      },
      {
        name: '-',
        action: `${internalValue.current}-`,
      },
      {
        name: '*',
        action: `${internalValue.current}*`,
      },
      {
        name: '/',
        action: `${internalValue.current}/`,
      },
      {
        name: '.',
        action: `${internalValue.current}.`,
      },
    ];

    function action(name) {
      const filtered = symbols.filter((s) => s.name === name);
      return filtered[0].action;
    }

    internalValue.current = action(input);
  }

  if (inpuIsNumber) {
    handleNumbers();
  } else if (isValidSymbol) {
    // Prevent multiple dots in one single number
    const isDecimalNumber = /[.]/.test(internalValue.current);
    if (isDecimalNumber && input === '.') {
      return internalValue;
    }
    handleDuplicates();
    handleSymbols();
  }

  if (input === '=') {
    internalValue.history = internalValue.current;
    internalValue.current = doCalculations(internalValue.current);
  }

  return internalValue;
}

export default handleMath;
