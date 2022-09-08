import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form'

function App() {
  
  const [people, setPeople] = useState([])

  const addPerson = (person) => {
    setPeople(...people, person)
  }
  
  return (
    <div className="App">
      <Banner/>
      <Form onRegisteredPerson = {
        person => addPerson(person)}/>
    </div>
  );
}

export default App;