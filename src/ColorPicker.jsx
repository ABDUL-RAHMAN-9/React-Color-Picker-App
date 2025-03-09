import React from 'react'
import { useState } from 'react'

function ColorPicker()
{
    const [color, setColor] = useState('#FFFFFF');

    const handleColorChange = (event) =>
    {
        setColor(event.target.value);
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className='flex flex-col items-center justify-center w-100 border m-5 rounded-2xl p-5 space-y-5'>
                    <h1 className='text-4xl font-bold font-serif'>Color Picker</h1>
                    <div className="w-70 h-70 rounded-2xl flex justify-center items-center border-cyan-200 border-4 transition-all 0.25 ease-in-out" style={{ backgroundColor: color }}>
                        <p>Selected Color: {color}</p>
                    </div>
                    <label htmlFor="" className='text-2xl'>Set Color:</label>
                    <input
                        type="color"
                        className='w-20 h-12 p-1.5 rounded-lg border-2 border-solid'
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
            </div>
        </>
    )
}

export default ColorPicker
