import React, { Fragment, useContext, useState } from 'react';
import {UserContext, UserProvider} from '../../services/FetchDataService';

export const UserProfile= () => {
/* class UserProfile extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    componentDidMount() { } */

    // userEffect(() => {}, {})


    /* render(){ */
        const localData = useContext(UserContext);
        const {loading} = useState({loading: true});

        console.log('==>',localData)
        return (
            localData.data? 
            <Fragment>
                <div style={{height:'500px', backgroundColor:'red'}}>{Object.entries(localData.data.userInfos).map((value, key) => (
                    <p key={Math.random()}>{value}</p>
                )) }

                </div>
            </Fragment>
            : 'loading'
        )
    }


export default UserProfile

