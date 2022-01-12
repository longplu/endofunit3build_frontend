import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main(props) {
    const [people, setPeople] = useState([]);// represent emptiness of state with what is appropriate. If state is set with an array use an empty array not null. 

    const URL = 'https://endofunit3build-backend.herokuapp.com/people/';

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    const createPeople = async (person) => {
        await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person)
        });

        getPeople();
    }

    const updatePeople = async (person, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person)
        });

        getPeople();
    }

    const deletePeople = async (id) => {
        await fetch(URL + id, {
            method: "DELETE"
        })
        getPeople();
    }

    useEffect(() => getPeople(), []) //run getPeople once when component is mounted

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index people={people} createPeople={createPeople} />
                </Route>

                <Route path="/people/:id" render={(rp) => (
                    <Show 
                        {...rp}
                        updatePeople={updatePeople}
                        deletePeople={deletePeople}
                        people={people} 
                    />
                )} />
            </Switch>
        </main>
    )
  }
  
  export default Main