import React, { Fragment, useContext } from 'react';
import {UserContext, UserProvider} from '../../services/FetchDataService';

export const UserProfile= () => {
/* class UserProfile extends React.Component {
    
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {


    } */


    /* render(){ */
        const localData = useContext(UserContext);
        console.log('==>',localData)
        return (
            <Fragment>
                <div style={{height:'500px', backgroundColor:'red'}}>{Object.keys(localData.data).map(i => (
                    <p key={i}>{i}</p>
                )) }

                </div>
            </Fragment>
        )
    }


export default UserProfile

