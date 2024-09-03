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
