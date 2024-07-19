import React from 'react'
import { MdPerson3 } from 'react-icons/md'

const Button = ({ bgColor, color, size, text, borderRadius, icon }) => {
    return (
        <button type='button'
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}>
            {text}
            {icon}
            {/* <MdPerson3 /> */}
        </button>
    )
}

export default Button