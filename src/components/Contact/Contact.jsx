import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrrow from '../../assets/white-arrow.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} /></h3>
                <p>Have a question, need assistance, or simply want to say hello? We'd love to hear from you! Please feel free to
                    you with prompt and helpful responses to any inquiries you may have
                </p>
                <ul>
                    <li><img src={mail_icon} />Contact@samole.com</li>
                    <li><img src={phone_icon} /> +1 2345-567-789</li>
                    <li><img src={location_icon} />89, Austin Awenu, Main Phase <br />
                        MA 02139, United State
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone number</label>
                    <input type='text' name='phone' placeholder='Enter your phone number' />
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required />
                    <button type='button' className='btn btn-dark'>Submit Now <img src={white_arrrow} /></button>
                </form>
                <span>success!</span>
            </div>
        </div>
    )
}

export default Contact