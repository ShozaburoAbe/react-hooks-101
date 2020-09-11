import React, {useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import EventList from './EventList'
import OperationLogs from './OperationLogs'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

const App = () => {
  const appState = localStorage.getItem('appWithRedux')
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('appWithRedux', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <EventList />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App;
