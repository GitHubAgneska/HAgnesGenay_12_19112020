import React, { Fragment, useContext, useState } from 'react';
import {UserContext} from '../../services/FetchDataService';

export const UserProfile = () => {

        const localData = useContext(UserContext);

        console.log('==>',localData)
        return (
            localData.data? 
            <Fragment>
                <div style={{height:'500px', backgroundColor:'grey'}}>{Object.entries(localData.data.userInfos).map((value, key) => (
                    <p key={Math.random()}>{value}</p>
                )) }

                </div>
            </Fragment>
            : 'loading'
        )
    }


export default UserProfile

