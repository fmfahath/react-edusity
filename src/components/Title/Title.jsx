import React from 'react'
import './Title.css'

const Title = ({ subTitile, title }) => {
    return (
        <div className='title'>
            <p>{subTitile}</p>
            <h2>{title}</h2>
        </div>
    )
}

export default Title