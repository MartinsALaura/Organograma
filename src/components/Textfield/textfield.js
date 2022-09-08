import './textfield.css'

export const TextField = (props) => {
    const placeHolderChanged = `Digite ${props.placeholder}...`
    
    let value = ''

    const onType = (e) => {
        value = e.target.value
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={onType} required={props.required} placeholder={placeHolderChanged} type={props.type}></input>
        </div>
    )
}