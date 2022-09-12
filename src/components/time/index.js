import './time.css';
import Person from '../people';

const Time = (props) => {
    const css = { backgroundColor: props.secondaryColor}
    return (
        props.people.lenght> 0 && <section className='time' style={css}>
            <h3 style={{borderColor:props.primaryColor}}>{props.name}</h3>
            <div className='people'>
                {props.people.map( person => <Person backgroundColor={props.time.primaryColor} key={person.name} img={person.img} name={person.name} cargo={person.cargo}/>)}
            </div>
        </section>
    )
}
export default Time