import React, { useState } from "react";

function Form(props) {

    const [red, toggleRed] = useState(false);
    const [blue, toggleBlue] = useState(false);
    const [yellow, toggleYellow] = useState(false);

    return (
        <div>
            <label>
                <input type="checkbox" checked={red} onChange={(e) => toggleRed(!red)}></input>
                Red
            </label>
            <label>
                <input type="checkbox" checked={blue} onChange={(e) => toggleBlue(!blue)}></input>
                Blue
            </label>
            <label>
                <input type="checkbox" checked={yellow} onChange={(e) => toggleYellow(!yellow)}></input>
                Yellow
            </label>

            <br />

            <button onClick={() => props.submitForm(red, blue, yellow)}>Submit</button>
        </div>
    );
}

export default Form;