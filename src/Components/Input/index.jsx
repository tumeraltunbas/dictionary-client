import React from 'react';

export const Input = (props) => {
  return (
    <input 
    type={props.type} 
    name={props.name} 
    id={props.id}
    placeholder={props.placeholder}
    className='form-control shadow-none'
    style={props.style}
    value={props.value}
    onChange={props.onChange}
    />
    
    );
}
