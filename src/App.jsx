import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main className="container m-auto items-center justify-center flex gap-5 p-5">
      <div class="flex w-2xs flex-col gap-5 rounded-4xl bg-blue-200 p-4">
        <div class="rounded bg-[#4B0082] text-white p-3 shadow-cyan-200">1</div>
        <div class="grid grid-cols-3 justify-center gap-2">
          <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">1</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">2</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">3</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">4</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">5</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">6</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">7</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">8</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">9</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-blue-400">AC</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#9500ff] py-4 text-white hover:bg-blue-400">0</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] py-4 text-white hover:bg-blue-400">.</button>
        <button class="text-2xl w-full cursor-pointer rounded-4xl bg-[#4B0082] ml-23 py-4 text-white hover:bg-[#4B0082]">=</button>
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
