import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {UserProvider} from './services/FetchDataService'

import UserProfile from './components/containers/UserProfile'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';


const App = () => {
    
    return (
        <div className="App">
            <div className="container" style={{height:'100%', width:'100%'}}>
                <UserProvider>
                    <UserProfile />
                </UserProvider>

            </div>
        </div>
    )
}
export default App
