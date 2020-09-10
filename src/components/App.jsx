import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import reducer from '../reducers'
import EventList from './EventList'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch}/>
      <EventList state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App;
