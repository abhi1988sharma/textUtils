import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handelUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case", "success")
    }

    const handelLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case", "success")
    }

    const handelClearClick = ()=>{
        let newText = ('');
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handelOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("cleared", "success")
    }

    
  return (
    <>
<div className='container'  style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>    
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} onClick={handelUpClick} className="btn btn-primary my-2 mx-2">Convert to upper case</button>
<button disabled={text.length===0} onClick={handelLoClick} className="btn btn-primary my-2 mx-2">Convert to lower case</button>
<button disabled={text.length===0} onClick={handelClearClick} className="btn btn-primary my-2  mx-2">Clear text</button>
<button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary my-2 mx-2">Copy Text</button>
<button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary my-2 mx-2">Remove extra spaces</button>

 </div>

 <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>

 </div>

 </>
  )
}
