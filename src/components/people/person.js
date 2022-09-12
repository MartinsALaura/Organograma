import './person.css'

export const Person = (props) => {
    return (
        <div className='person'>
            <div className='header' style={{backgroudColor: props.backgroundColor}}>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
} 