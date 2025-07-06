import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = (value) => {
    setInput('');
  }

  const handleCalculate = () => {
    try {
      const result = eval(input.replace(/x/g, '*'));
      setInput(result.toSring());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <main className="container m-auto items-center justify-center flex gap-5 p-5">
      <div class="flex w-2xs flex-col gap-5 rounded-4xl bg-blue-200 p-4">
        <div class="rounded bg-[#4B0082] text-white p-3 shadow-cyan-200">{input || 0}</div>
        <div class="grid grid-cols-3 justify-center gap-2">
          <button value={1} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">1</button>
          <button value={2} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">2</button>
          <button value={3} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">3</button>
          <button value={4} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">4</button>
          <button value={5} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">5</button>
          <button value={6} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">6</button>
          <button value={7} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">7</button>
          <button value={8} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">8</button>
          <button value={9} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">9</button>
          <button value={AC} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-blue-400">AC</button>
          <button value={0} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">0</button>
          <button value={"."} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-blue-400">.</button>
          <button value={"="} class="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] ml-23 py-4 text-white hover:bg-[#4B0082]">=</button>
        </div>
      </div>
      <div>
      <div class="w-fit bg-blue-200 rounded-4xl p-4 flex flex-col gap-5 items-end">
        <button class="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">+</button>
        <button class="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">-</button>
        <button class="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">/</button>
        <button class="w-18 cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-[#9500ff]">x</button>
        </div>
      </div>
    </main>
  )
}

export default App
