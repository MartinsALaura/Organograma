import { useState } from 'react'
import './textfield.css'

export const TextField = (props) => {
    const placeHolderChanged = `Digite ${props.placeholder}...`
    

    const onType = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.required} placeholder={placeHolderChanged} type={props.type}></input>
        </div>
    )
}