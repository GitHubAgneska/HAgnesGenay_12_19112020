import React, { Fragment, useContext, useState } from 'react';
import FetchDataService from '../../services/FetchDataService';


export const UserProfile = () => { 

        FetchDataService.fetchData();

        return (
            
            <Fragment>
                <div style={{height:'500px', backgroundColor:'grey'}}><p></p>

                </div>
            </Fragment>

        )
    }


export default UserProfile

