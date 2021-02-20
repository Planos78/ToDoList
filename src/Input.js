import React, { useState } from 'react'
import PropsType from 'prop-types';
const Input = ({ addPost }) => {
    const [input, setInput] = useState('')
    function onChange(event) {
        setInput(event.target.value)
    }
    function onKeyDown(event) {
        const TextInput = event.target.value;
        if (event.key === 'Enter' && TextInput) {
            addPost(TextInput);
            setInput('');
        }
    }
    return (
        <div className='Input'>
            <div className='Input__header'>
                Create To do
            </div>
            <input className='Input__field' value={input} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    )
}
Input.propsType = {
    addPost: PropsType.func.isRequired
}

export default Input

