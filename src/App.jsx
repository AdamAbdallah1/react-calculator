import { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import backArrowIcon from './assets/back-arrow-icon.png';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    const lastChar = input.slice(-1);
    const operators = ['+', '-', '/', '*'];

    if (operators.includes(value)) {
      if (operators.includes(lastChar)) {
        setInput(input.slice(0, -1) + value);
        return;
      }
    }

    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    if (input === '') return;

    const operators = ['+', '-', '/', '*'];
    let expression = input;
    const lastChar = expression.slice(-1);

    if (operators.includes(lastChar)) {
      expression = expression.slice(0, -1);
    }

    try {
      const result = eval(expression.replace(/x/g, '*'));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <main className="container m-auto flex items-center justify-center gap-5 p-5">
      <div className="flex w-2xs flex-col gap-5 rounded-4xl bg-blue-200 p-4">
        <Display value={input} />

        <div className="grid grid-cols-3 justify-center gap-2">
          {['1','2','3','4','5','6','7','8','9'].map((num) => (
            <Button
              key={num}
              value={num}
              onClick={() => handleClick(num)}
              className="bg-[#9500ff]"
            />
          ))}

          <Button value="AC" onClick={handleClear} className="bg-[#4B0082]" />
          <Button value="0" onClick={() => handleClick('0')} className="bg-[#9500ff]" />
          <Button onClick={handleBackspace} className="bg-[#4B0082] flex justify-center">
            <img src={backArrowIcon} alt="backspace" className="w-8" />
          </Button>
          <Button value="=" onClick={handleCalculate} className="bg-[#4B0082] col-span-3" />
        </div>
      </div>

      <div className="w-fit bg-blue-200 rounded-4xl p-4 flex flex-col gap-5 items-end">
        {['+','-','/','x'].map((op) => (
          <Button
            key={op}
            value={op}
            onClick={() => handleClick(op === 'x' ? '*' : op)}
            className="w-18 bg-[#4B0082] hover:bg-[#9500ff]"
          />
        ))}
      </div>
    </main>
  );
}

export default App;
