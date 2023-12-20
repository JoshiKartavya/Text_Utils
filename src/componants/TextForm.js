import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your text here');

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute to read.</p>
            </div>
        </>
    )
}
