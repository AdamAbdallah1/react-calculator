import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backArrowIcon from './assets/back-arrow-icon.png'

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    const lastChar = input.slice(-1);
    const operatos = ['+', '-', '/', '*'];

    if (operatos.includes(value)){
      if (operatos.includes(lastChar)) {
        setInput(input.slice(0, -1) + value);
        return;
      }
    }
    setInput(input + value)
  };

  const handleClear = (value) => {
    setInput('');
  }

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

  const handleBackSpace = () => {
    setInput(input.slice(0, -1));
  }

  return (
    <main className="container m-auto items-center justify-center flex gap-5 p-5">
      <div className="flex w-2xs flex-col gap-5 rounded-4xl bg-blue-200 p-4">
        <div className="rounded bg-[#4B0082] text-white p-3 shadow-cyan-200">{input || 0}</div>
        <div className="grid grid-cols-3 justify-center gap-2">
          <button onClick={() => handleClick('1')} value={1} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">1</button>
          <button onClick={() => handleClick('2')} value={2} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">2</button>
          <button onClick={() => handleClick('3')} value={3} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">3</button>
          <button onClick={() => handleClick('4')} value={4} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">4</button>
          <button onClick={() => handleClick('5')} value={5} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">5</button>
          <button onClick={() => handleClick('6')} value={6} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">6</button>
          <button onClick={() => handleClick('7')} value={7} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">7</button>
          <button onClick={() => handleClick('8')} value={8} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">8</button>
          <button onClick={() => handleClick('9')} value={9} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">9</button>
          <button onClick={handleClear} value={"AC"} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-blue-400">AC</button>
          <button onClick={() => handleClick('0')}  value={0} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">0</button>
          <button onClick={handleBackSpace} value={"."} className="flex justify-center text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-blue-400"><img className='w-8' src={backArrowIcon} alt="" /></button>
          <button onClick={handleCalculate} value={"="} className="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] ml-23 py-4 text-white hover:bg-[#4B0082]">=</button>
        </div>
      </div>
      <div>
      <div className="w-fit bg-blue-200 rounded-4xl p-4 flex flex-col gap-5 items-end">
        <button onClick={() => handleClick('+')} className="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">+</button>
        <button onClick={() => handleClick('-')} className="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">-</button>
        <button onClick={() => handleClick('/')} className="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">/</button>
        <button onClick={() => handleClick('*')} className="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">x</button>
        </div>
      </div>
    </main>
  )
}

export default App
