import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header';
import UserProfile from './components/containers/UserProfile'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';

import {createGlobalStyle} from 'styled-components'
import NavSide from './components/layout/Nav_side';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        scroll-behavior: smooth;
    }
    html {
        font-size: 100%; /* = 16px default */
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-family: 'Roboto', Helvetica, sans-serif;
        margin: 0;
        
        a { text-decoration: none; }
        input { border: transparent; }
        ul { margin: 0; padding: 0;}
        ul li { list-style: none; }
        button { display: block; border: none; }
    }
`


const App = () => {
    
    return (
        <div className="App">
            <div className="container" style={{height:'100%', width:'100%', position:'fixed'}}>
                <GlobalStyle />
                    <Router>
                        <Header /> {/* INSIDE router because contains NAV with 'LINK TO'  */}
                        <NavSide /> {/* same  */}
                        <Fragment>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/userProfile/18" />} />
                                <Route exact path="/userProfile/:id" component={UserProfile} />
                            </Switch>
                        </Fragment>
                    </Router>

            </div>
        </div>
    )
}
export default App
