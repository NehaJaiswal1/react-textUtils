
import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("change text to uppercase :" + text)
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
   
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleclearClick = ()=>{
        let newText = ("");
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handlereverseClick =(event)=>{
        let str = text.split("");
        str = str.reverse();
        let newText = str.join("");
        setText(newText);
        props.showAlert("Text Reverse!", "success");
    }

    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
       
    }


    
    const [text, setText] = useState(' ');
    // setText("new text")
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
           
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>

            
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>

                <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear text</button>

                <button className="btn btn-primary mx-1" onClick={handlereverseClick}>Reverse text</button>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Space</button>

                
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{(text.length>0)?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
