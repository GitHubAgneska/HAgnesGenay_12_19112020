import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import UserProfile from './components/containers/UserProfile'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', Helvetica, sans-serif;
    }
`


const App = () => {
    
    return (
        <div className="App">
            <div className="container" style={{height:'100%', width:'100%'}}>
                <GlobalStyle />
                <UserProfile />

            </div>
        </div>
    )
}
export default App
