import React, { useState } from "react";
import { findPlace } from "../services/map.service";

function App(){
    const [textInput, setTextInput] = useState("");
    const [data, setData] = useState({});
    const [isFind, setIsFind] = useState(false);
    function handleChange(e){
        setTextInput(e.target.value);
    }
    function handleClick(){
        const textSearch = {
            value: textInput
        };
        findPlace(textSearch).then(res => {setData(res.data)});
        setIsFind(true);
    };
    return(
        <div className="form">
        <input type="text" 
                value={textInput}
                onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>search</span>
        </button>
        {isFind && (
            <div>
            <p>name: {data.name}</p>
            <p>formatted_address: {data.formatted_address}</p>
            <p>Geometry: {JSON.stringify(data.geometry)}</p>
            </div>
            )}
      </div>
    );
}

export default App;