
import {useState} from "react";

function ColorPicker()
{
    // const [color,setColor]=useState({hue: 0,sturation: 50,lightness: 50});
    const [color,setColor]=useState("#FFFFFF");
    const handelColorChange=(event)=>{
        setColor(event.target.value);
    }
    return(  
        <div className="color-picker-container">
            <h2>Color Picker</h2>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color :{color}</p>
            </div>
            <label htmlFor="">Select a color:</label>
            <input type="color" value={color} onChange={handelColorChange} />
        </div>
    );
}

export default ColorPicker