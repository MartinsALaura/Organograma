import './dropdown.css';

export const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={e => props.onChanged(e.target.value)} required={props.required} value={props.value}>
                {props.itens.map( item =>  { return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}