import './textfield.css'

export const TextField = (props) => {
    const value = `Digite ${props.placeholder}...`
    
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={value}></input>
        </div>
    )
}