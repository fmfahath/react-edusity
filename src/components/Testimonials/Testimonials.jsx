import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    return (
        <div className='testimonials'>

            <img src={back_icon} className='back-btn' />
            <div className='slider'>
                <ul>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} />
                                <div>
                                    <h3>Alina Wilson</h3>
                                    <p>Computer Science Student, UK</p>
                                </div>
                            </div>
                            <p>
                                Firstly, the academic programs offered are robust and diverse, catering to
                                various interests and career paths. The faculty members are knowledgeable and
                                passionate about their subjects, often going above and beyond to assist students
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} />
                                <div>
                                    <h3>Mohamed Fahath</h3>
                                    <p>Computer Science Student, SL</p>
                                </div>
                            </div>
                            <p>
                                Firstly, the academic programs offered are robust and diverse, catering to
                                various interests and career paths. The faculty members are knowledgeable and

                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} />
                                <div>
                                    <h3>Fedrika</h3>
                                    <p>Computer Science Student, SL</p>
                                </div>
                            </div>
                            <p>
                                Firstly, the academic programs offered are robust and diverse, catering to
                                various interests and career paths. The faculty members are knowledgeable and

                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} />
                                <div>
                                    <h3>James Smith</h3>
                                    <p>Computer Science Student, SL</p>
                                </div>
                            </div>
                            <p>
                                Firstly, the academic programs offered are robust and diverse, catering to
                                various interests and career paths. The faculty members are knowledgeable and
                                passionate about their subjects.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <img src={next_icon} className='next-btn' />
        </div>
    )
}

export default Testimonials 