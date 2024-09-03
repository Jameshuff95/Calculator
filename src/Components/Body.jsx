import Button from './Button';
import { useState } from 'react';
import '../App.css';

// Display component to show the current value
const Display = ({ value }) => (
  <div className='display_container'>
    <div className='text_container'>
      {value}
      <div className='display_cursor' />
    </div>
  </div>
);

// ButtonGrid component to render all buttons
const ButtonGrid = ({ onClick, onCalculate, onClear }) => {
  const buttons = [
    'AC',
    'π',
    '%',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '>',
    '=',
  ];

  return (
    <div className='buttons_container'>
      {buttons.map((btn, index) => (
        <Button
          key={index}
          value={btn}
          onClick={() => {
            if (btn === '=') {
              onCalculate();
            } else if (btn === 'AC') {
              onClear();
            } else {
              onClick(btn);
            }
          }}
        />
      ))}
    </div>
  );
};

// Main Body component
function Body() {
  const [state, setState] = useState({
    num1: '',
    num2: '',
    operator: null,
    result: null,
    resultDisplayed: false,
  });

  const handleClick = (value) => {
    if (state.resultDisplayed) {
      if (['+', '-', '*', '/', 'π', '%'].includes(value)) {
        setState({
          ...state,
          num1: state.result.toString(),
          operator: value,
          num2: '',
          resultDisplayed: false,
          result: null,
        });
      } else if (!isNaN(value) || value === '.') {
        setState({
          ...state,
          num1: value,
          operator: null,
          num2: '',
          resultDisplayed: false,
          result: null,
        });
      }
    } else {
      if (['+', '-', '*', '/', 'π', '%'].includes(value)) {
        if (value === 'π') {
          if (state.operator === null) {
            setState({ ...state, num1: '3.141592654' });
          } else {
            setState({ ...state, num2: '3.141592654' });
          }
        } else {
          setState({ ...state, operator: value });
        }
      } else if (value === '>') {
        if (state.operator === null && state.num1 !== '') {
          setState({ ...state, num1: state.num1.slice(0, -1) });
        } else if (state.operator !== null && state.num2 !== '') {
          setState({ ...state, num2: state.num2.slice(0, -1) });
        }
      } else if (state.operator === null) {
        setState({ ...state, num1: state.num1 + value });
      } else {
        setState({ ...state, num2: state.num2 + value });
      }
    }
  };

  const calculate = () => {
    let res;
    switch (state.operator) {
      case '+':
        res = parseFloat(state.num1) + parseFloat(state.num2);
        break;
      case '-':
        res = parseFloat(state.num1) - parseFloat(state.num2);
        break;
      case '*':
        res = parseFloat(state.num1) * parseFloat(state.num2);
        break;
      case '/':
        res = parseFloat(state.num1) / parseFloat(state.num2);
        break;
      case '%':
        res = parseFloat(state.num1) % parseFloat(state.num2);
        break;
      default:
        return;
    }
    setState({ ...state, result: res, resultDisplayed: true });
  };

  const clear = () => {
    setState({
      num1: '',
      num2: '',
      operator: null,
      result: null,
      resultDisplayed: false,
    });
  };

  return (
    <div className='body'>
      <div className='main'>
        <Display
          value={
            state.result !== null
              ? state.result
              : `${state.num1} ${state.operator ? state.operator : ''} ${state.num2}`
          }
        />
        <ButtonGrid
          onClick={handleClick}
          onCalculate={calculate}
          onClear={clear}
        />
      </div>
    </div>
  );
}

export default Body;
