import React from 'react'

export default function contact() {
    return (
        <div className='contact-page'>
            <div className="sec-2">
                <h1>Let's Talk</h1>
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" placeholder="Current website (if exists)" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="message" placeholder="Message" className="message" />
                </form>
                <button type="submit" className="btn">Submit Now</button>
            </div>
        </div>
    )
}
