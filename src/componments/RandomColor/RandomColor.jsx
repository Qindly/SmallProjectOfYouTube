import { useState } from 'react'
import "./RandomColor.css"
const RandomColor = () => {
  const [color, setColor] = useState('#000000');
  const [colotStyle, setColorStyle] = useState('hex');

  const generateRandomColor = () => {
    if (colotStyle === 'hex') {
      setColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    } else {
      setColor('rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')');
    }
  };

  return (
    <div className='color_root'>
      <div className='color_button'>
        <button onClick={() => { setColorStyle('hex') }}>create HEX Color</button>
        <button onClick={() => { setColorStyle('rgb') }}>create RGB Color</button>
        <button onClick={generateRandomColor}>Generate Random Color</button>
      </div>
      <div>
        {colotStyle === 'hex' ?
          <div className='color_content' style={{ backgroundColor: color }}>{color}</div>
          :
          <div className='color_content' style={{ backgroundColor: color }}>{color}</div>
        }
      </div>
    </div>
  )
}

export default RandomColor