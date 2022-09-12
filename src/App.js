import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form'
import Time from './components/time'
import { times } from './times'
import Rodape from './components/footer'

function App() {
  const [people, setPeople] = useState([])

  const addPerson = (person) => {
    console.log(person)
    setPeople([...people, person])
    console.log(people)
  }
  
  return (
    <div className="App">
      <Banner/>
      <Form 
        times = {times.map(time => time.name)}
        onRegisteredPerson = {
          person => addPerson(person)
        }
      />
      {times.map(time =>
        <Time 
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          people={people.filter(person => person.time === time.name)}
        />)}  
      <Rodape/>    
    </div>
  );
}

export default App;