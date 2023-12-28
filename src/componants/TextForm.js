import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleloClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to your clipboard", "success");
    }

    const removeExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space have been removed!", "success");
    }

    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your text here');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute to read.</p>
            </div>
        </>
    )
}
