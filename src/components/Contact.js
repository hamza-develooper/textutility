import React from "react";

export default function Contact(props) {
    return (
        <>
            <form className="shadow rounded py-5 px-4 mt-4">
                <h3 className="text-decoration-underline" style={{ color: props.mode === 'light' ? '#000' : '#fff' }}>Contact Form</h3>
                <div className="mb-3">
                    <label for="txtField" className="form-label" style={{ color: props.mode === 'light' ? '#000' : '#fff' }}>Username</label>
                    <input type="text" className="form-control" id="txtField" aria-describedby="txtHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" style={{ color: props.mode === 'light' ? '#000' : '#fff' }}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" style={{ color: props.mode === 'light' ? '#000' : '#fff' }}>Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </>
    )
}