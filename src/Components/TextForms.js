import React, {useState} from 'react'


export default function TextForms(props) {
  const [text, setText] = useState('');
  const upclick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const downclick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const cleartext = () =>{
    let newText = ("");
    setText(newText)
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  return (
    <>
        <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <label htmlFor="Box" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upclick}> Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={downclick}> Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={cleartext}> Clear Text</button>
        </div>
        <div className='container my-3'>
          <h2> Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008* text.split(" ").length} Minutes will take to read this text </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </>
    
  )
}
