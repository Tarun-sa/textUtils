import React ,{useState} from 'react'

export default function TextForm(props) {

const [text, setText] = useState("")


//fpr converting to uppercase
const handleUpClick=()=>{
const newTxt=text.toUpperCase();
setText(newTxt);
if(text.split(" ").filter((element)=>{return element.length!==0}).length!==0)
props.showAlert("Converted to UpperCase","success")
}
//for converting to lowercase
const handleLoClick=()=>{
const newTxt=text.toLowerCase();
setText(newTxt);
if(text.split(" ").filter((element)=>{return element.length!==0}).length!==0)
props.showAlert("Converted to LowerCase","success")
}
//for converting to Capitalize
const handleCapClick=()=>{
const txt2=text;
let splitTxt=txt2.split(/\s+/);

for(var i=0;i<splitTxt.length;i++){
splitTxt[i]=splitTxt[i].charAt(0).toUpperCase()+splitTxt[i].substring(1);
}
setText(splitTxt.join(" "));
if(text.split(" ").filter((element)=>{return element.length!==0}).length!==0)
props.showAlert("First Leter Capitalized","success")

}
//clear
const handleClearClick=()=>{
const txt3=text;
const newTxt="";

if(txt3.length!==0){
setText(newTxt)
props.showAlert("Text Cleared","success");
}



}
//remove extra space
const handleExtraSpaceClick=()=>{
let newTxt =text.split(/[ ]+/);
setText(newTxt.join(" "));
if(text.length!==0)
props.showAlert("Extra Space Removed","success");
}

//for writing in text box
const handleOnChange=(event)=>{
setText(event.target.value)

}
    return (
        <>
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 >{props.header}</h2>
            <div className="mb-3 mt-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#2d2028':'white',
              color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleUpClick}>Covert to UpperCase</button>
             <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleLoClick}>Covert to LowerCase</button>
             <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleCapClick}>Covert to Capitalize Case</button>
             <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleClearClick}>Clear</button>
             <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleExtraSpaceClick}>Remove Extra Space</button>
          </div>

          <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your text Summary</h2>
          <p>You have {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters in your sentence</p>
          <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Nothing to preview"}</p>
          </div>
        </>
    )
}
