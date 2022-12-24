import React, { useState } from "react";
import propTypes from "prop-types";

export default function Textutility(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert('Converted to Uppercase!', 'success')
  };

  const handlelowerCaseClick = () => {
    let capitalClick = text.toLowerCase();
    setText(capitalClick);
    // props.showAlert('Converted to lowercase', 'success')

  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert('Extra spaces is removed', 'success')
  };

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Text is copied')
    // props.showAlert('Text is Copied!', 'success')
  };

  const cleartTextArea = () => {
    let clearText = "";
    setText(clearText);
    // props.showAlert('Text is Cleared!', 'success')
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h1 style={{ color: props.mode === "dark" ? "#fff" : "#131313" }}>{props.heading}</h1>

      <div className="mb-3">
        <textarea value={text} className="form-control" id="myBox" rows="8" onChange={handleOnChange}
          style={{ backgroundColor: props.mode === "dark" ? "white" : "#131313", color: props.mode === "dark" ? "#131313" : "#fff" }}
          placeholder="Enter Your Text Here">
        </textarea>
      </div>

      <button disabled={text.length === 0} className="btn btn-secondary mx-2 mb-2" onClick={handleUpperCaseClick}>Convert To Uppercase</button>

      <button disabled={text.length === 0} className="btn btn-warning mx-2 mb-2" onClick={handlelowerCaseClick}>Convert to Lowercase</button>

      <button disabled={text.length === 0} className="btn btn-success mx-2 mb-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

      <button disabled={text.length === 0} className="btn btn-secondary mx-2 mb-2" onClick={handleCopyClipboard}>Copy To Clipboard</button>

      <button disabled={text.length === 0} className="btn btn-dark mx-2 mb-2" onClick={cleartTextArea}>Clear Text</button>


      <div className="container mt-4" style={{ color: props.mode === "dark" ? "#fff" : "#131313" }}>

        <h3><u>Your Text Summary</u></h3>

        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s+/g, '').length} characters</p>

        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes Read this text</p>

        <h3 className="mt-2"><u>Preview Your Text</u></h3>
        <p className="shadow p-4 rounded text-break" style={{ backgroundColor: props.mode === 'light' ? '#000' : '#fff', color: props.mode === 'light' ? '#fff' : '#000' }}>{text.length > 0 ? text : "Nothing to preview."}</p>

      </div>
    </>
  );
}

Textutility.prototype = { heading: propTypes.string.isRequired };

Textutility.defaultProp = { heading: "Enter Your Text" };
