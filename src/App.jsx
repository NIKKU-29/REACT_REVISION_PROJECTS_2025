import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#212121')

  const colors = [
    { name: 'RED', code: 'bg-red-500' },
    { name: 'BLUE', code: 'bg-blue-500' },
    { name: 'PINK', code: 'bg-pink-500' },
    { name: 'GREEN', code: 'bg-green-500' },
    { name: 'CYAN', code: 'bg-cyan-500' },
    { name: 'PURPLE', code: 'bg-purple-500' },
    { name: 'YELLOW', code: 'bg-yellow-400' },
  ]

  const colorMap = {
    RED: 'red',
    BLUE: 'blue',
    PINK: 'pink',
    GREEN: 'green',
    CYAN: 'cyan',
    PURPLE: 'purple',
    YELLOW: 'yellow'
  }

  return (
    <>
      <div className="flex justify-center items-end h-screen w-full" style={{ backgroundColor: color }}>
        <div className="fixed bottom-12 flex flex-wrap justify-center gap-3 bg-white shadow-lg rounded-2xl p-4">
          {
              colors.map(({name,code}) => (
                <button 
                  key = {name}
                    className = {`text-white px-4 py-2 rounded-xl ${code} hover:scale-105 transition`}
                    onClick = {() => setColor(colorMap[name])}
                >    
                {name}
                </button>
            ))}

        </div>
      </div>
    </>
  )
}

export default App
