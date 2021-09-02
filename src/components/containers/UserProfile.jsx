import React, { Fragment, useContext, useState } from 'react';
import FetchDataService from '../../services/FetchDataService';

FetchDataService.fetchData();


let local = [];
const myStorage = window.localStorage;


local =  myStorage.getItem('allData');
// console.log('LOCAL==', local)
let jjj = myStorage.getItem('userMainData');
console.log('PARSED++', JSON.parse(jjj))

export const UserProfile = () => { 
    


        return (
            
            <Fragment>
                <div style={{height:'500px', backgroundColor:'grey'}}><p></p>

                </div>
            </Fragment>

        )
    }


export default UserProfile

