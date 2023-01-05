import React,{useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
   // console.log("On change");
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    //console.log("Uppercase was Clicked" + text); 
    let newText = text.toLocaleUpperCase();
  setText(newText);
  }
  const [text, setText]=useState(" Enter text here:");
  //text = "new"; // wrong way to  change the state
 // setText ("new"); // wrong way to  change the state
  return (
<>
<div>
<h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="myBox" className="form-label">Example textarea</label>
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
</>    
  )
}

